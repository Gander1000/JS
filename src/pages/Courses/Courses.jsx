import { lessons } from '../../data/lessons/index.js';
import { lessonStats, overallStats, useProgress } from '../../hooks/useProgress.js';
import LessonCard from '../../components/LessonCard/LessonCard.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import styles from './Courses.module.scss';

const CATEGORY_ORDER = [];

for (const lesson of lessons) {
  if (!CATEGORY_ORDER.includes(lesson.category)) {
    CATEGORY_ORDER.push(lesson.category);
  }
}

export default function Courses() {
  const { state } = useProgress();
  const stats = overallStats(state);

  return (
    <div className={styles.page}>
      <div className={styles.sidebarCol}>
        <Sidebar currentSlug={null} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Курс JavaScript</h1>
          <p className={styles.subtitle}>
            {lessons.length} уроков с теорией, примерами, упражнениями и тестами.
            Идите по порядку — каждая новая тема опирается на предыдущую.
          </p>
          <div className={styles.overall}>
            <ProgressBar
              value={stats.percent}
              label={`Общий прогресс: ${stats.percent}%`}
            />
          </div>
        </header>

        {CATEGORY_ORDER.map((category) => {
          const categoryLessons = lessons.filter((lesson) => lesson.category === category);
          return (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>
                {category}
                <span className={styles.categoryCount}>
                  {categoryLessons.length}{categoryLessons.length === 1 ? ' урок' : categoryLessons.length < 5 ? ' урока' : ' уроков'}
                </span>
              </h2>
              <div className={styles.grid}>
                {categoryLessons.map((lesson, index) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    index={lessons.indexOf(lesson)}
                    stats={lessonStats(state, lesson)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}