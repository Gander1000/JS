// Урок 12. Стрелочные функции
export const lesson12 = {
  id: 12,
  slug: 'arrow-functions',
  shortTitle: 'Стрелочные функции',
  title: 'Стрелочные функции (=>)',
  icon: '🏹',
  category: 'Функции',
  difficulty: 'easy',
  minutes: 10,
  description: 'Современный компактный способ писать функции: const имя = (параметры) => выражение.',
  skills: ['=>', 'стрелочные функции', 'callback'],
  theory: [
    {
      t: 'p',
      text: 'Стрелочная функция — короткий способ записать функцию с помощью символов => («стрелочки»). Она появилась в современном стандарте JavaScript (ES6) и используется повсеместно.',
    },
    {
      t: 'why',
      text: 'Стрелочные функции короче и читаются лучше, особенно когда функция маленькая. Они повсюду в современных фреймворках: обработчики событий, методы массивов (map, filter), callbacks.',
    },
    {
      t: 'h2',
      text: 'Объявление стрелочной функции',
    },
    {
      t: 'syntax',
      code: `const имя = (параметры) => выражение;`,
    },
    {
      t: 'example',
      title: 'Обычная функция и стрелочная — результат одинаковый',
      code: `function squareRegular(x) {
  return x * x;
}

const squareArrow = (x) => x * x;

console.log(squareRegular(5));
console.log(squareArrow(5));`,
      output: `25
25`,
    },
    {
      t: 'p',
      text: 'Если стрелочная функция состоит из одного выражения, return писать не нужно: значение выражения возвращается автоматически (такая запись называется «неявный return»).',
    },
    {
      t: 'h2',
      text: 'Разные формы записи',
    },
    {
      t: 'example',
      title: 'Один параметр — скобки можно опустить',
      code: `const double = x => x * 2;   // один параметр
console.log(double(6));`,
      output: `12`,
    },
    {
      t: 'example',
      title: 'Несколько строк — нужны { } и return',
      code: `const sum = (a, b) => {
  const result = a + b;
  return result;
};
console.log(sum(3, 4));`,
      output: `7`,
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `const double = (x) => { x * 2 }; // undefined`,
          good: `const double = (x) => x * 2;
const doubleReturn = (x) => { return x * 2; };`,
          note: 'С фигурными скобками { } стрелочная функция ждёт явный return. Без скобок можно писать выражение напрямую.',
        },
        {
          bad: `const double = (x) = > x * 2; // ошибка`,
          good: `const double = (x) => x * 2;`,
          note: 'Знак => пишется слитно, без пробела между = и >.',
        },
        {
          bad: `double = (x) => x * 2;  // без const`,
          good: `const double = (x) => x * 2;`,
          note: 'Функции тоже объявляют через const — это константа, название которой менять нельзя.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'Стрелочные функции — «хлеб» современного фронтенда: setInterval(() => { … }), кнопка.addEventListener("click", () => …), массивы.map(item => …). В React каждая компонента — это часто стрелочная функция.',
    },
    {
      t: 'tip',
      text: 'Маленькую функцию пишите в одну строку без { } и return. Разрослась? Добавьте { } и return.',
    },
  ],
  playground: `const greet = (name) => "Привет, " + name + "!";
const add = (a, b) => a + b;

console.log(greet("Аня"));
console.log(add(7, 8));

const big = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log("Больше: " + big(4, 9));`,
  exercises: [
    {
      title: 'Стрелочное удвоение',
      task: 'Создайте стрелочную функцию double, которая принимает x и возвращает x * 2. Выведите double(12).',
      difficulty: 'easy',
      starter: `// const double = (x) => x * 2;`,
      solution: `const double = (x) => x * 2;
console.log(double(12));`,
      hint: 'const double = (x) => x * 2; Затем console.log(double(12));',
      expected: ['24'],
    },
    {
      title: 'Чётность',
      task: 'Создайте стрелочную функцию isEven(n), возвращающую n % 2 === 0. Выведите результат isEven(10).',
      difficulty: 'medium',
      starter: `// const isEven = (n) => n % 2 === 0;`,
      solution: `const isEven = (n) => n % 2 === 0;
console.log(isEven(10));`,
      hint: 'const isEven = (n) => n % 2 === 0; — сравнение вернёт true или false.',
      expected: ['true'],
    },
    {
      title: 'Стрелка в коде',
      task: 'Напишите любую работающую программу с использованием стрелочной функции (символ =>).',
      difficulty: 'medium',
      starter: `// Пример: const triple = (x) => x * 3;
// console.log(triple(3));`,
      solution: `const triple = (x) => x * 3;
console.log(triple(3));`,
      hint: 'В коде должен встречаться символ =>. Проверка по шаблону: /=>/',
      expected: [],
      requiredPatterns: [{ regex: /=>/, hint: 'Добавьте стрелочную функцию со знаком =>.' }],
    },
  ],
  quiz: [
{
      q: 'Чему равно double(3), если const double = (x) => x * 2; ?',
      options: ['5', '6', '9', 'undefined'],
      answer: 1,
      explain: '3 * 2 = 6. Однострочная стрелочная функция возвращает значение выражения автоматически.',
    },
    {
      q: 'Нужен ли return в однострочной стрелочной функции без { }?',
      options: [
        'Да, всегда',
        'Нет, значение возвращается автоматически',
        'Только если функция пустая',
        'Return запрещён',
      ],
      answer: 1,
      explain: 'Если написать тело одним выражением без { }, оно автоматически становится результатом функции.',
    },
    {
      q: 'Можно ли опустить скобки вокруг параметра?',
      options: [
        'Никогда',
        'Да, если параметр один',
        'Только если параметров два',
        'Только для строк',
      ],
      answer: 1,
      explain: 'У функции с одним параметром скобки можно опустить: x => x * 2. Если параметров несколько или ноль — скобки нужны.',
    },
    {
      q: 'Что пропустили в const double = (x) = > x * 2; ?',
      options: ['Всё верно', 'Пробел между = и >', 'Скобки вокруг x', 'Точку с запятой'],
      answer: 1,
      explain: 'Символ => пишется слитно. С пробелом между = и > синтаксис ломается.',
    },
  ],
};