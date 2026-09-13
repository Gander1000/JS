import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons/index.js';
import CodeEditor from '../../components/CodeEditor/CodeEditor.jsx';
import styles from './Practice.module.scss';

/**
 * Дополнительные стартовые сниппеты для песочницы.
 */
const SNIPPETS = [
  {
    id: 'greeting',
    title: 'Приветствие',
    icon: '👋',
    code: `const name = "Друг";
console.log("Привет, " + name + "!");`,
  },
  {
    id: 'calculator',
    title: 'Калькулятор',
    icon: '🧮',
    code: `const a = 12;
const b = 8;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);`,
  },
  {
    id: 'even-odd',
    title: 'Чётное или нечётное?',
    icon: '🔢',
    code: `const number = 7;
if (number % 2 === 0) {
  console.log("Чётное");
} else {
  console.log("Нечётное");
}`,
  },
  {
    id: 'sum-loops',
    title: 'Сумма через цикл',
    icon: '🔁',
    code: `let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Сумма от 1 до 10: " + sum);`,
  },
  {
    id: 'array-methods',
    title: 'Методы массивов',
    icon: '⚡',
    code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
const big = numbers.filter((n) => n > 2);
console.log(doubled);
console.log(big);
console.log("Сумма: " + numbers.reduce((acc, n) => acc + n, 0));`,
  },
];

export default function Practice() {
  const [activeId, setActiveId] = useState(SNIPPETS[0].id);
  const activeSnippet = SNIPPETS.find((snippet) => snippet.id === activeId);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Практика</h1>
        <p className={styles.subtitle}>
          Свободная песочница: пишите любой JavaScript и сразу смотрите результат.
          Ошибки объясняются простым языком.
        </p>
      </header>

      <div className={styles.snippets}>
        <h2 className={styles.sectionTitle}>Стартовые сниппеты</h2>
        <div className={styles.snippetRow}>
          {SNIPPETS.map((snippet) => (
            <button
              key={snippet.id}
              type="button"
              className={`${styles.snippetBtn}${snippet.id === activeId ? ` ${styles.snippetBtnActive}` : ''}`}
              onClick={() => setActiveId(snippet.id)}
            >
              <span aria-hidden="true">{snippet.icon}</span>
              {snippet.title}
            </button>
          ))}
        </div>
        <p className={styles.snippetNote}>
          Выбран: «{activeSnippet.title}». Измените код и нажмите «Выполнить».
        </p>
      </div>

      <CodeEditor
        key={`practice-${activeSnippet.id}`}
        initialCode={activeSnippet.code}
        title="Песочница — свободная практика"
      />

      <section className={styles.navSection}>
        <h2 className={styles.sectionTitle}>Нужна помощь?</h2>
        <p className={styles.navText}>
          Каждая тема подробно разобрана в уроках: теория, примеры, упражнения и тест.
        </p>
        <div className={styles.lessonLinks}>
          {lessons.slice(0, 6).map((lesson) => (
            <Link key={lesson.id} to={`/learn/${lesson.slug}`} className={styles.lessonLink}>
              {lesson.id}. {lesson.shortTitle}
            </Link>
          ))}
          <Link to="/courses" className={styles.lessonLinkAll}>Все уроки →</Link>
        </div>
      </section>
    </div>
  );
}