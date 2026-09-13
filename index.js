// //Вывод информации. Работа с консолью

// //document.write("Hello, World!"); выводит информацию на страницу
// //console.log("Hello, World!"); выводит информацию в консоль
// //console.info("Hello, World!"); выводит информацию в консоль
// //console.error("Hello, World!"); выводит ошибку в консоль
// //console.warn("Hello, World!"); выводит предупреждение в консоль

// // Переменные и типы данных в JS

// //const нелзя изменять, let можно изменять, var устаревший способ объявления переменных
// const name = "John"; //строка
// const age = 30; //число
// const isStudent = true; //логический тип данных
// const float = 3.14; //число с плавающей точкой
// const bool = false; //логический тип данных

// let city = "New York"; //строка
// city = "Los Angeles"; //изменение значения переменной

// var a = 5;
// var b = 10;
// a = 15;
// var c = a + b;
// console.log(c);

// //мотематема: Операторы в JS

// let x = a + b; //сложение
// let y = a - b; //вычитание
// let z = a * b; //умножение
// let w = a / b; //деление

// let num = Number("2"); //преобразование строки в число

// num = num + 5; //сложение числа и строки

// console.log(x);
// console.log(num);

// // || оператор "или", && оператор "и", ! оператор "не"

// let v = a > b || a < b;
// let n = a > b && a < b;
// let m = !(a > b);

// //математические функции

// console.log("Math.sqrt(16) = " + Math.sqrt(16)); //квадратный корень
// console.log("Math.pow(2, 3) = " + Math.pow(2, 3)); //возведение в степень
// console.log("Math.abs(-5) = " + Math.abs(-5)); //модуль числа
// console.log("Math.round(4.7) = " + Math.round(4.7)); //округление числа
// console.log("Math.floor(4.7) = " + Math.floor(4.7)); //округление вниз
// console.log("Math.ceil(4.7) = " + Math.ceil(4.7)); //округление вверх
// console.log("Math.random() = " + Math.random()); //случайное число от 0 до 1
// console.log("Math.max(1, 2, 3) = " + Math.max(1, 2, 3)); //максимальное число
// console.log("Math.min(1, 2, 3) = " + Math.min(1, 2, 3)); //минимальное число
// console.log("Math.PI = " + Math.PI); //число Пи

// //арифметические операторы

// let p = a > b; //больше
// let q = a < b; //меньше
// let r = a >= b; //больше или равно
// let s = a <= b; //меньше или
// += плус равно, -= минус равно, *= умножить равно, /= делить равно, %= остаток от деления

// console.log(p);

// //логические операторы

// let t = a == b; //равно
// let u = a != b; //не равно

// console.log(t);

// //условные операторы

// if (a > b) {
//   console.log("a больше b");
// }

// num1 = prompt("Введите число:"); //ввод числа с клавиатуры
// oper = prompt("Введите операцию (+, -, *, /):"); //ввод операции с клавиатуры
// num2 = prompt("Введите второе число:"); //ввод второго числа с клавиатуры

// if (oper == "+") {
//   alert("Результат: " + (Number(num1) + Number(num2)));
// } else if (oper == "-") {
//   alert("Результат: " + (Number(num1) - Number(num2)));
// } else if (oper == "*") {
//   alert("Результат: " + Number(num1) * Number(num2));
// } else if (oper == "/") {
//   alert("Результат: " + Number(num1) / Number(num2));
// } else if (oper == "%") {
//   alert("Результат: " + (Number(num1) % Number(num2)));
// } else if (oper == "**") {
//   alert("Результат: " + Number(num1) ** Number(num2));
// } else if (oper == "//") {
//   alert("Результат: " + Math.floor(Number(num1) / Number(num2)));
// } else {
//   alert("Ошибка! Введите корректную операцию.");
// }

// // Switch case default

// let day = prompt("Введите день недели (1-7):");

// switch (day) {
//   case "1":
//     alert("Понедельник");
//     break;
//   case "2":
//     alert("Вторник");
//     break;
//   case "3":
//     alert("Среда");
//     break;
//   case "4":
//     alert("Четверг");
//     break;
//   case "5":
//     alert("Пятница");
//     break;
//   case "6":
//     alert("Суббота");
//     break;
//   case "7":
//     alert("Воскресенье");
//     break;
//   default:
//     alert("Ошибка! Введите корректный день недели.");
// }

// // массивы для хранения данных

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[0]); //вывод первого элемента массива
// console.log(arr.length); //вывод длины массива

// let arr2 = [[1, 2], [3, 4], [5, 6]]; //двумерный массив

