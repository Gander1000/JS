import CodeBlock from '../CodeBlock/CodeBlock.jsx';
import styles from './Theory.module.scss';

const sectionId = (index) => `section-${index}`;

function renderParagraph(block, index) {
  return (
    <p key={index} className={styles.paragraph}>
      {block.text}
    </p>
  );
}

function renderSubtitle(block, index) {
  return (
    <h2 key={index} id={sectionId(block.index)} className={styles.subtitle}>
      {block.text}
    </h2>
  );
}

function renderWhy(block, index) {
  return (
    <aside key={index} className={styles.why}>
      <p className={styles.cardTitle}>💡 Зачем это нужно?</p>
      <p className={styles.cardText}>{block.text}</p>
    </aside>
  );
}

function renderSyntax(block, index) {
  return (
    <div key={index} className={styles.syntax}>
      <p className={styles.cardTitle}>Синтаксис</p>
      <CodeBlock code={block.code} title={block.title || 'Синтаксис'} />
    </div>
  );
}

function renderExample(block, index) {
  return (
    <div key={index} className={styles.example}>
      {block.title && <p className={styles.exampleTitle}>{block.title}</p>}
      <CodeBlock code={block.code} title={block.title || 'Пример'} />
      {block.output && (
        <CodeBlock code={block.output} variant="output" title="Ожидаемый вывод" />
      )}
    </div>
  );
}

function renderMistakes(block, index) {
  return (
    <div key={index} className={styles.mistakes}>
      <p className={styles.mistakesTitle}>⚠️ Частые ошибки</p>
      <div className={styles.mistakesList}>
        {block.items.map((item, itemIndex) => (
          <div key={itemIndex} className={styles.mistakeRow}>
            <div className={styles.mistakeCol}>
              <span className={styles.badBadge}>Так нельзя</span>
              <pre className={styles.mistakeCode}>
                <code>{item.bad}</code>
              </pre>
            </div>
            <div className={styles.mistakeArrow} aria-hidden="true">→</div>
            <div className={styles.mistakeCol}>
              <span className={styles.goodBadge}>Так правильно</span>
              <pre className={styles.mistakeCode}>
                <code>{item.good}</code>
              </pre>
            </div>
            <p className={styles.mistakeNote}>{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderUsage(block, index) {
  return (
    <div key={index} className={styles.usage}>
      <p className={styles.cardTitle}>🏢 Где это применяется в реальной жизни?</p>
      <p className={styles.cardText}>{block.text}</p>
      {block.code && <CodeBlock code={block.code} title="Пример из практики" />}
    </div>
  );
}

function renderTip(block, index) {
  return (
    <aside key={index} className={styles.tip}>
      <p className={styles.cardTitle}>💡 Совет</p>
      <p className={styles.cardText}>{block.text}</p>
    </aside>
  );
}

function renderList(block, index) {
  return (
    <ul key={index} className={styles.infoList}>
      {block.items.map((item, itemIndex) => (
        <li key={itemIndex}>
          <code className={styles.listCode}>{item.code}</code>
          <span className={styles.listText}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

const RENDERERS = {
  p: renderParagraph,
  h2: renderSubtitle,
  why: renderWhy,
  syntax: renderSyntax,
  example: renderExample,
  mistakes: renderMistakes,
  usage: renderUsage,
  tip: renderTip,
  list: renderList,
};

/**
 * Рендерит блоки теории урока.
 * Блоки: p, h2, why, syntax, example, mistakes, usage, tip, list.
 */
export default function Theory({ theory }) {
  return (
    <div className={styles.theory}>
      {theory.map((block, index) => {
        const render = RENDERERS[block.t] || renderParagraph;
        return render({ ...block, index }, index);
      })}
    </div>
  );
}