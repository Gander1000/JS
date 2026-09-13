import styles from './CodeOutput.module.scss';

const LEVEL_META = {
  log: { icon: '', className: 'lineLog' },
  info: { icon: 'ℹ', className: 'lineInfo' },
  warn: { icon: '⚠', className: 'lineWarn' },
  error: { icon: '✖', className: 'lineError' },
  alert: { icon: '🔔', className: 'lineDialog' },
  prompt: { icon: '✏️', className: 'lineDialog' },
  confirm: { icon: '💬', className: 'lineDialog' },
  html: { icon: '📄', className: 'lineHtml' },
};

const LEVEL_TITLE = {
  alert: 'окно alert()',
  prompt: 'окно prompt() — в песочнице возвращает пустую строку',
  confirm: 'окно confirm() — в песочнице возвращает false',
};

/**
 * Консоль с выводом кода.
 *
 * @param {Array} [lines] - строки вывода [{ level, text }].
 * @param {boolean} [timedOut] - превышен ли лимит выполнения.
 * @param {string} [errorHint] - дружелюбное объяснение ошибки.
 */
export default function CodeOutput({ lines = [], timedOut = false, errorHint = null }) {
  const errorLine = lines.find((line) => line.level === 'error');

  return (
    <section className={styles.console} aria-label="Консоль вывода">
      <div className={styles.head}>
        <span className={styles.dots} aria-hidden="true">
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </span>
        <span className={styles.title}>Консоль</span>
        <span className={styles.count}>{lines.length}</span>
      </div>

      {timedOut && (
        <p className={styles.timeout}>
          Код не завершился за отведённое время. Похоже, в нём бесконечный цикл.
        </p>
      )}

      {errorLine && (
        <div className={styles.errorBox}>
          <p className={styles.errorTitle}>Произошла ошибка</p>
          <p className={styles.errorText}>{errorLine.text}</p>
          {errorHint && <p className={styles.errorHint}>{errorHint}</p>}
        </div>
      )}

      {lines.length === 0 && !timedOut && !errorLine && (
        <p className={styles.empty}>Запустите код — здесь появится вывод и ошибки.</p>
      )}

      <div className={styles.body}>
        {lines.map((line, index) => {
          const meta = LEVEL_META[line.level] || LEVEL_META.log;
          return (
            <div key={index} className={`${styles.line} ${styles[meta.className]}`}>
              <span className={styles.lineIcon}>{meta.icon}</span>
              <span className={styles.lineText}>{line.text}</span>
            </div>
          );
        })}
      </div>

      {lines.some((line) => line.level === 'alert' || line.level === 'prompt' || line.level === 'confirm') && (
        <p className={styles.note}>
          {lines
            .filter((line) => LEVEL_TITLE[line.level])
            .map((line) => LEVEL_TITLE[line.level])
            .filter((value, index, arr) => arr.indexOf(value) === index)
            .join(' · ')}
        </p>
      )}
    </section>
  );
}