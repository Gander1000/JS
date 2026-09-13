// Урок 5. Математика: объект Math
export const lesson05 = {
  id: 5,
  slug: 'math',
  shortTitle: 'Математика (Math)',
  title: 'Математические функции: Math',
  icon: '📐',
  category: 'Операторы',
  difficulty: 'medium',
  minutes: 12,
  description:
    'Объект Math: sqrt, pow, abs, round, floor, ceil, random, max, min и число PI. Округления и случайные числа.',
  skills: ['Math.sqrt', 'Math.pow', 'Math.abs', 'Math.round', 'Math.floor', 'Math.ceil', 'Math.random', 'Math.max', 'Math.min', 'Math.PI'],
  theory: [
    {
      t: 'p',
      text: 'Math — встроенный объект JavaScript с математическими функциями. Не нужно ничего подключать: все вычисления уже внутри языка.',
    },
    {
      t: 'why',
      text: 'В реальных программах постоянно что-то округляют (цены, проценты), считают случайные числа (игры, тесты, дизайн) и берут максимум/минимум (лимиты, рейтинги).',
    },
    {
      t: 'h2',
      text: 'Основные функции Math',
    },
    {
      t: 'example',
      title: 'Все главные функции',
      code: `console.log(Math.sqrt(16));   // квадратный корень → 4
console.log(Math.pow(2, 3));   // 2 в степени 3 → 8
console.log(Math.abs(-7));     // модуль (без знака) → 7
console.log(Math.round(4.6));  // округление → 5
console.log(Math.round(4.4));  // → 4
console.log(Math.floor(4.9));  // вниз → 4
console.log(Math.ceil(4.1));   // вверх → 5
console.log(Math.max(3, 9, 5)); // максимум → 9
console.log(Math.min(3, 9, 5)); // минимум → 3
console.log(Math.PI);           // число π`,
      output: `4
8
7
5
4
4
5
9
3
3.141592653589793`,
    },
    {
      t: 'h2',
      text: 'Случайные числа: Math.random()',
    },
    {
      t: 'example',
      title: 'Игральная кость от 1 до 6',
      code: `const dice = Math.floor(Math.random() * 6) + 1;
console.log("Выпало: " + dice);`,
      output: `Выпало: (случайное целое от 1 до 6)`,
    },
    {
      t: 'p',
      text: 'Math.random() даёт дробное число от 0 (включительно) до 1 (не включительно). Чтобы получить целое число в диапазоне от min до max, используют формулу: Math.floor(Math.random() * (max - min + 1)) + min.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `console.log(Math.random() * 6); // дробное!`,
          good: `console.log(Math.floor(Math.random() * 6) + 1); // целое 1..6`,
          note: 'Без Math.floor вы получите дробь вроде 4.327. Завершайте округлением и прибавляйте 1, чтобы сдвинуть диапазон.',
        },
        {
          bad: `console.log(Math.Round(4.6)); // undefined`,
          good: `console.log(Math.round(4.6)); // 5`,
          note: 'Регистр важен: Math.round, а не Math.Round. Методы Math пишутся со строчной буквы.',
        },
        {
          bad: `console.log(Math.sqrt(-1)); // NaN`,
          good: `if (value >= 0) {
  console.log(Math.sqrt(value));
}`,
          note: 'Из отрицательных чисел корень не извлекается. Проверяйте значение заранее.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'Цены скидок округляют до копеек: Math.round(price * 0.87 * 100) / 100. В играх случайные числа генерируют урон и награды. Math.max используют для банковских лимитов, Math.ceil — чтобы посчитать страницы списка.',
    },
    {
      t: 'tip',
      text: 'Проверяйте точность округления для денег: храните суммы в копейках (целых числах), чтобы избежать проблем с плавающей точкой.',
    },
  ],
  playground: `console.log(Math.sqrt(144));
console.log(Math.pow(3, 3));
console.log(Math.max(10, 25, 7));

// случайное число от 1 до 10
const lucky = Math.floor(Math.random() * 10) + 1;
console.log("Случайное число: " + lucky);`,
  exercises: [
    {
      title: 'Корень',
      task: 'Вычислите квадратный корень из 144 с помощью Math.sqrt и выведите его.',
      difficulty: 'easy',
      starter: `// console.log(Math.sqrt(144));`,
      solution: `console.log(Math.sqrt(144));`,
      hint: 'Math.sqrt(144) вернёт 12.',
      expected: ['12'],
    },
    {
      title: 'Максимум',
      task: 'Выведите максимальное число из набора 10, 25, 7 с помощью Math.max.',
      difficulty: 'medium',
      starter: `// console.log(Math.max(10, 25, 7));`,
      solution: `console.log(Math.max(10, 25, 7));`,
      hint: 'Math.max принимает любое количество аргументов и возвращает наибольший.',
      expected: ['25'],
    },
    {
      title: 'Случайное число',
      task: 'Сгенерируйте случайное целое число от 1 до 10: используйте Math.random, Math.floor и прибавление 1. Выведите его.',
      difficulty: 'medium',
      starter: `// const n = Math.floor(Math.random() * 10) + 1;`,
      solution: `const n = Math.floor(Math.random() * 10) + 1;
console.log(n);`,
      hint: 'Формула: Math.floor(Math.random() * 10) + 1. Должны встретиться и Math.random, и Math.floor.',
      expected: [],
      requiredPatterns: [
        { regex: /Math\.random\s*\(/, hint: 'Добавьте Math.random() — генератор случайного числа.' },
        { regex: /Math\.floor\s*\(/, hint: 'Добавьте Math.floor — без него число будет дробным.' },
      ],
    },
  ],
  quiz: [
{
      q: 'Чему равен Math.floor(4.9)?',
      options: ['5', '4', '4.9', 'ошибке'],
      answer: 1,
      explain: 'Math.floor округляет ВНИЗ (к меньшему целому). Math.floor(4.9) → 4.',
    },
    {
      q: 'Что вернёт Math.ceil(4.1)?',
      options: ['4', '4.1', '5', 'undefined'],
      answer: 2,
      explain: 'Math.ceil округляет ВВЕРХ (к большему целому). Math.ceil(4.1) → 5.',
    },
    {
      q: 'Какой диапазон у значения Math.random()?',
      options: [
        'от 0 включительно до 1 включительно',
        'от 0 включительно до 1 не включительно',
        'от 0 до 100',
        'от 1 до 10',
      ],
      answer: 1,
      explain: 'Math.random() возвращает дробное число от 0 (включительно) до 1 (не включительно).',
    },
    {
      q: 'Что вернёт Math.max(3, 9, 5)?',
      options: ['3', '5', '9', '17'],
      answer: 2,
      explain: 'Math.max возвращает наибольший из переданных аргументов — 9.',
    },
  ],
};