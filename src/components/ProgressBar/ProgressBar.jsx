import styles from './ProgressBar.module.scss';

/**
 * Простая полоса прогресса.
 *
 * @param {number} value - значение от 0 до 100.
 * @param {string} [label] - подпись возле полосы.
 * @param {string} [variant] - 'accent' (по умолчанию) или 'success'.
 */
export default function ProgressBar({ value, label = '', variant = 'accent' }) {
  const percent = Math.max(0, Math.min(100, Math.round(value)));

  return (
    <div className={styles.wrap}>
      <div
        className={styles.bar}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Прогресс'}
      >
        <div
          className={`${styles.fill} ${variant === 'success' ? styles.fillSuccess : styles.fillAccent}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}