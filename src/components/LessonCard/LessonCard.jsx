import { Link } from 'react-router-dom';
import styles from './LessonCard.module.scss';

export const DIFFICULTY_LABEL = {
  easy: 'Лёгкий',
  medium: 'Средний',
  hard: 'Сложный',
};

/**
 * Карточка урока на страницах «Курсы», «Главная».
 *
 * @param {object} lesson - объект урока из данных курса.
 * @param {number} index - порядковый номер в списке (начинается с 0).
 * @param {object} stats - статистика прогресса по уроку (lessonStats).
 */
export default function LessonCard({ lesson, index, stats = null }) {
  const percent = stats ? stats.percent : 0;

  return (
    <Link to={`/learn/${lesson.slug}`} className={styles.card}>
      <div className={styles.cardTop} aria-hidden="true">
        <span className={styles.icon}>{lesson.icon}</span>
        <span className={styles.lessonNumber}>Урок {index + 1}</span>
        <span className={`${styles.badge} ${styles[`badge${lesson.difficulty}`]}`}>
          {DIFFICULTY_LABEL[lesson.difficulty]}
        </span>
      </div>

      <h3 className={styles.title}>{lesson.title}</h3>
      <p className={styles.description}>{lesson.description}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>⏱ {lesson.minutes} мин</span>
        <span className={styles.metaItem}>✏️ {lesson.exercises.length} упражн.</span>
        <span className={styles.metaItem}>❓ {lesson.quiz.length} тестов</span>
      </div>

      <div className={styles.progressRow}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <span className={styles.progressText}>{percent}%</span>
      </div>

      <span className={styles.skills}>
        {lesson.skills.slice(0, 3).map((skill) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
        {lesson.skills.length > 3 && (
          <span className={styles.skill}>+{lesson.skills.length - 3}</span>
        )}
      </span>
    </Link>
  );
}