import { useState } from 'react';
import { runUserCode } from '../../utils/codeRunner.js';
import { checkExercise } from '../../utils/exerciseChecker.js';
import { useProgress } from '../../hooks/useProgress.js';
import { DIFFICULTY_LABEL } from '../LessonCard/LessonCard.jsx';
import CodeOutput from '../CodeOutput/CodeOutput.jsx';
import styles from './Exercise.module.scss';

/**
 * Практическое упражнение: задача + редактор кода + «Выполнить» и «Проверить».
 *
 * @param {object} exercise - данные упражнения из урока.
 * @param {number} lessonId - id урока (для сохранения прогресса).
 * @param {number} index - порядковый номер упражнения.
 * @param {string} [verification] - если отличается от "code", проверяет по паттерну.
 */
export default function Exercise({ exercise, lessonId, index }) {
  const progress = useProgress();
  const wasDone = progress.isExerciseDone(lessonId, index);

  const [code, setCode] = useState(exercise.starter);
  const [status, setStatus] = useState(wasDone ? 'correct' : null);
  const [hint, setHint] = useState(null);
  const [lines, setLines] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    if (running) return;
    setRunning(true);
    setLines([]);
    runUserCode(code, {
      onAppend: (line) => setLines((prev) => [...prev, line]),
    }).then((result) => {
      if (result.timedOut) {
        setLines([{ level: 'warn', text: 'Код не завершился за отведённое время.' }]);
      } else if (result.lines.length > 0) {
        setLines(result.lines);
      }
      setRunning(false);
    });
  };

  const handleCheck = async () => {
    if (running) return;
    setRunning(true);
    const result = await checkExercise(code, exercise);
    setRunning(false);

    if (result.pass) {
      setStatus('correct');
      setHint(null);
      progress.setExerciseResult(lessonId, index, true);
    } else {
      setStatus('incorrect');
      setHint(result.hint);
      if (result.lines.length > 0) {
        setLines(result.lines);
      }
    }
  };

  const handleReset = () => {
    setCode(exercise.starter);
    setLines([]);
    setStatus(wasDone ? 'correct' : null);
    setHint(null);
    setShowSolution(false);
  };

  return (
    <div className={`${styles.exercise}${status === 'correct' ? ` ${styles.exerciseDone}` : ''}`}>
      <div className={styles.top}>
        <span className={styles.number}>Задача {index + 1}</span>
        <span className={styles.difficulty}>{DIFFICULTY_LABEL[exercise.difficulty] || ''}</span>
        {status === 'correct' && <span className={styles.doneBadge}>✓ Решено</span>}
      </div>

      <p className={styles.task}>{exercise.task}</p>

      <textarea
        className={styles.code}
        value={code}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        aria-label={`Код к задаче ${index + 1}`}
        onChange={(event) => setCode(event.target.value)}
        onKeyDown={(event) => {
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
        }}
      ></textarea>

      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.action} ${styles.actionRun}`}
          onClick={handleRun}
          disabled={running}
        >
          {running ? 'Выполняется…' : '▶ Выполнить'}
        </button>
        <button
          type="button"
          className={`${styles.action} ${styles.actionCheck}`}
          onClick={handleCheck}
          disabled={running}
        >
          Проверить
        </button>
        <button
          type="button"
          className={`${styles.action} ${styles.actionReset}`}
          onClick={handleReset}
        >
          Сброс
        </button>
        <button
          type="button"
          className={`${styles.action} ${styles.actionSolution}`}
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Скрыть решение' : 'Показать решение'}
        </button>
      </div>

      {status === 'incorrect' && hint && (
        <div className={styles.feedback} role="status">
          <p className={styles.feedbackTitle}>Неверно. Подсказка:</p>
          <p className={styles.feedbackText}>{hint}</p>
        </div>
      )}

      {showSolution && (
        <div className={styles.solution}>
          <p className={styles.solutionTitle}>Решение</p>
          <pre className={styles.solutionCode}>
            <code>{exercise.solution}</code>
          </pre>
        </div>
      )}

      {lines.length > 0 && status !== 'correct' && (
        <CodeOutput lines={lines} />
      )}
    </div>
  );
}