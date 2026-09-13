// Урок 18. Методы массивов
export const lesson18 = {
  id: 18,
  slug: 'array-methods',
  shortTitle: 'Методы массивов',
  title: 'Методы массивов: forEach, map, filter, find, some, every, reduce',
  icon: '🧰',
  category: 'Современный JavaScript',
  difficulty: 'hard',
  minutes: 15,
  description: 'Элегантная работа со списками без ручных циклов: forEach, map, filter, find, some, every, reduce.',
  skills: ['forEach', 'map', 'filter', 'find', 'some', 'every', 'reduce'],
  theory: [
    {
      t: 'p',
      text: 'Методы массивов — это готовые функции для работы со списками. Вместо ручных циклов для for вы вызываете один метод и передаёте ему функцию для каждого элемента.',
    },
    {
      t: 'why',
      text: 'Методы короче, читаются как описание действия: «преобразуй каждый» (map), «отфильтруй» (filter), «найди» (find). С ними почти не ошибаешься в индексах и не забываешь увеличивать счётчик.',
    },
    {
      t: 'h2',
      text: 'forEach — пройтись по каждому элементу',
    },
    {
      t: 'example',
      title: 'Вывод всех элементов',
      code: `const numbers = [1, 2, 3];

numbers.forEach((n) => {
  console.log(n);
});`,
      output: `1
2
3`,
    },
    {
      t: 'h2',
      text: 'map — создать новый массив',
    },
    {
      t: 'example',
      title: 'Удвоить каждый элемент',
      code: `const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);`,
      output: `[2,4,6]`,
    },
    {
      t: 'p',
      text: 'map возвращает НОВЫЙ массив той же длины, где каждый элемент — результат функции. Исходный массив не меняется.',
    },
    {
      t: 'h2',
      text: 'filter — оставить подходящие элементы',
    },
    {
      t: 'example',
      title: 'Только числа больше 1',
      code: `const numbers = [1, 2, 3];
const big = numbers.filter((n) => n > 1);
console.log(big);
console.log(numbers); // исходный не изменился`,
      output: `[2,3]
[1,2,3]`,
    },
    {
      t: 'h2',
      text: 'find, some, every',
    },
    {
      t: 'example',
      title: 'Поиск и проверки',
      code: `const numbers = [1, 2, 3];

console.log(numbers.find((n) => n > 1));    // первый подходящий → 2
console.log(numbers.some((n) => n > 2));    // есть ли хоть один → true
console.log(numbers.every((n) => n > 0));   // все ли подходят → true`,
      output: `2
true
true`,
    },
    {
      t: 'p',
      text: 'find возвращает первый элемент, для которого функция вернула true (или undefined, если такого нет). some — true, если подходит хотя бы один. every — true, если подходят ВСЕ.',
    },
    {
      t: 'h2',
      text: 'reduce — собрать одно значение',
    },
    {
      t: 'example',
      title: 'Сумма элементов',
      code: `const numbers = [5, 10, 15];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);`,
      output: `30`,
    },
    {
      t: 'p',
      text: 'reduce «сворачивает» массив в одно значение. acc — накопленный результат (начинается со второго аргумента 0), n — текущий элемент. Здесь удобно считать суммы, максимумы, группировки.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `const doubled = numbers.map((n) => { n * 2 }); // [undefined, ...]`,
          good: `const doubled = numbers.map((n) => n * 2);
const doubled2 = numbers.map((n) => { return n * 2; });`,
          note: 'В теле со скобками { } нужен return. Без него каждый элемент станет undefined.',
        },
        {
          bad: `const big = numbers.filter((n) => n > 1);
big.push(99); // изменим "отфильтрованный"`,
          good: `const big = numbers.filter((n) => n > 1);
// big — новый массив, numbers не тронут`,
          note: 'filter НЕ меняет исходный массив, а возвращает новый. Меняя результат, вы не затронете оригинал.',
        },
        {
          bad: `[].reduce((acc, n) => acc + n); // ошибка!`,
          good: `[].reduce((acc, n) => acc + n, 0); // 0`,
          note: 'Если массив пустой и не задано начальное значение — будет ошибка. Всегда передавайте начальное значение в reduce.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'Обработка данных с сервера: users.map(u => u.name) — имена, orders.filter(o => o.status === "paid") — оплаченные заказы, cart.reduce(...) — итоговая сумма корзины. В React map — стандарт для вывода списков.',
    },
    {
      t: 'tip',
      text: 'Методы можно «цепочкой»: numbers.filter(...).map(...).reduce(...). Каждый следующий работает с результатом предыдущего.',
    },
  ],
  playground: `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const even = numbers.filter((n) => n % 2 === 0);
const firstBig = numbers.find((n) => n > 3);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(doubled);
console.log(even);
console.log(firstBig);
console.log("Сумма: " + sum);`,
  exercises: [
{
      title: 'map',
      task: 'const numbers = [1, 2, 3]. Через map создайте массив из удвоенных значений и выведите его.',
      difficulty: 'easy',
      starter: `// const numbers = [1, 2, 3];
// const doubled = numbers.map((n) => n * 2);`,
      solution: `const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);`,
      hint: 'const doubled = numbers.map((n) => n * 2); Затем console.log(doubled);',
      expected: ['[2,4,6]'],
    },
    {
      title: 'filter',
      task: 'const numbers = [3, 7, 2, 9]. Через filter оставьте числа больше 5 и выведите результат.',
      difficulty: 'medium',
      starter: `// const numbers = [3, 7, 2, 9];`,
      solution: `const numbers = [3, 7, 2, 9];
const big = numbers.filter((n) => n > 5);
console.log(big);`,
      hint: 'numbers.filter((n) => n > 5) вернёт [7, 9]. Выведите новый массив.',
      expected: ['[7,9]'],
    },
    {
      title: 'reduce',
      task: 'const numbers = [5, 10, 15]. Через reduce найдите сумму элементов (с начальным значением 0) и выведите её.',
      difficulty: 'hard',
      starter: `// const numbers = [5, 10, 15];`,
      solution: `const numbers = [5, 10, 15];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);`,
      hint: 'numbers.reduce((acc, n) => acc + n, 0) → 30. Начальное значение 0 — обязательно передавайте.',
      expected: ['30'],
    },
  ],
  quiz: [
{
      q: 'Что возвращает map?',
      options: [
        'Число',
        'Новый массив с преобразованными элементами',
        'Старый массив',
        'Ничего',
      ],
      answer: 1,
      explain: 'map создаёт НОВЫЙ массив той же длины: каждый элемент — результат переданной функции. Исходный массив не меняется.',
    },
    {
      q: 'Что возвращает filter?',
      options: [
        'Первый подходящий элемент',
        'true или false',
        'Новый массив из подходящих элементов',
        'Сумму элементов',
      ],
      answer: 2,
      explain: 'filter возвращает новый массив, в который попадают элементы, для которых функция вернула true.',
    },
    {
      q: 'Что вернёт [1, 2, 3].find((n) => n > 1)?',
      options: ['[2, 3]', '2', 'true', '3'],
      answer: 1,
      explain: 'find возвращает ПЕРВЫЙ подходящий элемент. Первое число больше 1 — это 2.',
    },
    {
      q: 'Что вычисляет reduce с начальным значением 0?',
      options: [
        'Разность',
        'Сумму всех элементов',
        'Максимум',
        'Среднее',
      ],
      answer: 1,
      explain: 'reduce накапливает результат: acc = acc + n. С начальным значением 0 получится сумма всех элементов.',
    },
  ],
};