// Урок 7. switch
export const lesson07 = {
  id: 7,
  slug: 'switch',
  shortTitle: 'switch',
  title: 'Переключатель switch: case, break, default',
  icon: '🎚️',
  category: 'Управление кодом',
  difficulty: 'medium',
  minutes: 10,
  description: 'switch, case, break и default — удобный способ выбирать одно из нескольких действий.',
  skills: ['switch', 'case', 'break', 'default'],
  theory: [
    {
      t: 'p',
      text: 'Если нужно сравнить одну переменную с большим количеством вариантов, цепочка else if получается длинной. Для таких случаев у JavaScript есть оператор switch — «переключатель».',
    },
    {
      t: 'why',
      text: 'Код с switch легче читать, когда вариантов больше трёх: дни недели, коды ошибок, типы действий пользователя. Одно выражение — множество понятных веток.',
    },
    {
      t: 'h2',
      text: 'Синтаксис switch',
    },
    {
      t: 'syntax',
      code: `switch (значение) {
  case вариант1:
    // действия
    break;
  case вариант2:
    // действия
    break;
  default:
    // если ничего не подошло
}`,
    },
    {
      t: 'example',
      title: 'Дни недели',
      code: `const day = 5;

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 5:
    console.log("Пятница");
    break;
  default:
    console.log("Не знаю такой день");
}`,
      output: `Пятница`,
    },
    {
      t: 'h2',
      text: 'Для чего нужен break?',
    },
    {
      t: 'p',
      text: 'break останавливает работу switch. Без него выполнение «провалится» дальше и в следующий case тоже. Такой эффект называется fall-through, и это одна из самых частых ошибок новичков.',
    },
    {
      t: 'h2',
      text: 'Ветка default',
    },
    {
      t: 'example',
      title: 'Роли пользователя',
      code: `const role = "user";

switch (role) {
  case "admin":
    console.log("Полный доступ");
    break;
  case "user":
    console.log("Обычный доступ");
    break;
  default:
    console.log("Нет доступа");
}`,
      output: `Обычный доступ`,
    },
    {
      t: 'p',
      text: 'default выполняется, когда ни один case не совпал. Его можно сравнить с else. Ветку default принято ставить последней — break в ней не обязателен.',
    },
    {
      t: 'p',
      text: 'Важно: switch сравнивает значения строго (как ===). То есть case "5" (строка) не совпадёт со значением 5 (число).',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `switch (day) {
  case 1:
    console.log("Пон");
  case 2:
    console.log("Вт");
}`,
          good: `switch (day) {
  case 1:
    console.log("Пон");
    break;
  case 2:
    console.log("Вт");
    break;
}`,
          note: 'Без break выполнение «проваливается» в следующий case и выводит всё подряд.',
        },
        {
          bad: `case 1;`,
          good: `case 1:`,
          note: 'После значения case ставится двоеточие, а не точка с запятой.',
        },
        {
          bad: `switch (price) {
  case 5:   // не сработает, если price == 5.0? сработает
}`,
          good: `// числа 5 и 5.0 — одно и то же значение
switch (price) {
  case 5:
}`,
          note: 'А вот строки и числа различаются: case "5" не равен 5. switch использует строгое сравнение ===.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'switch удобен для обработки команд: тип сообщения в чате, коды ответов сервера (200, 404, 500), выбор пункта меню. В играх — для состояний персонажа: бег, прыжок, атака.',
    },
    {
      t: 'tip',
      text: 'Если в ветке несколько вариантов делают одно и то же — их можно записать подряд: case 1: case 2: { один блок }.',
    },
  ],
  playground: `const command = "start";

switch (command) {
  case "start":
    console.log("Запуск…");
    break;
  case "stop":
    console.log("Стоп.");
    break;
  default:
    console.log("Неизвестная команда");
}`,
  exercises: [
    {
      title: 'Месяц',
      task: 'Напишите switch: если month = 2 — выведите «Февраль», иначе — «Не знаю».',
      difficulty: 'easy',
      starter: `// const month = 2;`,
      solution: `const month = 2;
switch (month) {
  case 2:
    console.log("Февраль");
    break;
  default:
    console.log("Не знаю");
}`,
      hint: 'case 2: console.log("Февраль"); break; — не забудьте break.',
      expected: ['Февраль'],
    },
    {
      title: 'Цвет светофора',
      task: 'color = "green". Если green — выведите «Можно идти», yellow — «Приготовиться», red — «Стоп», иначе — «Неизвестный цвет».',
      difficulty: 'medium',
      starter: `// const color = "green";`,
      solution: `const color = "green";
switch (color) {
  case "green":
    console.log("Можно идти");
    break;
  case "yellow":
    console.log("Приготовиться");
    break;
  case "red":
    console.log("Стоп");
    break;
  default:
    console.log("Неизвестный цвет");
}`,
      hint: 'Напишите ветку case "green" с console.log("Можно идти") и break.',
      expected: ['Можно идти'],
    },
    {
      title: 'Полный switch',
      task: 'Напишите switch с тремя ветками (case 1, case 2 и default), внутри case 1 используйте console.log и break. Значение переменной выберите сами.',
      difficulty: 'medium',
      starter: `// const n = 1;
// switch (n) { ... }`,
      solution: `const n = 1;
switch (n) {
  case 1:
    console.log("Один");
    break;
  case 2:
    console.log("Два");
    break;
  default:
    console.log("Другое");
}`,
      hint: 'В коде должны встретиться все три конструкции: switch, case и break.',
      expected: [],
      requiredPatterns: [
        { regex: /switch\s*\(/, hint: 'Добавьте switch(значение) { … }' },
        { regex: /case\s+[\d"']/, hint: 'Добавьте хотя бы одну ветку case.' },
        { regex: /break\s*;/, hint: 'Добавьте break в ветку case — без него код «провалится» дальше.' },
      ],
    },
  ],
  quiz: [
{
      q: 'Что произойдёт, если забыть break в case?',
      options: [
        'Код сломается',
        'Выполнение перейдёт к следующему case',
        'Ничего, break не нужен',
        'Появится window alert',
      ],
      answer: 1,
      explain: 'Без break switch «проваливается» в следующий case (эффект fall-through). break нужен в каждой ветке.',
    },
    {
      q: 'Когда выполняется ветка default?',
      options: [
        'Всегда',
        'Когда ни один case не совпал',
        'Перед первым case',
        'Никогда',
      ],
      answer: 1,
      explain: 'default — аналог else: срабатывает, если ни один из вариантов не подошёл.',
    },
    {
      q: 'Сработает ли case "5" при switch(5)?',
      options: ['Да', 'Нет', 'Будет ошибка', 'Зависит от браузера'],
      answer: 1,
      explain: 'switch сравнивает строго (как ===). "5" — строка, 5 — число, они не равны.',
    },
    {
      q: 'Что за эффект fall-through?',
      options: [
        'Переход на следующую ветку case без break',
        'Замедление программы',
        'Вылет браузера',
        'Выход из цикла',
      ],
      answer: 0,
      explain: 'Fall-through — «проваливание» в следующий case, когда забыли break. Обычно это ошибка.',
    },
  ],
};