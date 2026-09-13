import { useState } from 'react';

/**
 * Универсальный хук работы с localStorage.
 * Хранит значение в state и синхронизирует его с localStorage при каждом изменении.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        return JSON.parse(raw);
      }
    } catch {
      // повреждённые данные — используем начальное значение
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  const set = (next) => {
    const resolved = typeof next === 'function' ? next(value) : next;
    setValue(resolved);
    try {
      window.localStorage.setItem(key, JSON.stringify(resolved));
    } catch {
      // localStorage может быть недоступен — молча игнорируем
    }
  };

  return [value, set];
}