import { useState } from 'react';
import { runUserCode } from '../../utils/codeRunner.js';
import { friendlyError } from '../../utils/friendlyError.js';
import CodeOutput from '../CodeOutput/CodeOutput.jsx';
import styles from './CodeEditor.module.scss';

/**
 * Интерактивный редактор JavaScript с кнопкой «Выполнить».
 *
 * @param {string} [initialCode] - стартовый код.
 * @param {string} [title] - заголовок панели.
 * @param {function} [onChange] - вызывается при изменении кода.
 * @param {string} [resetId] - если изменится, код сбросится на initialCode.
 */
export default function CodeEditor({
  initialCode = '',
  title = 'Редактор JavaScript',
  onChange = null,
}) {
  const [code, setCode] = useState(initialCode);
  const [lines, setLines] = useState([]);
  const [running, setRunning] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const handleRun = () => {
    if (running) return;
    setRunning(true);
    setTimedOut(false);
    setLines([]);

    runUserCode(code, {
      onAppend: (line) => {
        setLines((prev) => [...prev, line]);
      },
    }).then((result) => {
      if (result.timedOut) {
        setTimedOut(true);
      } else if (result.lines.length > 0) {
        setLines(result.lines);
      }
      setRunning(false);
    });
  };

  const handleKeyDown = (event) => {
    // Вставка отступа по Tab
    if (event.key === 'Tab') {
      event.preventDefault();
      const { selectionStart, selectionEnd, value } = event.currentTarget;
      const next = value.slice(0, selectionStart) + '  ' + value.slice(selectionEnd);
      setCode(next);
      const cursor = selectionStart + 2;
      requestAnimationFrame(() => {
        event.currentTarget.setSelectionRange(cursor, cursor);
      });
    }
  };

  const handleChange = (event) => {
    const next = event.target.value;
    setCode(next);
    if (onChange) {
      onChange(next);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setLines([]);
    setTimedOut(false);
    if (onChange) {
      onChange(initialCode);
    }
  };

  return (
    <div className={styles.editor}>
      <div className={styles.head}>
        <span className={styles.headTitle}>{title}</span>
        <div className={styles.controls}>
          <button type="button" className={styles.reset} onClick={handleReset}>
            Сброс
          </button>
          <button type="button" className={styles.run} onClick={handleRun} disabled={running}>
            {running ? 'Выполняется…' : '▶ Выполнить'}
          </button>
        </div>
      </div>

      <textarea
        className={styles.code}
        value={code}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        aria-label="Код JavaScript"
      ></textarea>

      <CodeOutput
        lines={lines}
        timedOut={timedOut}
        errorHint={
          lines.some((line) => line.level === 'error')
            ? friendlyError(lines.find((line) => line.level === 'error').text)
            : null
        }
      />
    </div>
  );
}