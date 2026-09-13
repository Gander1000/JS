import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons/index.js';
import { lessonStats, overallStats, useProgress } from '../../hooks/useProgress.js';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import styles from './Progress.module.scss';

export default function Progress() {
  const progress = useProgress();
  const state = progress.state;
  const stats = overallStats(state);

  const exercisesTotal = lessons.reduce((sum, lesson) => sum + lesson.exercises.length, 0);
  const exercisesDone = lessons.reduce(
    (sum, lesson) => sum + lessonStats(state, lesson).exercisesDone,
    0,
  );
  const quizzesTotal = lessons.filter((lesson) => lesson.quiz.length > 0).length;
  const quizzesDone = lessons.filter((lesson) => lessonStats(state, lesson).quizDone).length;
  const lessonsDone = state.completedLessons.length;

  const handleReset = () => {
    const ok = window.confirm('Точно сбросить весь прогресс? Все пройденные уроки, упражнения и тесты будут удалены.');
    if (ok) {
      progress.resetAll();
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Прогресс</h1>
        <p className={styles.subtitle}>
          Ваш прогресс сохраняется в этом браузере (localStorage) и переживает
          обновления страницы.
        </p>
      </header>

      {/* Общий прогресс */}
      <section className={styles.overallSection}>
        <div className={styles.circleWrap}>
          <div
            className={styles.circle}
            style={{
              background: `conic-gradient(var(--accent) ${stats.percent}%, var(--surface-2) ${stats.percent}%)`,
            }}
          >
            <span className={styles.circleValue}>{stats.percent}%</span>
          </div>
        </div>
        <div className={styles.overallStats}>
          <h2 className={styles.sectionTitle}>Общий прогресс</h2>
          <p className={styles.overallNote}>
            Всего заработано {stats.done} из {stats.total} учебных элементов.
          </p>
          <ul className={styles.statRows}>
            <li>
              <span>Пройдено уроков</span>
              <strong>{lessonsDone} / {lessons.length}</strong>
            </li>
            <li>
              <span>Решено упражнений</span>
              <strong>{exercisesDone} / {exercisesTotal}</strong>
            </li>
            <li>
              <span>Пройдено тестов</span>
              <strong>{quizzesDone} / {quizzesTotal}</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Детали по урокам */}
      <section className={styles.detailSection}>
        <h2 className={styles.sectionTitle}>Детали по урокам</h2>
        <div className={styles.lessonRows}>
          {lessons.map((lesson) => {
            const stat = lessonStats(state, lesson);
            return (
              <div key={lesson.id} className={styles.lessonRow}>
                <Link to={`/learn/${lesson.slug}`} className={styles.lessonLink}>
                  <span className={styles.lessonIcon} aria-hidden="true">{lesson.icon}</span>
                  <span className={styles.lessonTitle}>{lesson.shortTitle}</span>
                </Link>
                <div className={styles.lessonMeta}>
                  <span className={styles.metaChip}>урок {stat.done > 0 ? '✓' : '—'}</span>
                  <span className={styles.metaChip}>упражнения {stat.exercisesDone}/{stat.exercisesTotal}</span>
                  <span className={styles.metaChip}>тест {stat.quizDone ? '✓' : '—'}</span>
                </div>
                <ProgressBar
                  value={stat.percent}
                  label={`${stat.percent}%`}
                  variant={stat.percent === 100 ? 'success' : 'accent'}
                />
              </div>
            );
          })}
        </div>
      </section>

      <button type="button" className={styles.resetBtn} onClick={handleReset}>
        Сбросить весь прогресс
      </button>
    </div>
  );
}