import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import styles from './Layout.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>
          <strong>JS Академия</strong> — бесплатный интерактивный курс JavaScript для начинающих.
        </p>
        <p className={styles.footerMuted}>
          React · Vite · React Router · SCSS · localStorage · уроков: 18
        </p>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}