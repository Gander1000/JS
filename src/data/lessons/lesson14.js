// Урок 14. DOM
export const lesson14 = {
  id: 14,
  slug: 'dom',
  shortTitle: 'DOM',
  title: 'DOM: работа с элементами страницы',
  icon: '🌐',
  category: 'Веб и браузер',
  difficulty: 'medium',
  minutes: 15,
  description: 'Поиск элементов, textContent, innerHTML, style и classList — JavaScript оживляет страницу.',
  skills: ['getElementById', 'querySelector', 'querySelectorAll', 'textContent', 'innerHTML', 'style', 'classList'],
  theory: [
    {
      t: 'p',
      text: 'DOM (Document Object Model) — это «дерево» элементов страницы, которое браузер строит из HTML. JavaScript может находить элементы в этом дереве, менять их текст, стили и классы.',
    },
    {
      t: 'why',
      text: 'Без DOM сайт статичен. С помощью DOM делают динамику: поменять цену, подсветить ошибку в форме, добавить новую задачу в список — без перезагрузки страницы.',
    },
    {
      t: 'h2',
      text: 'Поиск элементов',
    },
    {
      t: 'syntax',
      code: `document.getElementById("title");      // по id
document.querySelector(".button");        // по CSS-селектору (первый)
document.querySelectorAll("li");          // все совпадения`,
    },
    {
      t: 'p',
      text: 'getElementById ищет элемент по атрибуту id. querySelector ищет по любому CSS-селектору и возвращает первый элемент, querySelectorAll — все подходящие элементы. В песочнице нет страницы с элементами, поэтому примеры ниже создают элементы программно.',
    },
    {
      t: 'h2',
      text: 'Создаём элемент и меняем текст',
    },
    {
      t: 'example',
      title: 'textContent и innerHTML',
      code: `const div = document.createElement("div");

div.textContent = "Привет, мир!";            // безопасный текст
console.log(div.textContent);

div.innerHTML = "<strong>Жирный</strong>";   // HTML внутри
console.log(div.innerHTML);`,
      output: `Привет, мир!
<strong>Жирный</strong>`,
    },
    {
      t: 'p',
      text: 'textContent меняет ТЕКСТ элемента, а innerHTML умеет вставлять HTML-разметку. Для обычного текста используйте textContent — это безопаснее.',
    },
    {
      t: 'h2',
      text: 'Стили через style',
    },
    {
      t: 'example',
      title: 'Меняем стиль',
      code: `const box = document.createElement("div");
box.style.color = "red";
box.style.fontSize = "20px";

console.log(box.style.color);
console.log(box.style.fontSize);`,
      output: `red
20px`,
    },
    {
      t: 'h2',
      text: 'Классы через classList',
    },
    {
      t: 'example',
      title: 'Добавляем и проверяем класс',
      code: `const card = document.createElement("div");
card.classList.add("active");
card.classList.add("visible");

console.log(card.classList.contains("active"));
console.log(card.className);`,
      output: `true
active visible`,
    },
    {
      t: 'p',
      text: 'classList.add добавляет класс, classList.remove удаляет, classList.toggle переключает, classList.contains проверяет наличие. className показывает все классы строкой.',
    },
    {
      t: 'mistakes',
      items: [
        {
          bad: `const el = document.getElementById("none");
el.textContent = "Привет"; // TypeError`,
          good: `const el = document.getElementById("none");
if (el) {
  el.textContent = "Привет";
}`,
          note: 'Если элемент не найден, getElementById вернёт null. Проверяйте его перед использованием.',
        },
        {
          bad: `div.innerHTML = userInput; // риск XSS`,
          good: `div.textContent = userInput;`,
          note: 'Вставлять пользовательские данные через innerHTML опасно: можно вставить чужой код. Для текста используйте textContent.',
        },
        {
          bad: `document.querySelectorAll("li").push("x"); // ошибка`,
          good: `const li = document.querySelectorAll("li");
li.forEach((item) => console.log(item.textContent));`,
          note: 'querySelectorAll возвращает NodeList, а не массив: у него есть forEach, но нет push/map/filter.',
        },
      ],
    },
    {
      t: 'usage',
      text: 'DOM — то, из чего состоят интерактивные сайты: лайки без перезагрузки, раскрывающиеся меню, валидация форм с красной подсветкой, динамические списки задач, модальные окна.',
    },
    {
      t: 'tip',
      text: 'Сначала найдите элемент (getElementById), затем меняйте его (textContent, style, classList). Два шага — и страница оживает.',
    },
  ],
  playground: `// В песочнице нет реальной страницы,
// поэтому создаём элементы программно
const message = document.createElement("p");
message.textContent = "Я умею менять текст!";
message.style.color = "green";
message.classList.add("done");

console.log(message.textContent);
console.log(message.style.color);
console.log(message.classList.contains("done"));`,
  exercises: [
{
      title: 'textContent',
      task: 'Создайте элемент через document.createElement("p"), задайте ему textContent = "Привет" и выведите textContent.',
      difficulty: 'easy',
      starter: `// const p = document.createElement("p");`,
      solution: `const p = document.createElement("p");
p.textContent = "Привет";
console.log(p.textContent);`,
      hint: 'Создайте элемент: const p = document.createElement("p"); Затем p.textContent = "Привет"; и console.log(p.textContent);',
      expected: ['Привет'],
    },
    {
      title: 'classList',
      task: 'Создайте элемент, добавьте ему класс "active" через classList.add и выведите список классов через className.',
      difficulty: 'medium',
      starter: `// const el = document.createElement("div");`,
      solution: `const el = document.createElement("div");
el.classList.add("active");
console.log(el.className);`,
      hint: 'el.classList.add("active"); затем console.log(el.className); → выведет active.',
      expected: ['active'],
    },
    {
      title: 'innerHTML',
      task: 'Создайте элемент, запишите в него HTML через innerHTML (например "<b>Жирный</b>") и выведите значение innerHTML.',
      difficulty: 'medium',
      starter: `// const el = document.createElement("div");`,
      solution: `const el = document.createElement("div");
el.innerHTML = "<b>Жирный</b>";
console.log(el.innerHTML);`,
      hint: 'el.innerHTML = "<b>Жирный</b>"; затем console.log(el.innerHTML);',
      expected: ['<b>Жирный</b>'],
    },
  ],
  quiz: [
{
      q: 'Как найти элемент по id?',
      options: [
        'document.findId("title")',
        'document.getElementById("title")',
        'document.id("title")',
        'document.queryId("title")',
      ],
      answer: 1,
      explain: 'getElementById находит элемент по атрибуту id. Это самый быстрый способ поиска.',
    },
    {
      q: 'В чём разница textContent и innerHTML?',
      options: [
        'Никакой',
        'textContent — только текст, innerHTML — и HTML-разметка',
        'innerHTML быстрее',
        'textContent работает только для заголовков',
      ],
      answer: 1,
      explain: 'textContent записывает чистый текст, innerHTML — текст с разметкой HTML. Для обычного текста безопаснее textContent.',
    },
    {
      q: 'Что делает classList.add("active")?',
      options: [
        'Удаляет класс',
        'Добавляет класс элементу',
        'Создаёт новый элемент',
        'Меняет текст',
      ],
      answer: 1,
      explain: 'classList.add добавляет класс. Ещё есть remove, toggle и contains.',
    },
    {
      q: 'Что вернёт querySelector(".box")?',
      options: [
        'Все элементы с классом box',
        'Первый подходящий элемент',
        'Массив всех элементов страницы',
        'Строку',
      ],
      answer: 1,
      explain: 'querySelector возвращает ПЕРВЫЙ подходящий элемент. Все — возвращает querySelectorAll.',
    },
  ],
};