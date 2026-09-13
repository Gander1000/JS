// Урок 16. Таймеры
export const lesson16 = {
  id: 16,
  slug: 'timers',
  shortTitle: 'Таймеры',
  title: 'Таймеры: setTimeout, setInterval, clearTimeout, clearInterval',
  icon: '⏱️',
  category: 'Веб и браузер',
  difficulty: 'medium',
  minutes: 10,
  description: 'Отложенные и повторяющиеся действия: setTimeout, setInterval и их отмена.',
  skills: ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'],
  theory: [
    {
      t: 'p',
      text: 'setTimeout выполняет код один раз через указанное время, setInterval — повторяет код через равные промежутки. clearTimeout и clearInterval отменяют запланированное.',
    },
    {
      t: 'why',
      text: 'Таймеры нужны для анимаций и слайдеров, автосохранения, отсчёта времени в играх, показа подсказок «через 2 секунды». Без них такие вещи не сделать.',
    },
    {
      t: 'h2',
      text: 'setTimeout — выполнить один раз с задержкой',
    },
    {
      t: 'syntax',
      code: `setTimeout(() => {
  console.log("Через 1 секунду");
}, 1000);   // 1000 миллисекунд = 1 секунда`,
    },
    {
      t: 'example',
      title: 'Отложенное сообщение',
      code: `console.log("Начало");
setTimeout(() => {
  console.log("Прошла 1 секунда");
}, 1000);
console.log("Конец");`,
      output: `Начало
Конец
(через 1 секунду) Прошла 1 секунда`,
    },
    {
      t: 'p',
      text: 'Важно: код не останавливается! setTimeout лишь планирует вызов функции. Сначала выведется «Начало» и «Конец», а спустя секунду — сообщение таймера. Время задаётся в миллисекундах: 1000 = 1 секунда.',
    },
    {
      t: 'h2',
      text: 'setInterval — повторять каждые N миллисекунд',
    },
    {
      t: 'example',
      title: 'Счётчик с остановкой',
      code: `let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(count);
  if (count === 3) {
    clearInterval(timer);   // остановить
  }
}, 500);`,
      output: `1
2
3`,
    },
    {
      t: 'p',
      text: 'setInterval возвращает идентификатор таймера. Сохранив его в переменную, можно остановить повторение через clearInterval(идентификатор).',
    },
    {
      t: 'h2',
      text: 'clearTimeout',
    },
    {
      t: 'example',
      title: 'Отмена отложенной задачи',
      code: `const id = setTimeout(() => {
  console.log("Это не выведется");
}, 1000);

clearTimeout(id);   // задача отменена
console.log("Отменено");`,
      output: `Отменено`,
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `setTimeout(() => console.log("hi"), 1); // почти сразу`,
          good: `setTimeout(() => console.log("hi"), 1000); // через секунду`,
          note: 'Время — в миллисекундах! 1000 — это 1 секунда, а не 1. Число 1 — одна тысячная секунды.',
        },
        {
          bad: `setInterval(() => {
  console.log("tick");
});  // без задержки и без остановки`,
          good: `const timer = setInterval(() => {
  console.log("tick");
}, 1000);
// вовремя остановить: clearInterval(timer)`,
          note: 'setInterval без clearInterval работает бесконечно. Всегда планируйте остановку.',
        },
        {
          bad: `setTimeout(() => { ... }); // id не сохранён`,
          good: `const id = setTimeout(() => { ... }, 1000);
// теперь id можно передать в clearTimeout(id)`,
          note: 'Не сохранили id — не сможете отменить таймер. Всегда сохраняйте идентификатор.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'setTimeout: всплывающие уведомления, автосохранение через 2 секунды после остановки ввода, скрытие меню. setInterval: слайдеры, часы, прогресс-бары. clearInterval — остановка всего этого.',
    },
    {
      t: 'tip',
      text: 'В разработке принято всегда «чистить» таймеры, когда элемент уходит со страницы — иначе код работает в фоне зря.',
    },
  ],
  playground: `console.log("Запуск песочницы…");

setTimeout(() => {
  console.log("Через 1 секунду");
}, 1000);

let ticks = 0;
const timer = setInterval(() => {
  ticks++;
  console.log("тик " + ticks);
  if (ticks === 3) {
    clearInterval(timer);
  }
}, 300);`,
  exercises: [
{
      title: 'Отложенная задача',
      task: 'Используйте setTimeout, чтобы вывести «Готово» через 1000 миллисекунд. (В песочнице отложенный вывод не попадает в проверку, поэтому проверка идёт по шаблону кода.)',
      difficulty: 'medium',
      starter: `// setTimeout(() => { console.log("Готово"); }, 1000);`,
      solution: `setTimeout(() => {
  console.log("Готово");
}, 1000);`,
      hint: 'Напишите setTimeout(() => { console.log("Готово"); }, 1000);',
      expected: [],
      requiredPatterns: [{ regex: /setTimeout\s*\(/, hint: 'Добавьте setTimeout(' }],
    },
    {
      title: 'Повторение и остановка',
      task: 'Напишите код, который использует setInterval (повторяет действия), console.log внутри и clearInterval для остановки.',
      difficulty: 'medium',
      starter: `// const timer = setInterval(() => { ... }, 100);`,
      solution: `let count = 0;
const timer = setInterval(() => {
  count++;
  console.log("тик");
  if (count === 2) {
    clearInterval(timer);
  }
}, 100);`,
      hint: 'В коде должны встретиться setInterval, console.log и clearInterval.',
      expected: [],
      requiredPatterns: [
        { regex: /setInterval\s*\(/, hint: 'Добавьте setInterval(' },
        { regex: /console\.log\s*\(/, hint: 'Добавьте console.log(' },
        { regex: /clearInterval\s*\(/, hint: 'Добавьте clearInterval(' },
      ],
    },
    {
      title: 'Отмена',
      task: 'Напишите код: setTimeout в переменной id и сразу clearTimeout(id), чтобы отменить задачу.',
      difficulty: 'medium',
      starter: `// const id = setTimeout(() => console.log("x"), 100);`,
      solution: `const id = setTimeout(() => console.log("x"), 100);
clearTimeout(id);`,
      hint: 'const id = setTimeout(...); Затем clearTimeout(id);',
      expected: [],
      requiredPatterns: [
        { regex: /setTimeout\s*\(/, hint: 'Добавьте setTimeout(' },
        { regex: /clearTimeout\s*\(/, hint: 'Добавьте clearTimeout(' },
      ],
    },
  ],
  quiz: [
{
      q: 'setTimeout(f, 1000) — через сколько времени выполнится f?',
      options: ['Через 1 секунду', 'Сразу', 'Через 1 минуту', 'Через 10 секунд'],
      answer: 0,
      explain: 'Время задаётся в миллисекундах. 1000 мс = 1 секунда.',
    },
    {
      q: 'Что делает setInterval?',
      options: [
        'Выполняет код один раз через время',
        'Повторяет код каждые N миллисекунд',
        'Останавливает таймеры',
        'Создаёт цикл for',
      ],
      answer: 1,
      explain: 'setInterval запускает код повторно через равные промежутки времени, пока его не остановит clearInterval.',
    },
    {
      q: 'Зачем нужен clearInterval?',
      options: [
        'Чтобы сделать паузу',
        'Чтобы остановить повторение setInterval',
        'Чтобы ускорить код',
        'Это то же самое, что return',
      ],
      answer: 1,
      explain: 'clearInterval(идентификатор) останавливает интервал. Без него setInterval выполняется бесконечно.',
    },
    {
      q: 'Сколько секунд в 5000 миллисекунд?',
      options: ['5 секунд', '50 секунд', '0.5 секунды', '500 секунд'],
      answer: 0,
      explain: '1 секунда = 1000 мс. 5000 / 1000 = 5 секунд.',
    },
  ],
};