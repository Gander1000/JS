import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { overallStats, useProgress } from '../../hooks/useProgress.js';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { to: '/', label: 'Главная', end: true },
  { to: '/courses', label: 'Курсы', end: false },
  { to: '/practice', label: 'Практика', end: false },
  { to: '/progress', label: 'Прогресс', end: false },
  { to: '/about', label: 'О сайте', end: false },
];

export default function Header() {
  const { state } = useProgress();
  const stats = overallStats(state);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" end className={styles.brand} onClick={closeMenu}>
          <span className={styles.logo} aria-hidden="true">{'</>'}</span>
          <span className={styles.brandName}>JS&nbsp;Академия</span>
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <NavLink to="/progress" className={styles.progressPill}>
            <span className={styles.pillLabel}>Прогресс</span>
            <strong className={styles.pillValue}>{stats.percent}%</strong>
          </NavLink>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Мобильное меню">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.mobileLinkActive}` : styles.mobileLink
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}