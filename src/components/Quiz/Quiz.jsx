import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress.js';
import styles from './Quiz.module.scss';

/**
 * Тест с мгновенной обратной связью.
 *
 * @param {number} lessonId - id урока.
 * @param {Array} quiz - вопросы: [{ q, options, answer, explain }].
 */
export default function Quiz({ lessonId, quiz }) {
  const progress = useProgress();
  const saved = progress.getQuizResult(lessonId);
  const [answers, setAnswers] = useState({});

  const answeredCount = Object.keys(answers).length;

  const choose = (questionIndex, optionIndex) => {
    if (answers[questionIndex] !== undefined) return; // вопрос уже отвечен

    const nextAnswers = { ...answers, [questionIndex]: optionIndex };
    setAnswers(nextAnswers);

    // как только все вопросы отвечены — сохраняем результат
    if (Object.keys(nextAnswers).length === quiz.length) {
      const score = quiz.reduce(
        (acc, question, index) => acc + (nextAnswers[index] === question.answer ? 1 : 0),
        0,
      );
      progress.setQuizResult(lessonId, score, quiz.length);
    }
  };

  const handleRestart = () => setAnswers({});

  return (
    <div className={styles.quiz}>
      <div className={styles.head}>
        <span>Тест по уроку</span>
        <span className={styles.counter}>Отвечено: {answeredCount} из {quiz.length}</span>
      </div>

      {quiz.map((question, questionIndex) => {
        const chosen = answers[questionIndex];
        const isAnswered = chosen !== undefined;
        const isCorrect = isAnswered && chosen === question.answer;
        return (
          <div key={questionIndex} className={styles.question}>
            <p className={styles.questionText}>
              <span className={styles.questionNumber}>{questionIndex + 1}.</span>
              {question.q}
            </p>

            <div className={styles.options}>
              {question.options.map((option, optionIndex) => {
                const isChosen = chosen === optionIndex;
                let cssVariant = null;
                if (isAnswered) {
                  if (optionIndex === question.answer) {
                    cssVariant = styles.optionCorrect;
                  } else if (isChosen) {
                    cssVariant = styles.optionWrong;
                  }
                } else {
                  cssVariant = null;
                }
                const cssClass = cssVariant
                  ? `${styles.option} ${cssVariant}`
                  : styles.option;
                return (
                  <button
                    key={optionIndex}
                    type="button"
                    className={cssClass}
                    onClick={() => choose(questionIndex, optionIndex)}
                    disabled={isAnswered}
                  >
                    <span className={styles.optionLetter}>
                      {String.fromCharCode(65 + optionIndex)}
                    </span>
                    <span className={styles.optionText}>{option}</span>
                    {isAnswered && optionIndex === question.answer && (
                      <span className={styles.optionIcon}>✓</span>
                    )}
                    {isAnswered && isChosen && optionIndex !== question.answer && (
                      <span className={styles.optionIconWrong}>✕</span>
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className={isCorrect ? styles.feedbackGood : styles.feedbackBad}>
                <p className={styles.feedbackTitle}>
                  {isCorrect ? 'Верно!' : 'Не совсем.'}
                </p>
                <p className={styles.feedbackText}>{question.explain}</p>
              </div>
            )}
          </div>
        );
      })}

      <div className={styles.footer}>
        {answeredCount === quiz.length && (
          <p className={styles.result}>
            {saved
              ? `Ваш результат: ${saved.score} из ${saved.total}`
              : 'Тест завершён!'}
          </p>
        )}
        <button type="button" className={styles.restart} onClick={handleRestart}>
          Пройти тест заново
        </button>
      </div>
    </div>
  );
}