// Урок 17. Современный JavaScript
export const lesson17 = {
  id: 17,
  slug: 'modern-javascript',
  shortTitle: 'Современный JavaScript',
  title: 'Современный JavaScript: шаблоны, деструктуризация, spread',
  icon: '🚀',
  category: 'Современный JavaScript',
  difficulty: 'medium',
  minutes: 15,
  description: 'Template literals, деструктуризация, spread, rest, optional chaining и nullish coalescing.',
  skills: ['template literals', 'деструктуризация', 'spread', 'rest', '?.', '??'],
  theory: [
    {
      t: 'p',
      text: 'Современный JavaScript (стандарт ES6+) добавил удобные конструкции для работы со строками, массивами и объектами. Они делают код короче и понятнее.',
    },
    {
      t: 'why',
      text: 'Эти возможности — стандарт индустрии: их используют все современные фреймворки. Без них код превращается в «спагетти» из строковой склейки и длинных цепочек точек.',
    },
    {
      t: 'h2',
      text: 'Template literals: строки в обратных кавычках',
    },
    {
      t: 'example',
      title: 'Вставка значений через ${}',
      code: `const name = "Аня";
const age = 17;

console.log(\`Меня зовут \${name}, мне \${age} лет\`);`,
      output: `Меня зовут Аня, мне 17 лет`,
    },
    {
      t: 'p',
      text: 'Обратные кавычки ` позволяют вставлять значения прямо в строку через \${выражение}. Так удобнее, чем склеивать строку через +.',
    },
    {
      t: 'h2',
      text: 'Деструктуризация',
    },
    {
      t: 'example',
      title: 'Распаковка объекта и массива',
      code: `const user = { name: "Аня", age: 17 };
const { name, age } = user;
console.log(name, age);

const fruits = ["яблоко", "банан"];
const [first, second] = fruits;
console.log(second);`,
      output: `Аня 17
банан`,
    },
    {
      t: 'h2',
      text: 'Spread (…) — копирование и расширение',
    },
    {
      t: 'example',
      title: 'Копия массива и слияние объектов',
      code: `const numbers = [1, 2, 3];
const copy = [...numbers, 4];
console.log(copy);

const base = { a: 1, b: 2 };
const extra = { ...base, b: 9 };
console.log(extra.b);`,
      output: `[1,2,3,4]
9`,
    },
    {
      t: 'h2',
      text: 'Rest (…) — собрать аргументы в массив',
    },
    {
      t: 'example',
      title: 'Сумма любого количества чисел',
      code: `function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));`,
      output: `10`,
    },
    {
      t: 'p',
      text: 'Три точки … называются spread, когда «раскладывают» массив/объект, и rest — когда собирают оставшиеся аргументы в массив.',
    },
    {
      t: 'h2',
      text: 'Optional chaining (?.) и nullish (??)',
    },
    {
      t: 'example',
      title: 'Безопасное обращение к вложенным данным',
      code: `const user = { profile: { city: "Москва" } };

console.log(user.profile?.city);    // Москва
console.log(user.address?.city);    // undefined, НЕ ошибка

const width = null;
const realWidth = width ?? 300;    // 300, т.к. null
console.log(realWidth);`,
      output: `Москва
undefined
300`,
    },
    {
      t: 'p',
      text: '?. проверяет, существует ли элемент перед ним: если нет, вернётся undefined вместо ошибки. ?? подставляет значение по умолчанию, когда слева null или undefined.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `const user = {};
console.log(user.address.city); // TypeError`,
          good: `const user = {};
console.log(user.address?.city); // undefined`,
          note: 'Без ?. обращение к свойству у undefined даёт ошибку. Optional chaining делает это безопасным.',
        },
        {
          bad: `const name = "Аня";
console.log("Привет, " + name + "!");`,
          good: `const name = "Аня";
console.log(\`Привет, \${name}!\`);`,
          note: 'Код выше работает, но читается тяжело. Template literals с ${} удобнее и меньше места занимают.',
        },
        {
          bad: `const copy = numbers;  // это не копия!`,
          good: `const copy = [...numbers];`,
          note: 'Простое присваивание ссылается на тот же массив — изменения отразятся в обоих. Spread создаёт копию.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'React, Node.js и все современные инструменты используют эти возможности ежедневно: конфигурации-объекты сливают через spread, данные с сервера распаковывают через деструктуризацию, шаблоны строк — в любом UI.',
    },
    {
      t: 'tip',
      text: 'Начните с template literals и spread — они пригодится чаще всего. Остальное подтянется по мере практики.',
    },
  ],
  playground: `// Шаблонные строки
const city = "Москва";
const year = 2026;
console.log(\`Я живу в \${city} с \${year - 1} года\`);

// Spread массива
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);

// Optional chaining
const settings = {};
console.log(settings.theme?.color);`,
  exercises: [
{
      title: 'Шаблонная строка',
      task: 'Дана переменная const name = "Витя". Выведите фразу «Привет, Витя!» с помощью template literal (обратные кавычки и ${name}).',
      difficulty: 'easy',
      starter: `// const name = "Витя";`,
      solution: `const name = "Витя";
console.log(\`Привет, \${name}!\`);`,
      hint: 'console.log(`Привет, ${name}!`); — кавычки должны быть обратными (`), а не обычными.',
      expected: ['Привет, Витя!'],
    },
    {
      title: 'Деструктуризация',
      task: 'Дан массив [10, 20]. Разложите его на переменные first и second через деструктуризацию и выведите first.',
      difficulty: 'medium',
      starter: `// const nums = [10, 20];
// const [first, second] = nums;`,
      solution: `const nums = [10, 20];
const [first, second] = nums;
console.log(first);`,
      hint: 'const [first, second] = nums; — затем console.log(first);',
      expected: ['10'],
    },
    {
      title: 'Spread-копия',
      task: 'Создайте новую переменную copy: массив [1, 2], дополненный числом 3 через spread. Выведите длину copy.',
      difficulty: 'medium',
      starter: `// const copy = [...[1, 2], 3];`,
      solution: `const copy = [...[1, 2], 3];
console.log(copy.length);`,
      hint: 'const copy = [...[1, 2], 3]; → [1, 2, 3]. Его длина — 3.',
      expected: ['3'],
    },
  ],
  quiz: [
{
      q: 'Что делает запись ${name} внутри обратных кавычек?',
      options: [
        'Ничего',
        'Подставляет значение переменной name в строку',
        'Создаёт переменную',
        'Выводит символы ${name}',
      ],
      answer: 1,
      explain: 'Внутри template literal ${выражение} вставляет значение выражения прямо в строку.',
    },
    {
      q: 'Что делает const { name } = user;?',
      options: [
        'Создаёт новый объект',
        'Достаёт свойство name из user в переменную name',
        'Удаляет свойство name',
        'Копирует весь объект',
      ],
      answer: 1,
      explain: 'Это деструктуризация: свойство user.name распаковывается в отдельную переменную name.',
    },
    {
      q: 'Что делает ...nums в аргументах функции?',
      options: [
        'Ничего',
        'Собирает ВСЕ переданные аргументы в массив nums (rest)',
        'Умножает числа',
        'Удаляет аргументы',
      ],
      answer: 1,
      explain: 'Три точки в параметрах — rest: все переданные аргументы собираются в один массив.',
    },
    {
      q: 'Чему равно null ?? 100?',
      options: ['null', '100', 'ошибке', 'undefined'],
      answer: 1,
      explain: '?? возвращает значение справа, если слева null или undefined. null ?? 100 → 100.',
    },
  ],
};