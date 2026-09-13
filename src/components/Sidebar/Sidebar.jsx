import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { lessons } from '../../data/lessons/index.js';
import { lessonStats, useProgress } from '../../hooks/useProgress.js';
import styles from './Sidebar.module.scss';

/**
 * Сайдбар со списком уроков курса.
 * На десктопе — статичная колонка, на мобильных — выдвижная панель.
 */
export default function Sidebar({ currentSlug = null }) {
  const { state } = useProgress();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen(!open)}
      >
        {open ? 'Закрыть оглавление' : 'Оглавление курса'}
      </button>

      <aside className={`${styles.sidebar}${open ? ` ${styles.sidebarOpen}` : ''}`}>
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
          role="presentation"
        ></div>

        <div className={styles.panel}>
          <h2 className={styles.heading}>Курс JavaScript</h2>
          <p className={styles.subheading}>18 уроков от простого к сложному</p>

          <ol className={styles.list}>
            {lessons.map((lesson) => {
              const completed = state.completedLessons.includes(lesson.id);
              const stat = lessonStats(state, lesson);
              const isCurrent = lesson.slug === currentSlug;
              return (
                <li key={lesson.id}>
                  <NavLink
                    to={`/learn/${lesson.slug}`}
                    className={() =>
                      isCurrent
                        ? `${styles.item} ${styles.itemCurrent}`
                        : styles.item
                    }
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.itemIndex}>{lesson.id}</span>
                    <span className={styles.itemTitle}>{lesson.shortTitle}</span>
                    {completed && (
                      <span className={styles.itemDone} title="Урок пройден">✓</span>
                    )}
                    {!completed && stat.percent > 0 && (
                      <span className={styles.itemPartial}>{stat.percent}%</span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>
    </>
  );
}