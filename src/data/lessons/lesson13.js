// Урок 13. Объекты
export const lesson13 = {
  id: 13,
  slug: 'objects',
  shortTitle: 'Объекты',
  title: 'Объекты: свойства и методы',
  icon: '📦',
  category: 'Объекты',
  difficulty: 'medium',
  minutes: 12,
  description: 'Объекты — пары «ключ: значение». Свойства, методы, изменение и чтение данных одним блоком.',
  skills: ['объект', 'свойства', 'методы', 'ключ'],
  theory: [
    {
      t: 'p',
      text: 'Объект — это набор пар «ключ: значение», объединённых фигурными скобками. Объект описывает один «предмет»: пользователя, товар, карточку в игре.',
    },
    {
      t: 'why',
      text: 'Хранить имя, возраст и статус пользователя отдельными переменными неудобно. Объект собирает все связанные данные в одно место: user.name, user.age, user.email. Так устроены данные почти всех сайтов (JSON).',
    },
    {
      t: 'h2',
      text: 'Создание объекта и доступ к свойствам',
    },
    {
      t: 'syntax',
      code: `const user = {
  name: "Аня",
  age: 17,
  isStudent: true,
};

console.log(user.name);   // через точку
console.log(user["age"]); // через квадратные скобки`,
    },
    {
      t: 'example',
      title: 'Игрок',
      code: `const player = {
  name: "Космонавт",
  hp: 100,
  score: 0,
};

player.score += 10;   // меняем свойство
player.gold = 50;     // добавляем новое свойство

console.log(player.name);
console.log(player.score);
console.log(player.gold);`,
      output: `Космонавт
10
50`,
    },
    {
      t: 'p',
      text: 'Свойства объекта можно читать (player.name), менять (player.score = 5) и добавлять (player.gold = 50). Константа const про объект ничего не запрещает — она лишь не даёт переназначить саму переменную.',
    },
    {
      t: 'h2',
      text: 'Методы — функции внутри объекта',
    },
    {
      t: 'example',
      title: 'Кот с методом',
      code: `const cat = {
  name: "Барсик",
  age: 3,
  speak() {
    return "Мяу!";
  },
};

console.log(cat.name);
console.log(cat.speak());   // вызываем метод со скобками`,
      output: `Барсик
Мяу!`,
    },
    {
      t: 'p',
      text: 'Свойство, внутри которого находится функция, называется методом. Метод вызывается со скобками: cat.speak(). Если написать без скобок — вы получите саму функцию, а не её результат.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `const user = { name: "Аня" };
user = { name: "Боря" }; // ошибка!`,
          good: `const user = { name: "Аня" };
user.name = "Боря";   // меняем свойство — можно`,
          note: 'const нельзя переназначать. Но свойства объекта в const менять можно.',
        },
        {
          bad: `const user = { name: "Аня" };
console.log(user.name()); // TypeError`,
          good: `const user = { name: "Аня" };
console.log(user.name);   // свойство без скобок`,
          note: 'Свойство — это значение, а не функция. Вызывать со скобками можно только методы.',
        },
        {
          bad: `const user = {
  name: "Аня"
  age: 17   // забытая запятая
};`,
          good: `const user = {
  name: "Аня",
  age: 17,
};`,
          note: 'Между свойствами обязательно ставятся запятые. «Висячая» запятая после последнего — стилистически ок.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'Серверы возвращают данные в формате JSON — это и есть объекты JavaScript. Профиль пользователя, товары интернет-магазина, настройки приложения, ответы API — всё это объекты. React-приложения хранят состояния как объекты.',
    },
    {
      t: 'tip',
      text: 'Объекты — «кирпичики» данных. Учитесь видеть за словами «профиль», «заказ», «юзер» обычный объект с ключами.',
    },
  ],
  playground: `const smartphone = {
  brand: "Xiaomi",
  price: 19990,
  inStock: true,
};

smartphone.price = 17990;
smartphone.color = "синий";

console.log(smartphone.brand);
console.log(smartphone.price);
console.log(smartphone.color);

const robot = {
  name: "R2",
  greet() {
    return "Бип-буп, я " + this.name + "!";
  },
};
console.log(robot.greet());`,
  exercises: [
    {
      title: 'Свойство объекта',
      task: 'Создайте объект car со свойством brand со значением "BMW" и выведите это свойство.',
      difficulty: 'easy',
      starter: `// const car = { brand: "BMW" };`,
      solution: `const car = { brand: "BMW" };
console.log(car.brand);`,
      hint: 'const car = { brand: "BMW" }; Затем console.log(car.brand);',
      expected: ['BMW'],
    },
    {
      title: 'Меняем свойство',
      task: 'Создайте объект user: name "Аня", age 17. Затем измените возраст на 18 и выведите его.',
      difficulty: 'medium',
      starter: `// const user = { name: "Аня", age: 17 };`,
      solution: `const user = { name: "Аня", age: 17 };
user.age = 18;
console.log(user.age);`,
      hint: 'Измените свойство: user.age = 18; и выведите user.age.',
      expected: ['18'],
    },
    {
      title: 'Метод',
      task: 'Создайте объект dog с методом voice(), который возвращает "Гав!". Выведите результат вызова метода.',
      difficulty: 'medium',
      starter: `// const dog = { voice() { ... } };`,
      solution: `const dog = {
  voice() {
    return "Гав!";
  },
};
console.log(dog.voice());`,
      hint: 'Метод вызывается со скобками: dog.voice(). Внутри — return "Гав!".',
      expected: ['Гав!'],
    },
  ],
  quiz: [
{
      q: 'Как обратиться к свойству name объекта user?',
      options: ['user->name', 'user.name', 'name.user', 'user(name)'],
      answer: 1,
      explain: 'Доступ к свойству — через точку: user.name. Можно и через скобки: user["name"].',
    },
    {
      q: 'Можно ли менять свойства объекта, объявленного через const?',
      options: [
        'Нет, const запрещает всё',
        'Да, const запрещает только переназначение переменной',
        'Только в режиме разработки',
        'Не знаю',
      ],
      answer: 1,
      explain: 'const запрещает переназначить переменную целиком, но содержимое объекта (свойства) менять можно.',
    },
    {
      q: 'Что хранится в паре «ключ: значение»?',
      options: [
        'Название пары',
        'Ключ — имя свойства, значение — данные под этим ключом',
        'Два одинаковых значения',
        'Только числа',
      ],
      answer: 1,
      explain: 'Объект состоит из пар: ключ (имя свойства) и значение (данные). Это и есть структура объекта.',
    },
    {
      q: 'Что делает запись user.age = 18?',
      options: [
        'Выводит возраст',
        'Изменяет свойство age на 18',
        'Создаёт метод',
        'Удаляет свойство',
      ],
      answer: 1,
      explain: 'Запись через точку с присваиванием меняет значение свойства age на 18.',
    },
  ],
};