// console.log(arr2[0][0]); //вывод первого элемента первого подмассива
// console.log(arr2[1][1]); //вывод второго элемента второго подмассива
// console.log(arr2[2][0]); //вывод первого элемента третьего подмассива

// //циклы в JS

// // For loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i); // удобен для перебора массивов и объектов
// }

// wer = [1, 2, 3, 4, 5];

// for (let i = 0; i < wer.length; i++) {
//   console.log(wer[i]); // перебор массива
// }

// // while

// let i = 0;

// while (i <= 10) {
//   console.log(i); // когда нужно проверить уловие перед выполнением кода
//   i++;
// }

// // do while

// let j = 0;

// do {
//   console.log(j);
//   j++;
// } while (j < 10); // срабатывает хотя бы один раз, даже если условие не выполняется

// // операторы циклов

// // break - прерывает выполнение цикла
// // continue - пропускает текущую итерацию и переходит к следующей

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // прерывает цикл, когда i равно 5
//   }
// }

// // всплывающие окна

// alert("Hello, World!"); //выводит всплывающее окно с сообщением
//let name1 = prompt("Введите ваше имя:"); //выводит всплывающее окно с полем для ввода
// let age1 = confirm("Вам есть 18 лет?", 0-100); //выводит всплывающее окно с кнопками "ОК" и "Отмена"

// функции в JS

// function greet(name) { // функция greet принимает параметр name
//   console.log("Hello, " + name + "!");
// }

// //greet("Alice"); // вызов функции greet с аргументом "Alice"

// function add(a, b) { // функция add принимает два параметра a и b
//   let res = a + b; // складывает a и b и сохраняет результат в переменную res
//   greet (res); // вызывает функцию greet с аргументом "Result: " + res
// }

// add(5, 10); // вызов функции add с аргументами 5 и 10

// function summa (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;  console.log("Сумма элементов массива: " + sum);
// }

// let arr3 = [1, 2, 3, 4, 5];
// let result = summa(arr3); // вызов функции summa с аргументом arr3
// console.log("Сумма элементов массива: " + result); // вывод результата в консоль

// // локальные и глобальные переменные

// let globalVar = "I am a global variable"; // глобальная переменная

// function localScope() {
//   let localVar = "I am a local variable"; // локальная переменная
//   console.log(globalVar); // доступ к глобальной переменной
//   console.log(localVar); // доступ к локальной переменной
// }
// localScope();

// события в JS

// function handleClick() {
//   alert("Button clicked!");
// }

// let number = 0;

// function incrementNumber(el) {
//   number++;
//   el.innerText = number;
//   el.style.backgroundColor = "red"; // изменяет цвет кнопки при клике
//   el.style.color = "yellow"; // изменяет цвет текста кнопки при клике
//   el.style.fontSize = "20px"; // изменяет размер текста кнопки при клике
//   el.style.cssText = "border: none; border-radius: 5px;"; // изменяет стиль кнопки при клике

//   // console.log(el.name); // выводит имя кнопки в консоль
//   // console.log(el.value); // выводит значение кнопки в консоль
// }

// function handleInput(el) {
//   if (el.value == "hello") {
//     alert("You typed hello!");
//   }
//     console.log(el.value); // выводит значение инпута в консоль
// }

// let text = document.getElementById("text");
// text.title = "Hello, World!"; // изменяет значение атрибута title
// console.log(text.title); // выводит значение атрибута title в консоль

// text.style.color = "red"; // изменяет цвет текста на красный
// text.style.fontSize = "20px"; // изменяет размер текста на 20px
// text.style.backgroundColor = "yellow"; // изменяет цвет фона на желтый

// text.innerHTML = "Hello,<br> World!"; // изменяет текст внутри элемента

// document.getElementById("text").style.cssText = "border: 1px solid black; border-radius: 5px; padding: 10px;"; // изменяет стиль элемента

// let masiv = document.getElementsByTagName("p"); // возвращает массив всех элементов p на странице
// console.log(masiv[0].innerHTML); // выводит текст первого элемента p в консоль

// for (let i = 0; i < masiv.length; i++) {
// console.log(masiv[i].innerHTML); // выводит текст всех элементов p в консоль
// }

// таймеры и интервалы

// let counter = 0;

// let id = setInterval(my, 1000);

// function my () {
//     counter++;
//     console.log(counter)

//     if(counter == 3){
//         clearInterval(id);
//     }
// }

// // setInterval(function () {
// // counter++;
// // console.log(counter)
// // }, 1000) 

// setTimeout(function() {
//     console.log("1000")
// }, 1000)

// Создание объектов. Встроенные функции

// let date = new Date();

// console.log(date.getFullYear())
// console.log(date.getMonth() + 1)
// console.log(date.getDay() + 1)


