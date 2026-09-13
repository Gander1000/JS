import { runUserCode } from './codeRunner.js';
import { friendlyError } from './friendlyError.js';

const COMPARED_LEVELS = new Set([
  'log',
  'info',
  'warn',
  'html',
  'alert',
  'confirm',
  'prompt',
]);

function normalizeLine(text) {
  return String(text).trim().replace(/\s+/g, ' ');
}

/**
 * Сравнивает фактический вывод кода с ожидаемым.
 * expected — массив строк (точное совпадение строки вывода)
 * или объектов { contains: '...' } (строка должна содержать фрагмент).
 */
export function matchOutput(lines, expected) {
  const output = lines
    .filter((line) => COMPARED_LEVELS.has(line.level))
    .map((line) => normalizeLine(line.text));

  for (const item of expected) {
    if (typeof item === 'string') {
      if (!output.includes(normalizeLine(item))) {
        return false;
      }
    } else if (item && typeof item.contains === 'string') {
      if (!output.some((line) => line.includes(normalizeLine(item.contains)))) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Проверяет решение упражнения:
 *  1) проверяет обязательные фрагменты кода (requiredPatterns),
 *  2) запускает код ученика + тестовый код и сравнивает вывод.
 *
 * @returns {Promise<{pass: boolean, hint: string|null, lines: Array}>}
 */
export async function checkExercise(userCode, exercise) {
  const patterns = exercise.requiredPatterns || [];
  for (const requirement of patterns) {
    if (!requirement.regex.test(userCode)) {
      return {
        pass: false,
        hint: requirement.hint,
        lines: [],
      };
    }
  }

  const combined = userCode.trim() + '\n' + (exercise.test || '');
  const result = await runUserCode(combined);

  if (result.timedOut) {
    return {
      pass: false,
      hint: 'Код не завершился за отведённое время. Проверьте, нет ли в нём бесконечного цикла.',
      lines: [],
    };
  }

  const errorLine = result.lines.find((line) => line.level === 'error');
  if (errorLine) {
    return {
      pass: false,
      hint: `${errorLine.text}. ${friendlyError(errorLine.text)}`,
      lines: result.lines,
    };
  }

  if (matchOutput(result.lines, exercise.expected || [])) {
    return {
      pass: true,
      hint: null,
      lines: result.lines,
    };
  }

  return {
    pass: false,
    hint: exercise.hint || 'Проверьте вывод программы: он не совпадает с ожидаемым.',
    lines: result.lines,
  };
}