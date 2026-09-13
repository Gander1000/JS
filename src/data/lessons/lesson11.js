// Урок 11. Функции
export const lesson11 = {
  id: 11,
  slug: 'functions',
  shortTitle: 'Функции',
  title: 'Функции: параметры, аргументы, return, область видимости',
  icon: '🧩',
  category: 'Функции',
  difficulty: 'medium',
  minutes: 15,
  description: 'Создавайте свои функции: объявление, параметры и аргументы, return, локальные и глобальные переменные.',
  skills: ['function', 'параметры', 'аргументы', 'return', 'область видимости'],
  theory: [
    {
      t: 'p',
      text: 'Функция — это именованный блок кода, который можно вызывать снова и снова. Функции получают входные данные (параметры) и возвращают результат через return.',
    },
    {
      t: 'why',
      text: 'Один и тот же код не должен копироваться по программе десятки раз. Функции делают программу короче, понятнее и позволяют исправить логику в одном месте — а не в пяти.',
    },
    {
      t: 'h2',
      text: 'Объявление функции',
    },
    {
      t: 'syntax',
      code: `function имя(параметры) {
  // тело функции
  return результат;
}`,
    },
    {
      t: 'example',
      title: 'Первая функция',
      code: `function greet(name) {
  return "Привет, " + name + "!";
}

console.log(greet("Аня"));
console.log(greet("Боря"));`,
      output: `Привет, Аня!
Привет, Боря!`,
    },
    {
      t: 'p',
      text: 'name здесь — параметр: переменная внутри функции. «Аня» и «Боря» при вызове — это аргументы: конкретные значения, которые подставились в параметр.',
    },
    {
      t: 'h2',
      text: 'Несколько параметров и return',
    },
    {
      t: 'example',
      title: 'Сложение чисел',
      code: `function add(a, b) {
  return a + b;   // возвращаем результат
}

console.log(add(5, 3));
console.log(add(10, 20));`,
      output: `8
30`,
    },
    {
      t: 'p',
      text: 'return возвращает значение из функции. После return код в теле функции больше не выполняется. Если return нет — функция вернёт undefined.',
    },
    {
      t: 'h2',
      text: 'Локальная и глобальная область видимости',
    },
    {
      t: 'example',
      title: 'Где видна переменная?',
      code: `const globalMessage = "Я глобальная";

function show() {
  const localMessage = "Я локальная";
  console.log(globalMessage);  // глобальная видна всем
  console.log(localMessage);   // локальная видна внутри
}

show();
console.log(globalMessage);
// console.log(localMessage); → ошибка!`,
      output: `Я глобальная
Я локальная
Я глобальная`,
    },
    {
      t: 'p',
      text: 'Переменная, объявленная внутри функции (let/const), — локальная: она доступна только внутри этой функции. Объявленная вне — глобальная: доступна всем. После вызова функции локальные переменные удаляются.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `function add(a, b) { return a + b; }
console.log(add(5));   // NaN`,
          good: `function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8`,
          note: 'Если параметр не передан, он равен undefined. 5 + undefined = NaN. Передавайте все аргументы.',
        },
        {
          bad: `function f(x) {
  return x * 2;
  console.log("не выполнится"); // мёртвый код
}`,
          good: `function f(x) {
  console.log("сначала логика…");
  return x * 2;   // return — последний
}`,
          note: 'Код после return не выполнится. Все действия делайте ДО возврата значения.',
        },
        {
          bad: `function hello(name) {
  console.log("Привет, " + name);
}
const result = hello("Аня"); // undefined`,
          good: `function hello(name) {
  return "Привет, " + name;
}
const result = hello("Аня"); // "Привет, Аня"`,
          note: 'Без return функция не возвращает значение — в result попадёт undefined.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'Функции — фундамент: библиотека валидации (checkPassword, checkEmail), рассчёт скидок (calcDiscount), преобразование данных (formatDate). Современные фреймворки, как React, вообще строятся из функций.',
    },
    {
      t: 'tip',
      text: 'Называйте функции глаголами: getTotal(), showMenu(), saveUser() — так сразу понятно, что они делают.',
    },
  ],
  playground: `function square(x) {
  return x * x;
}

function describe(number) {
  const sq = square(number);
  return number + " в квадрате = " + sq;
}

console.log(describe(5));
console.log(describe(9));
console.log(square(3) + square(4));`,
  exercises: [
    {
      title: 'Удвоение',
      task: 'Создайте функцию double(x), которая возвращает x * 2, и выведите результат double(21).',
      difficulty: 'easy',
      starter: `// function double(x) { ... }`,
      solution: `function double(x) {
  return x * 2;
}
console.log(double(21));`,
      hint: 'Внутри функции: return x * 2; Затем вызовите double(21).',
      expected: ['42'],
    },
    {
      title: 'Приветствие',
      task: 'Создайте функцию greet(name), возвращающую строку "Привет, " + name. Выведите результат greet("Мир").',
      difficulty: 'medium',
      starter: `// function greet(name) { ... }`,
      solution: `function greet(name) {
  return "Привет, " + name;
}
console.log(greet("Мир"));`,
      hint: 'Возвращайте "Привет, " + name. При вызове greet("Мир") получится «Привет, Мир».',
      expected: ['Привет, Мир'],
    },
    {
      title: 'Проверка возраста',
      task: 'Создайте функцию isAdult(age), которая возвращает true, если age >= 18, иначе false. Выведите isAdult(20).',
      difficulty: 'hard',
      starter: `// function isAdult(age) { ... }`,
      solution: `function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
console.log(isAdult(20));`,
      hint: 'Сравнивайте внутри функции: if (age >= 18) { return true; } return false;',
      expected: ['true'],
    },
  ],
  quiz: [
{
      q: 'Что делает return в функции?',
      options: [
        'Останавливает программу',
        'Возвращает значение из функции',
        'Выводит значение в консоль',
        'Запускает цикл',
      ],
      answer: 1,
      explain: 'return возвращает результат работы функции туда, где её вызвали. После return код в теле не выполняется.',
    },
    {
      q: 'Параметр и аргумент — это…',
      options: [
        'Одно и то же',
        'Параметр — в объявлении, аргумент — значение при вызове',
        'Аргумент — в объявлении, параметр — при вызове',
        'Синонимы слова «переменная»',
      ],
      answer: 1,
      explain: 'Параметр — это имя в объявлении функции. Аргумент — конкретное значение, которое передаётся при вызове.',
    },
    {
      q: 'Что вернёт функция без return?',
      options: ['null', '0', 'undefined', 'ошибку'],
      answer: 2,
      explain: 'Если в функции нет return, она возвращает undefined.',
    },
    {
      q: 'Где доступна локальная переменная?',
      options: [
        'Во всей программе',
        'Только внутри своей функции',
        'Только в консоли',
        'Нигде',
      ],
      answer: 1,
      explain: 'Локальная переменная видна только внутри функции, где объявлена. Снаружи к ней обратиться нельзя.',
    },
  ],
};