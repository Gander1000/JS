import { useState } from 'react';
import styles from './CodeBlock.module.scss';

/**
 * Блок кода с заголовком и возможностью скопировать.
 *
 * @param {string} code - исходный текст.
 * @param {string} [title] - подпись над кодом.
 * @param {string} [variant] - 'code' (по умолчанию) или 'output' (результат).
 */
export default function CodeBlock({ code, title = null, variant = 'code' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // буфер обмена может быть недоступен — игнорируем
    }
  };

  return (
    <div className={`${styles.block} ${variant === 'output' ? styles.output : ''}`}>
      <div className={styles.head}>
        <span className={styles.caption}>
          {variant === 'output' ? 'Результат' : (title || 'Код')}
        </span>
        <button type="button" className={styles.copy} onClick={handleCopy}>
          {copied ? 'Скопировано ✓' : 'Копировать'}
        </button>
      </div>
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  );
}