import { Link } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress.js';
import styles from './LessonNavigation.module.scss';

/**
 * Навигация по урокам: предыдущий / следующий + отметка о прохождении.
 */
export default function LessonNavigation({ lesson, prevLesson = null, nextLesson = null }) {
  const progress = useProgress();
  const completed = progress.isLessonCompleted(lesson.id);

  const handleToggle = () => {
    progress.setLessonCompleted(lesson.id, !completed);
  };

  return (
    <nav className={styles.nav} aria-label="Навигация по урокам">
      <div className={styles.prevCol}>
        {prevLesson && (
          <Link to={`/learn/${prevLesson.slug}`} className={styles.prev}>
            <span className={styles.prevHint}>← Предыдущий урок</span>
            <span className={styles.prevTitle}>{prevLesson.shortTitle}</span>
          </Link>
        )}
      </div>

      <button
        type="button"
        className={`${styles.complete}${completed ? ` ${styles.completeDone}` : ''}`}
        onClick={handleToggle}
      >
        {completed ? 'Урок пройден ✓' : 'Отметить урок пройденным'}
      </button>

      <div className={styles.nextCol}>
        {nextLesson ? (
          <Link to={`/learn/${nextLesson.slug}`} className={styles.next}>
            <span className={styles.nextHint}>Следующий урок →</span>
            <span className={styles.nextTitle}>{nextLesson.shortTitle}</span>
          </Link>
        ) : (
          <span className={styles.nextDisabled}>Это последний урок курса 🎉</span>
        )}
      </div>
    </nav>
  );
}