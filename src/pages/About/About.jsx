import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons/index.js';
import styles from './About.module.scss';

const STEPS = [
  {
    number: '01',
    title: 'Читаете теорию',
    text: 'Каждый урок объясняется простым языком: зачем это нужно, синтаксис, примеры с ожидаемым выводом и частые ошибки.',
  },
  {
    number: '02',
    title: 'Пишете код',
    text: 'Во встроенном редакторе можно сразу запускать примеры и экспериментировать. Результат и ошибки появляются рядом.',
  },
  {
    number: '03',
    title: 'Решаете задачи',
    text: 'Упражнения проверяются автоматически, а если решение неверное — будет подсказка. Тесты помогают закрепить тему.',
  },
  {
    number: '04',
    title: 'Следите за прогрессом',
    text: 'Пройденные уроки, решённые упражнения и результаты тестов сохраняются в вашем браузере.',
  },
];

const TECH = [
  ['React', 'интерфейс приложения'],
  ['Vite', 'сборка и запуск'],
  ['React Router', 'страницы и ссылки'],
  ['SCSS Modules', 'стили компонентов'],
  ['localStorage', 'сохранение прогресса'],
];

export default function About() {
  const exercisesCount = lessons.reduce((sum, lesson) => sum + lesson.exercises.length, 0);
  const quizCount = lessons.reduce((sum, lesson) => sum + lesson.quiz.length, 0);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>О сайте</h1>
        <p className={styles.subtitle}>
          JS Академия — учебный проект, который помогает новичкам освоить
          JavaScript с нуля: теория, практика и автоматическая проверка решений.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как проходить курс</h2>
        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что внутри</h2>
        <ul className={styles.facts}>
          <li>{lessons.length} уроков: от console.log до современных методов массивов.</li>
          <li>{exercisesCount} практических упражнений с автоматической проверкой.</li>
          <li>{quizCount} вопросов в тестах с мгновенной обратной связью.</li>
          <li>Встроенный редактор JavaScript в изолированной «песочнице».</li>
          <li>Прогресс сохраняется в localStorage и переживает обновления страницы.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Технологии</h2>
        <div className={styles.techList}>
          {TECH.map(([name, role]) => (
            <div key={name} className={styles.techCard}>
              <strong className={styles.techName}>{name}</strong>
              <span className={styles.techRole}>{role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Начать</h2>
        <div className={styles.actions}>
          <Link to="/courses" className={styles.primaryBtn}>К списку уроков</Link>
          <Link to="/practice" className={styles.secondaryBtn}>Открыть песочницу</Link>
        </div>
      </section>
    </div>
  );
}