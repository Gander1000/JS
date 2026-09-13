/**
 * «Дружелюбные» объяснения типичных JavaScript-ошибок для новичков.
 */
export function friendlyError(message) {
  const m = String(message || '');

  if (m.includes('is not defined')) {
    return 'Похоже, переменная не была объявлена. В JavaScript сначала нужно объявить переменную (const или let), а уже потом использовать её. Проверьте также, что имя написано без опечаток и в том же регистре.';
  }
  if (m.includes('before initialization')) {
    return 'Переменная используется ДО её объявления. Перенесите объявление переменной выше в коде.';
  }
  if (m.includes('SyntaxError')) {
    return 'Синтаксическая ошибка: JavaScript не смог разобрать код. Проверьте скобки, кавычки, точки с запятой и фигурные скобки.';
  }
  if (m.includes('Unexpected token') || m.includes('Unexpected identifier')) {
    return 'Неожиданный символ. Проверьте, что все скобки, кавычки и запятые расставлены верно.';
  }
  if (m.includes('not a function')) {
    return 'Вы пытаетесь вызвать как функцию значение, которое функцией не является. Например, вы обращаетесь к свойству, которого нет у объекта.';
  }
  if (m.includes('Cannot read') || m.includes('of undefined')) {
    return 'Не удаётся прочитать свойство у значения undefined. Проверьте, что объект/массив/элемент действительно существует.';
  }
  if (m.includes('Cannot reassign') || m.includes('Assignment to constant') || m.includes('read-only')) {
    return 'Нельзя изменить значение константы (const). Если значение должно меняться — объявите переменную через let.';
  }
  if (m.includes('Not a number') || m.includes('NaN')) {
    return 'Результат — NaN (не число). Так бывает при делении на ноль или преобразовании неподходящего текста в число.';
  }
  return 'Проверьте логику кода. Возможно, допущена опечатка в имени переменной или в синтаксисе.';
}