import { createContext, createElement, useContext } from 'react';
import useLocalStorage from './useLocalStorage.js';
import { lessons } from '../data/lessons/index.js';

const PROGRESS_KEY = 'js-academy-progress';

export const defaultProgressState = () => ({
  completedLessons: [],
  exercises: {},
  quizzes: {},
  lastLesson: null,
  playground: {},
});

export function lessonPoints(lesson) {
  return 1 + lesson.exercises.length + (lesson.quiz.length > 0 ? 1 : 0);
}

const ProgressContext = createContext(null);

/**
 * Провайдер прогресса. Оберните приложение в этот компонент (см. main.jsx).
 */
export function ProgressProvider({ children }) {
  const [state, setState] = useLocalStorage(PROGRESS_KEY, defaultProgressState);

  const api = {
    state,

    isLessonCompleted: (id) => state.completedLessons.includes(id),

    isExerciseDone: (lessonId, index) => {
      const list = state.exercises[String(lessonId)];
      return Array.isArray(list) ? Boolean(list[index]) : false;
    },

    isQuizDone: (lessonId) => {
      const quiz = state.quizzes[String(lessonId)];
      return Boolean(quiz && quiz.done);
    },

    getQuizResult: (lessonId) => state.quizzes[String(lessonId)] || null,

    setLessonCompleted(id, done) {
      const completed = new Set(state.completedLessons);
      if (done) {
        completed.add(id);
      } else {
        completed.delete(id);
      }
      setState({
        ...state,
        completedLessons: [...completed],
        lastLesson: id,
      });
    },

    setExerciseResult(lessonId, index, ok) {
      const key = String(lessonId);
      const list = [...(state.exercises[key] || [])];
      list[index] = Boolean(ok);
      setState({
        ...state,
        exercises: { ...state.exercises, [key]: list },
      });
    },

    setQuizResult(lessonId, score, total) {
      setState({
        ...state,
        quizzes: {
          ...state.quizzes,
          [String(lessonId)]: { score, total, done: true },
        },
      });
    },

    setLastLesson(id) {
      if (state.lastLesson !== id) {
        setState({ ...state, lastLesson: id });
      }
    },

    setPlaygroundCode(slug, code) {
      setState({
        ...state,
        playground: { ...state.playground, [slug]: code },
      });
    },

    resetAll() {
      setState(defaultProgressState());
    },
  };

  return createElement(ProgressContext.Provider, { value: api }, children);
}

/** Статистика по одному уроку (сколько баллов набрано). */
export function lessonStats(state, lesson) {
  const total = lessonPoints(lesson);
  let done = state.completedLessons.includes(lesson.id) ? 1 : 0;
  const exList = state.exercises[String(lesson.id)] || [];
  const exercisesDone = exList.filter(Boolean).length;
  done += exercisesDone;
  const quiz = state.quizzes[String(lesson.id)];
  const quizDone = Boolean(quiz && quiz.done);
  done += quizDone ? 1 : 0;
  return {
    total,
    done,
    percent: total > 0 ? Math.round((done / total) * 100) : 0,
    exercisesDone,
    exercisesTotal: lesson.exercises.length,
    quizDone,
    quizzesTotal: lesson.quiz.length > 0 ? 1 : 0,
  };
}

/** Общая статистика по курсу. */
export function overallStats(state) {
  let done = 0;
  let total = 0;
  for (const lesson of lessons) {
    const stat = lessonStats(state, lesson);
    done += stat.done;
    total += stat.total;
  }
  return {
    done,
    total,
    percent: total > 0 ? Math.round((done / total) * 100) : 0,
  };
}

/** Доступ к прогрессу из любого компонента внутри ProgressProvider. */
export function useProgress() {
  const value = useContext(ProgressContext);
  if (value === null) {
    throw new Error('useProgress() можно использовать только внутри ProgressProvider');
  }
  return value;
}