// Урок 15. События
export const lesson15 = {
  id: 15,
  slug: 'events',
  shortTitle: 'События',
  title: 'События: click, input, change, submit',
  icon: '👆',
  category: 'Веб и браузер',
  difficulty: 'medium',
  minutes: 12,
  description: 'Реакция на действия пользователя: addEventListener для кликов, ввода, изменений и отправки форм.',
  skills: ['click', 'input', 'change', 'submit', 'addEventListener'],
  theory: [
    {
      t: 'p',
      text: 'Событие — это сигнал «что-то произошло»: пользователь кликнул по кнопке, набрал текст в поле, отправил форму. С помощью addEventListener программа «подписывается» на событие и реагирует на него.',
    },
    {
      t: 'why',
      text: 'Сайты должны откликаться на действия: лайк по клику, поиск при вводе текста, проверка формы при отправке. События — основа интерактивности.',
    },
    {
      t: 'h2',
      text: 'Синтаксис addEventListener',
    },
    {
      t: 'syntax',
      code: `элемент.addEventListener("событие", обработчик);`,
    },
    {
      t: 'example',
      title: 'Клик по кнопке',
      code: `const button = document.createElement("button");
button.addEventListener("click", () => {
  console.log("Клик!");
});

// в песочнице имитируем клик
button.dispatchEvent(new Event("click"));`,
      output: `Клик!`,
    },
    {
      t: 'p',
      text: 'Первый аргумент — название события, второй — функция-обработчик. Обработчик вызывается каждый раз, когда событие происходит. В песочнице события имитируются через dispatchEvent.',
    },
    {
      t: 'h2',
      text: 'События input и change',
    },
    {
      t: 'example',
      title: 'Ввод текста',
      code: `const input = document.createElement("input");
input.addEventListener("input", () => {
  console.log("Символы вводятся…");
});
input.addEventListener("change", () => {
  console.log("Ввод завершён");
});

input.dispatchEvent(new Event("input"));
input.dispatchEvent(new Event("change"));`,
      output: `Символы вводятся…
Ввод завершён`,
    },
    {
      t: 'p',
      text: 'input срабатывает при КАЖДОМ изменении текста, change — когда пользователь закончил ввод и поле потеряло фокус. В песочнице мы имитируем оба события вручную.',
    },
    {
      t: 'h2',
      text: 'Отправка формы: submit',
    },
    {
      t: 'example',
      title: 'Перехватываем отправку формы',
      code: `const form = document.createElement("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();  // не перезагружать страницу
  console.log("Форма отправлена");
});

form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));`,
      output: `Форма отправлена`,
    },
    {
      t: 'p',
      text: 'По умолчанию отправка формы перезагружает страницу. Вызов event.preventDefault() отменяет это действие, и код обработчика выполняет свою работу.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `btn.onclick = handler;  // не сработает`,
          good: `btn.addEventListener("click", handler);`,
          note: 'События пишутся строчными латинскими буквами: click, а не onclick. Либо используйте свойство btn.onclick.',
        },
        {
          bad: `btn.addEventListener("click", handleClick());`,
          good: `btn.addEventListener("click", handleClick);`,
          note: 'Передавайте саму функцию без скобок, иначе она выполнится сразу при регистрации, а не по клику.',
        },
        {
          bad: `form.addEventListener("submit", () => {
  console.log("ok");
});`,
          good: `form.addEventListener("submit", (event) => {
  event.preventDefault();  // без этого страница перезагрузится
  console.log("ok");
});`,
          note: 'Событие submit перезагружает страницу по умолчанию. Чтобы обрабатывать его в коде, вызывайте preventDefault().',
        },
      ],
    },
    {
      t: 'usage',
      text: 'События — везде: лайки (click), живой поиск (input + fetch), валидация форм (submit + change), клавиатурные комбинации (keydown), закрытие модалок (click на фон).',
    },
    {
      t: 'tip',
      text: 'Имена обработчиков делайте осмысленными: handleClick, onSearchInput — так понятно, что они делают.',
    },
  ],
  playground: `// Создаём кнопку и подписываемся на клик
const button = document.createElement("button");
button.addEventListener("click", () => {
  console.log("Кнопка нажата!");
});

// Имитируем два клика
button.dispatchEvent(new Event("click"));
button.dispatchEvent(new Event("click"));`,
  exercises: [
{
      title: 'Клик',
      task: 'Создайте кнопку, повесьте на неё обработчик события "click", который выводит «Клик!», и имитируйте клик через dispatchEvent(new Event("click")).',
      difficulty: 'easy',
      starter: `// const btn = document.createElement("button");`,
      solution: `const btn = document.createElement("button");
btn.addEventListener("click", () => {
  console.log("Клик!");
});
btn.dispatchEvent(new Event("click"));`,
      hint: 'addEventListener("click", () => console.log("Клик!")). Затем btn.dispatchEvent(new Event("click"));',
      expected: ['Клик!'],
    },
    {
      title: 'Ввод текста',
      task: 'Создайте элемент input, повесьте обработчик события "input", который выводит «Ввод», и имитируйте событие через dispatchEvent.',
      difficulty: 'medium',
      starter: `// const input = document.createElement("input");`,
      solution: `const input = document.createElement("input");
input.addEventListener("input", () => {
  console.log("Ввод");
});
input.dispatchEvent(new Event("input"));`,
      hint: 'input.addEventListener("input", () => console.log("Ввод")); Затем input.dispatchEvent(new Event("input"));',
      expected: ['Ввод'],
    },
    {
      title: 'Отправка формы',
      task: 'Создайте форму form, подпишитесь на событие "submit": вызовите event.preventDefault() и выведите «ok». Имитируйте отправку через dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })).',
      difficulty: 'hard',
      starter: `// const form = document.createElement("form");`,
      solution: `const form = document.createElement("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("ok");
});
form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));`,
      hint: 'В обработчике события submit первым делом вызовите event.preventDefault(), затем console.log("ok"). Не забудьте имитировать отправку.',
      expected: ['ok'],
    },
  ],
  quiz: [
{
      q: 'Что делает addEventListener("click", handler)?',
      options: [
        'Выполняет handler сразу',
        'Подписывает handler на событие click',
        'Удаляет обработчик',
        'Создаёт кнопку',
      ],
      answer: 1,
      explain: 'addEventListener регистрирует обработчик: handler вызовется каждый раз, когда произойдёт событие click.',
    },
    {
      q: 'Почему нельзя писать addEventListener("click", handleClick())?',
      options: [
        'Так нельзя передавать функции',
        'Функция вызовется сразу, а не по клику',
        'Скобки запрещены JavaScript',
        'Можно, это нормально',
      ],
      answer: 1,
      explain: 'Скобки () — это ВЫЗОВ функции. Передавайте саму функцию: handleClick, без скобок.',
    },
    {
      q: 'Что делает event.preventDefault() в обработчике submit?',
      options: [
        'Отменяет отправку формы по умолчанию',
        'Отправляет форму',
        'Удаляет страницу',
        'Ничего',
      ],
      answer: 0,
      explain: 'preventDefault отменяет стандартное действие, например перезагрузку страницы при отправке формы.',
    },
    {
      q: 'Какое событие срабатывает при КАЖДОМ изменении текста в поле?',
      options: ['click', 'submit', 'input', 'hover'],
      answer: 2,
      explain: 'Событие input срабатывает при каждом изменении текста. Событие change — когда ввод завершён и поле потеряло фокус.',
    },
  ],
};