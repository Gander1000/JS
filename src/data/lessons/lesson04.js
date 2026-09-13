// Урок 4. Преобразование типов
export const lesson04 = {
  id: 4,
  slug: 'type-conversion',
  shortTitle: 'Преобразование типов',
  title: 'Преобразование типов',
  icon: '🔁',
  category: 'Операторы',
  difficulty: 'easy',
  minutes: 12,
  description: 'Научитесь превращать значения из одних типов в другие: Number(), String(), Boolean().',
  skills: ['Number', 'String', 'Boolean', 'typeof', 'NaN'],
  theory: [
    {
      t: 'p',
      text: 'Иногда значение нужно «переодеть» в другой тип: число представить как строку, текст превратить в число, число — в true/false. Для этого в JavaScript есть функции-конструкторы Number(), String() и Boolean().',
    },
    {
      t: 'why',
      text: 'Больше всего это нужно при работе с вводом пользователя. Например, prompt() всегда возвращает строку: "17" — а дальше надо считать Math — и 17 + 1 превратится в "171". Чтобы этого не случилось, строку превращают в число.',
    },
    {
      t: 'h2',
      text: 'Number() — превращаем в число',
    },
    {
      t: 'example',
      title: 'Строки в числа',
      code: `const text = "123";
const num = Number(text);

console.log(num + 1);        // 124
console.log(Number("42"));   // 42
console.log(Number("abc"));  // NaN`,
      output: `124
42
NaN`,
    },
    {
      t: 'p',
      text: 'NaN — «Not a Number» (не число). JavaScript так сообщает, что превратить текст в число не получилось. Работать с NaN нужно осторожно: даже NaN === NaN даёт false, используют функцию Number.isNaN(значение).',
    },
    {
      t: 'h2',
      text: 'String() — превращаем в строку',
    },
    {
      t: 'example',
      title: 'Числа в строки',
      code: `console.log(String(42));      // "42"
console.log(String(true));    // "true"
console.log(String(42) + "!");`,
      output: `42
true
42!`,
    },
    {
      t: 'h2',
      text: 'Boolean() — превращаем в true/false',
    },
    {
      t: 'example',
      title: '«Ложные» значения',
      code: `console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean(null));   // false
console.log(Boolean(42));     // true
console.log(Boolean("hi"));   // true`,
      output: `false
false
false
true
true`,
    },
    {
      t: 'p',
      text: 'Запомните короткий список «ложных» значений: 0, "" (пустая строка), null, undefined, NaN, false. Всё остальное — «истинное».',
    },
    {
      t: 'h2',
      text: 'Неявное преобразование',
    },
    {
      t: 'example',
      title: 'JS сам «приводит» типы',
      code: `console.log("2" + 2);  // "22": + со строкой = склейка
console.log("2" * 2);  // 4: * превращает строки в числа
console.log("5" > "10"); // true: сравнивает строки лексикографически`,
      output: `22
4
true`,
    },
    {
      t: 'p',
      text: 'Знак + со строкой склеивает строки, а остальные операторы (*, /, -, >) преобразуют строку в число. Такое скрытое преобразование — частый источник багов, поэтому лучше делать его явно через Number().',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `const total = prompt("Возраст?") + 5; // "175"`,
          good: `const total = Number(prompt("Возраст?")) + 5; // 22`,
          note: 'prompt возвращает строку. Для арифметики превратите её в число через Number().',
        },
        {
          bad: `console.log(Number("abc") === NaN); // false`,
          good: `console.log(Number.isNaN(Number("abc"))); // true`,
          note: 'NaN не равен самому себе! Проверяйте через Number.isNaN().',
        },
        {
          bad: `console.log("10" + 5); // "105"`,
          good: `console.log(Number("10") + 5); // 15`,
          note: '+ со строкой не складывает, а склеивает. Превратите строку в число заранее.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'Формы сайтов всегда возвращают строки: даже «возраст» с поля ввода — это строка. Перед расчётами (сумма, NPS-индексы, скидки) данные от ввода превращают в числа. Boolean() помогает превращать значения в флаги вроде «поле заполнено».',
    },
    {
      t: 'tip',
      text: 'Всегда проверяйте, что превращение прошло успешно: Number("abc") — NaN. Спрашивайте себя: «это точно число, или строка?»',
    },
  ],
  playground: `const ageText = prompt("Сколько вам лет?");
const age = Number(ageText);

console.log("Через 5 лет вам будет: " + (age + 5));
console.log(String(age) + " — это уже строка!");
console.log(Boolean(age));`,
  exercises: [
    {
      title: 'Строка в число',
      task: 'Преобразуйте строку "42" в число с помощью Number() и выведите результат его сложения с 8.',
      difficulty: 'easy',
      starter: `// const num = Number("42");`,
      solution: `const num = Number("42");
console.log(num + 8);`,
      hint: 'Number("42") даёт число 42. Прибавьте 8 и выведите: console.log(Number("42") + 8);',
      expected: ['50'],
    },
    {
      title: 'Число в строку',
      task: 'Преобразуйте число 42 в строку с помощью String(), сохраните в переменную text и выведите её тип через typeof.',
      difficulty: 'medium',
      starter: `// const text = String(42);`,
      solution: `const text = String(42);
console.log(typeof text);`,
      hint: 'String(42) вернёт строку "42". typeof text покажет string.',
      expected: ['string'],
    },
    {
      title: 'Число в true/false',
      task: 'Выведите результат преобразования числа 0 с помощью Boolean().',
      difficulty: 'medium',
      starter: `// console.log(Boolean(0));`,
      solution: `console.log(Boolean(0));`,
      hint: '0 — «ложное» значение, Boolean(0) вернёт false.',
      expected: ['false'],
    },
  ],
  quiz: [
{
      q: 'Чему равно Number("42") + 10?',
      options: ['"4210"', '52', '"42" + 10', 'ошибке'],
      answer: 1,
      explain: 'Number("42") превращает строку в число 42. 42 + 10 = 52.',
    },
    {
      q: 'Что выведет console.log("10" + 5)?',
      options: ['15', '"105"', 'ошибку', 'undefined'],
      answer: 1,
      explain: 'Если один из операндов — строка, + склеивает их: "10" + 5 → "105".',
    },
    {
      q: 'Что вернёт Boolean(0)?',
      options: ['true', 'false', 'ошибку', '0'],
      answer: 1,
      explain: '0 — одно из «ложных» значений JS. Boolean(0) → false.',
    },
    {
      q: 'Почему нельзя сравнить Number("abc") === NaN?',
      options: [
        'NaN всегда больше любого числа',
        'NaN не равен самому себе, нужно Number.isNaN()',
        'Такую запись запрещает синтаксис',
        'NaN — это строка',
      ],
      answer: 1,
      explain: 'NaN — специальное значение «не число», которое не равно самому себе. Для проверки используют Number.isNaN().',
    },
  ],
};