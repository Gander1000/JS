import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { lessons } from '../../data/lessons/index.js';
import { lessonStats, useProgress } from '../../hooks/useProgress.js';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Theory from '../../components/Theory/Theory.jsx';
import CodeEditor from '../../components/CodeEditor/CodeEditor.jsx';
import Exercise from '../../components/Exercise/Exercise.jsx';
import Quiz from '../../components/Quiz/Quiz.jsx';
import LessonNavigation from '../../components/LessonNavigation/LessonNavigation.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import { DIFFICULTY_LABEL } from '../../components/LessonCard/LessonCard.jsx';
import styles from './Lesson.module.scss';

function sectionTitleId(index) {
  return `section-${index}`;
}

export default function Lesson() {
  const { lessonId } = useParams();
  const progress = useProgress();

  const lesson = lessons.find((item) => item.slug === lessonId);
  const lessonIndex = lesson ? lessons.indexOf(lesson) : -1;
  const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex >= 0 && lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

  useEffect(() => {
    if (lesson) {
      progress.setLastLesson(lesson.id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className={styles.notFound}>
        <h1>Урок не найден</h1>
        <p>Проверьте адрес страницы или перейдите к списку уроков.</p>
        <Link to="/courses" className={styles.backLink}>← К списку уроков</Link>
      </div>
    );
  }

  const stat = lessonStats(progress.state, lesson);
  const playgroundCode = progress.state.playground[lesson.slug] || lesson.playground;

  const tocItems = lesson.theory
    .map((block, index) => ({ block, index }))
    .filter(({ block }) => block.t === 'h2')
    .map(({ block, index }) => ({
      id: sectionTitleId(index),
      text: block.text,
    }));

  return (
    <div className={styles.page}>
      <div className={styles.sidebarCol}>
        <Sidebar currentSlug={lesson.slug} />
      </div>

      <div className={styles.content}>
        {/* Шапка урока */}
        <header className={styles.header}>
          <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
            <Link to="/courses">Курсы</Link>
            <span aria-hidden="true">/</span>
            <span>{lesson.category}</span>
            <span aria-hidden="true">/</span>
            <span>Урок {lesson.id}</span>
          </nav>

          <div className={styles.headerRow}>
            <span className={styles.icon} aria-hidden="true">{lesson.icon}</span>
            <div className={styles.headerText}>
              <h1 className={styles.title}>{lesson.title}</h1>
              <p className={styles.description}>{lesson.description}</p>
            </div>
          </div>

          <div className={styles.chips}>
            <span className={styles.chip}>⏱ {lesson.minutes} минут</span>
            <span className={styles.chip}>Уровень: {DIFFICULTY_LABEL[lesson.difficulty]}</span>
            <span className={styles.chip}>✏️ {lesson.exercises.length} упражнений</span>
            <span className={styles.chip}>❓ {lesson.quiz.length} вопросов</span>
          </div>

          <div className={styles.lessonProgress}>
            <ProgressBar
              value={stat.percent}
              label={`Прогресс урока: ${stat.percent}%`}
              variant={stat.percent === 100 ? 'success' : 'accent'}
            />
          </div>

          {tocItems.length > 1 && (
            <nav className={styles.toc} aria-label="Содержание урока">
              <span className={styles.tocLabel}>Содержание:</span>
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                  {item.text}
                </a>
              ))}
            </nav>
          )}
        </header>

        {/* Теория */}
        <section className={styles.section} aria-label="Теория">
          <h2 className={styles.sectionHeading}>Теория</h2>
          <Theory theory={lesson.theory} />
        </section>

        {/* Песочница */}
        <section className={styles.section} aria-label="Песочница">
          <h2 className={styles.sectionHeading}>Попробуйте сами</h2>
          <p className={styles.sectionNote}>
            Откройте редактор, измените код и нажмите «Выполнить». Ваши изменения
            сохраняются автоматически.
          </p>
          <CodeEditor
            key={`playground-${lesson.slug}`}
            initialCode={playgroundCode}
            title={`Песочница — урок ${lesson.id}`}
            onChange={(code) => progress.setPlaygroundCode(lesson.slug, code)}
          />
        </section>

        {/* Упражнения */}
        <section className={styles.section} aria-label="Упражнения">
          <h2 className={styles.sectionHeading}>
            Практические упражнения
            <span className={styles.doneCount}>
              {stat.exercisesDone}/{stat.exercisesTotal}
            </span>
          </h2>
          <p className={styles.sectionNote}>
            Решите задачу и нажмите «Проверить». Если решение верное — задачу можно
            считать закреплённой.
          </p>
          <div className={styles.exercisesList}>
            {lesson.exercises.map((exercise, index) => (
              <Exercise
                key={`exercise-${lesson.slug}-${index}`}
                exercise={exercise}
                lessonId={lesson.id}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Тест */}
        {lesson.quiz.length > 0 && (
          <section className={styles.section} aria-label="Тест по уроку">
            <h2 className={styles.sectionHeading}>Тест по уроку</h2>
            <Quiz key={`quiz-${lesson.slug}`} lessonId={lesson.id} quiz={lesson.quiz} />
          </section>
        )}

        {/* Навигация по урокам */}
        <LessonNavigation lesson={lesson} prevLesson={prevLesson} nextLesson={nextLesson} />
      </div>
    </div>
  );
}
