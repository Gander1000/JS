// Урок 2. Переменные и типы данных
export const lesson02 = {
  id: 2,
  slug: 'variables-and-data-types',
  shortTitle: 'Переменные и типы',
  title: 'Переменные и типы данных',
  icon: '📦',
  category: 'Основы',
  difficulty: 'easy',
  minutes: 15,
  description:
    'Научитесь хранить данные в переменных (const, let, var) и разбираться в типах: string, number, boolean, null, undefined.',
  skills: ['const', 'let', 'var', 'string', 'number', 'boolean', 'null', 'undefined', 'typeof'],
  theory: [
    {
      t: 'p',
      text: 'Переменная — это именованный «контейнер» для данных. Вы придумываете имя, кладёте внутрь значение, а дальше можете обращаться к нему по имени: читать, использовать в выражениях и (если нужно) менять.',
    },
    {
      t: 'why',
      text: 'Без переменных невозможно хранить данные между командами: имя пользователя, возраст, счёт в игре, цену товара. Одна и та же переменная может использоваться в десятках мест программы.',
    },
    {
      t: 'h2',
      text: 'Объявление переменных: const и let',
    },
    {
      t: 'syntax',
      code: `const year = 2026;  // константа: менять нельзя
let score = 0;        // переменная: можно менять
score = 10;           // так менять — можно`,
    },
    {
      t: 'example',
      title: 'const и let на практике',
      code: `const name = "Мария";
let age = 17;
console.log(name, age);

age = 18;   // let можно изменить
console.log(age);`,
      output: `Мария 17
18`,
    },
    {
      t: 'p',
      text: 'Если значение никогда не меняется — используйте const. Если оно будет меняться (счётчик, ввод пользователя) — используйте let. Это правило избавляет от множества ошибок.',
    },
    {
      t: 'h2',
      text: 'Старый способ: var',
    },
    {
      t: 'p',
      text: 'До 2015 года переменные объявляли через var. Он до сих пор работает, но у него нет блочной области видимости — из-за этого возникают сложные ошибки. В новом коде var не используют.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `name = "Аня";   // без объявления`,
          good: `const name = "Аня";`,
          note: 'Без const/let JavaScript создаст «неявную» переменную или выдаст ошибку ReferenceError. Всегда объявляйте переменные.',
        },
        {
          bad: `const pi = 3.14;
pi = 3;   // ошибка!`,
          good: `let pi = 3.14;
pi = 3;   // так можно`,
          note: 'const — это константа. Ей нельзя присвоить новое значение. Для изменяемых значений используйте let.',
        },
        {
          bad: `let str = 'It's fine';`,
          good: `let str = "It's fine";`,
          note: 'Кавычки не должны «встречать» друг друга внутри строки. Используйте другие кавычки снаружи.',
        },
      ],
    },
    {
      t: 'h2',
      text: 'Основные типы данных',
    },
    {
      t: 'list',
      items: [
        { code: 'string', text: '— строка, текст в кавычках: "привет"' },
        { code: 'number', text: '— число: 42, 3.14, -7' },
        { code: 'boolean', text: '— логическое значение: true или false' },
        { code: 'null', text: '— «пусто» намеренно; сам разработчик ставит это значение' },
        { code: 'undefined', text: '— значение не присвоено вовсе' },
      ],
    },
    {
      t: 'example',
      title: 'Типы на практике',
      code: `const city = "Москва";        // string
const price = 99.5;             // number
const inStock = true;           // boolean
const owner = null;             // null
let discount;                   // undefined

console.log(typeof city);
console.log(typeof price);
console.log(typeof inStock);
console.log(typeof owner);
console.log(typeof discount);
console.log(discount);`,
      output: `string
number
boolean
object
undefined
undefined`,
    },
    {
      t: 'p',
      text: 'Оператор typeof показывает тип значения. Обратите внимание: typeof null возвращает "object" — это известная историческая особенность JavaScript. А сам discount, которому никогда не присваивали значение, — undefined.',
    },
    {
      t: 'usage',
      text: 'Переменные повсюду: профиль пользователя (имя, возраст, email), корзина магазина (цена, количество), настройки приложения. Правильный выбор const/let и понимание типов — фундамент любой программы.',
    },
    {
      t: 'tip',
      text: 'Имена переменных пишите на английском, понятными словами: userName вместо u, totalPrice вместо tp.',
    },
  ],
  playground: `const name = "Вася";
let coins = 100;
coins = 120;

console.log(name);
console.log(coins);
console.log(typeof name);
console.log(typeof coins);`,
  exercises: [
    {
      title: 'Возраст',
      task: 'Создайте переменную age со значением 17 и выведите её в консоль.',
      difficulty: 'easy',
      starter: `// Объявите переменную age через const`,
      solution: `const age = 17;
console.log(age);`,
      hint: 'const age = 17; Затем выведите её: console.log(age);',
      expected: ['17'],
    },
    {
      title: 'Тип строки',
      task: 'Объявите переменную city и запишите в неё строку "Москва". После этого проверьте её тип через typeof и выведите его.',
      difficulty: 'medium',
      starter: `// const city = "Москва";
// затем console.log(typeof city);`,
      solution: `const city = "Москва";
console.log(typeof city);`,
      hint: 'Строка обязательно в кавычках. Тип выводите так: console.log(typeof city);',
      expected: ['string'],
    },
    {
      title: 'Без значения',
      task: 'Объявите переменную score с помощью let, но НЕ присваивайте ей значение. Выведите её в консоль.',
      difficulty: 'medium',
      starter: `// let score;  — без значения`,
      solution: `let score;
console.log(score);`,
      hint: 'Если объявить переменную и ничего не записать, у неё будет значение undefined.',
      expected: ['undefined'],
    },
  ],
  quiz: [
{
      q: 'В чём разница между const и let?',
      options: [
        'Никакой разницы',
        'const нельзя переназначать, let можно',
        'let работает только в циклах',
        'const можно только складывать',
      ],
      answer: 1,
      explain: 'const — константа: значение нельзя переназначить. let — изменяемая переменная. Для новых свойств и значений, которые меняются, используйте let.',
    },
    {
      q: 'Какой тип у значения "hello"?',
      options: ['number', 'string', 'boolean', 'undefined'],
      answer: 1,
      explain: '"hello" — строка (string). Всё, что в кавычках, — строка.',
    },
    {
      q: 'Что хранит переменная, объявленная без присваивания?',
      options: ['null', '0', 'undefined', 'ошибку'],
      answer: 2,
      explain: 'Если переменной не присвоили значение, она содержит undefined — «значение не установлено».',
    },
    {
      q: 'Почему var считают устаревшим?',
      options: [
        'Он работает медленнее',
        'У него нет блочной области видимости, из-за чего возникают ошибки',
        'Его нельзя выводить в консоль',
        'Он не поддерживает числа',
      ],
      answer: 1,
      explain: 'var игнорирует блоки (например, { } внутри if), что приводит к ошибкам. В современном коде используют const и let.',
    },
  ],
};