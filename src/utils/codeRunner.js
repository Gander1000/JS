/**
 * Безопасный запуск пользовательского JavaScript.
 *
 * Код выполняется внутри изолированного iframe (sandbox + srcdoc),
 * НИКОГДА не выполняется внутри основного приложения через eval().
 *
 * Общение с iframe — через postMessage. Песочница перехватывает
 * console.*, alert/prompt/confirm и document.write и присылает
 * все строки вывода родительскому окну.
 */

let iframe = null;
let ready = false;
let harnessDirty = false;
let runSeq = 0;
const pending = new Map();
let booting = null;

const HARNESS_HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
</head>
<body>
<script>
(() => {
  const parent = window.parent;
  const send = (msg) => parent.postMessage(msg, '*');

  const lines = [];
  const push = (level, text) => {
    const line = { level: level, text: String(text) };
    lines.push(line);
    send({ type: 'append', id: window.__runId, line: line });
  };

  const formatValue = (value) => {
    if (typeof value === 'string') return value;
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';
    if (typeof value === 'function') {
      const firstLine = String(value).split('\\n')[0];
      return firstLine + ' …';
    }
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  };
  const logAll = (level, args) => push(level, Array.prototype.map.call(args, formatValue).join(' '));

  window.addEventListener('message', (event) => {
    const data = event && event.data;
    if (!data || typeof data !== 'object' || data.type !== 'run') return;
    window.__runId = data.id;
    // Каждый запуск должен возвращать только собственный вывод, а не историю
    // предыдущих попыток в той же песочнице.
    lines.length = 0;
    try {
      eval(data.code);
    } catch (err) {
      push('error', err.toString());
    }
    send({ type: 'result', id: data.id, lines: lines.slice() });
  });

  console.log = (...args) => logAll('log', args);
  console.info = (...args) => logAll('info', args);
  console.warn = (...args) => logAll('warn', args);
  console.error = (...args) => logAll('error', args);

  window.onerror = (message) => {
    if (window.__runId) {
      push('error', message);
    }
  };

  window.alert = (message) => push('alert', message);
  window.confirm = (message) => {
    push('confirm', message);
    return false;
  };
  window.prompt = (message) => {
    push('prompt', message);
    return '';
  };

  document.write = (value) => push('html', value);

  send({ type: 'ready' });
})();
<\/script>
</body>
</html>`;

function buildHarness() {
  const frame = document.createElement('iframe');
  frame.setAttribute('sandbox', 'allow-scripts allow-forms');
  frame.setAttribute('aria-hidden', 'true');
  frame.title = 'Песочница JavaScript';
  frame.tabIndex = -1;
  frame.style.cssText = 'position:fixed;left:-9999px;top:0;width:320px;height:240px;border:0;opacity:0.01;';
  frame.srcdoc = HARNESS_HTML;
  document.body.appendChild(frame);
  return frame;
}

function resetHarness() {
  if (iframe) {
    iframe.remove();
    iframe = null;
  }
  ready = false;
  harnessDirty = false;
  booting = null;
}

function queueRun(callback) {
  if (iframe && ready) {
    callback();
    return;
  }
  if (!booting) {
    booting = [];
    iframe = buildHarness();
  }
  booting.push(callback);
}

window.addEventListener('message', (event) => {
  const data = event && event.data;
  if (!data || typeof data !== 'object') return;

  if (data.type === 'ready') {
    ready = true;
    if (booting) {
      const callbacks = booting;
      booting = null;
      callbacks.forEach((cb) => cb());
    }
    return;
  }

  const entry = pending.get(data.id);
  if (!entry) return;

  if (data.type === 'append' && typeof entry.onAppend === 'function') {
    entry.onAppend(data.line);
    return;
  }

  if (data.type === 'result') {
    pending.delete(data.id);
    if (typeof entry.onResult === 'function') {
      entry.onResult({
        lines: data.lines || [],
        timedOut: false,
      });
    }
  }
});

/**
 * Запустить пользовательский код в песочнице.
 *
 * @param {string} code - JavaScript-код пользователя.
 * @param {object} [options]
 * @param {number} [options.timeout] - лимит выполнения в мс (по умолчанию 4000).
 * @param {function} [options.onAppend] - вызывается при каждой новой строке вывода.
 * @returns {Promise<{lines: Array, timedOut: boolean}>}
 */
export function runUserCode(code, options = {}) {
  const timeout = options.timeout || 4000;
  const onAppend = options.onAppend;

  return new Promise((resolve) => {
    const id = ++runSeq;
    let settled = false;

    const settle = (payload) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(payload);
    };

    const timer = setTimeout(() => {
      pending.delete(id);
      harnessDirty = true; // вероятно, был бесконечный цикл — пересоздадим песочницу
      settle({ lines: [], timedOut: true });
    }, timeout);

    if (harnessDirty) {
      resetHarness();
    }

    pending.set(id, {
      onAppend,
      onResult: (payload) => settle(payload),
    });

    queueRun(() => {
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'run', id, code }, '*');
      } else {
        pending.delete(id);
        settle({ lines: [], timedOut: true });
      }
    });

    // ограничиваем размер карты ожидающих запусков
    if (pending.size > 6) {
      const firstKey = pending.keys().next().value;
      pending.delete(firstKey);
    }
  });
}
