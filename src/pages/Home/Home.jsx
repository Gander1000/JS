import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons/index.js';
import { overallStats, useProgress } from '../../hooks/useProgress.js';
import LessonCard from '../../components/LessonCard/LessonCard.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import styles from './Home.module.scss';

const FEATURES = [
  {
    icon: '📚',
    title: '18 продуманных уроков',
    text: 'От console.log до современных методов массивов. Каждая тема объясняется простым языком с примерами.',
  },
  {
    icon: '⌨️',
    title: 'Редактор прямо на сайте',
    text: 'Пишите код, запускайте его и сразу видите результат. Без установки дополнительных программ.',
  },
  {
    icon: '✅',
    title: 'Упражнения и тесты',
    text: 'Закрепляйте теорию практикой: задачи с проверкой решения и тесты с мгновенной обратной связью.',
  },
  {
    icon: '📈',
    title: 'Прогресс сохраняется',
    text: 'Пройденные уроки, решённые задачи и результаты тестов хранятся в вашем браузере.',
  },
];

const CATEGORY_COUNTS = lessons.reduce((acc, lesson) => {
  acc[lesson.category] = (acc[lesson.category] || 0) + 1;
  return acc;
}, {});

export default function Home() {
  const { state } = useProgress();
  const stats = overallStats(state);
  const firstLessons = lessons.slice(0, 4);
  const exercisesCount = lessons.reduce((sum, lesson) => sum + lesson.exercises.length, 0);
  const quizCount = lessons.reduce((sum, lesson) => sum + lesson.quiz.length, 0);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Бесплатный курс для начинающих</p>
          <h1 className={styles.heroTitle}>
            Научитесь программировать на{' '}
            <span className={styles.heroAccent}>JavaScript</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Интерактивные уроки, встроенный редактор кода, задачи с автоматической
            проверкой и тесты. Всё — на русском, простым языком, без воды.
          </p>
          <div className={styles.heroActions}>
            <Link to="/courses" className={styles.primaryBtn}>Начать учиться</Link>
            <Link to="/practice" className={styles.secondaryBtn}>Открыть редактор</Link>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.heroCardHead}>
            <span className={styles.heroCardDot}></span>
            <span className={styles.heroCardDot}></span>
            <span className={styles.heroCardDot}></span>
            <span className={styles.heroCardTitle}>console.js</span>
          </div>
          <pre className={styles.heroCode}>
            <code>{`// Ваш первый код
const name = "Аня";
const age = 17;

console.log("Привет, " + name + "!");
if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}`}</code>
          </pre>
          <div className={styles.heroCodeOutput}>
            <span className={styles.heroOutputLine}>Привет, Аня!</span>
            <span className={styles.heroOutputLine}>Доступ запрещён</span>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className={styles.statsRow} aria-label="Статистика курса">
        <div className={styles.statItem}>
          <strong className={styles.statValue}>{lessons.length}</strong>
          <span className={styles.statLabel}>уроков</span>
        </div>
        <div className={styles.statItem}>
          <strong className={styles.statValue}>{exercisesCount}</strong>
          <span className={styles.statLabel}>упражнений</span>
        </div>
        <div className={styles.statItem}>
          <strong className={styles.statValue}>{quizCount}</strong>
          <span className={styles.statLabel}>вопросов в тестах</span>
        </div>
        <div className={styles.statItem}>
          <strong className={styles.statValue}>{Object.keys(CATEGORY_COUNTS).length}</strong>
          <span className={styles.statLabel}>разделов</span>
        </div>
      </section>

      {/* Ваш прогресс */}
      <section className={styles.progressSection}>
        <h2 className={styles.sectionTitle}>Ваш прогресс</h2>
        <div className={styles.progressCard}>
          <ProgressBar value={stats.percent} label={`${stats.percent}%`} />
          <p className={styles.progressNote}>
            Пройдено {stats.done} из {stats.total} учебных элементов.
            Всё сохраняется автоматически в вашем браузере.
          </p>
          <Link to="/progress" className={styles.textLink}>Подробная статистика →</Link>
        </div>
      </section>

      {/* Начало курса */}
      <section className={styles.courseSection}>
        <h2 className={styles.sectionTitle}>Как устроен курс</h2>
        <p className={styles.sectionNote}>
          Уроки идут от простого к сложному. Проходите по порядку — и уже через
          несколько уроков сможете писать рабочие программы.
        </p>
        <div className={styles.lessonGrid}>
          {firstLessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={lesson} index={index} />
          ))}
        </div>
        <Link to="/courses" className={styles.primaryBtn}>Все уроки курса</Link>
      </section>

      {/* Возможности */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Почему это работает</h2>
        <div className={styles.featuresGrid}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}