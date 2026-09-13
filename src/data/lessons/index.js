import { lesson01 } from './lesson01.js';
import { lesson02 } from './lesson02.js';
import { lesson03 } from './lesson03.js';
import { lesson04 } from './lesson04.js';
import { lesson05 } from './lesson05.js';
import { lesson06 } from './lesson06.js';
import { lesson07 } from './lesson07.js';
import { lesson08 } from './lesson08.js';
import { lesson09 } from './lesson09.js';
import { lesson10 } from './lesson10.js';
import { lesson11 } from './lesson11.js';
import { lesson12 } from './lesson12.js';
import { lesson13 } from './lesson13.js';
import { lesson14 } from './lesson14.js';
import { lesson15 } from './lesson15.js';
import { lesson16 } from './lesson16.js';
import { lesson17 } from './lesson17.js';
import { lesson18 } from './lesson18.js';

/**
 * Список всех уроков курса в порядке прохождения.
 * Чтобы добавить новый урок — создайте файл lessonXX.js
 * в этой папке и добавьте его сюда.
 */
export const lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
];

/** Найти урок по slug. */
export function findLessonBySlug(slug) {
  return lessons.find((lesson) => lesson.slug === slug);
}