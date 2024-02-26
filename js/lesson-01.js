// Занняття 1. Змінні, типи та оператори
console.log('Занняття 1. Змінні, типи та оператори');

// Example 1 - Базові математичні оператори
console.log('Example 1 - Базові математичні оператори');

// Виведи на екран загальну кулькість яблук та винограду. Різницю яблук та винограду.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log('Яблук - ', apples);
console.log('Винограду - ', grapes);
console.log('Загальна кулькість яблук та винограду - ', total);
const diff = grapes - apples;
console.log('Різниця яблук та винограду - ', diff);
console.log('\n');

// Example 2 - Комбіновані оператори
console.log('Example 2 - Комбіновані оператори');

// Заміни вираз перевизначення комбінованим оператором.
let students = 100;
students += 50;
console.log('Всього студентів - ', students);
console.log('\n');

// Example 3 - Пріоритет операторів
console.log('Example 3 - Пріоритет операторів');

// Розбери пріоритет операторів в інструкції привласнення значення змінній result.

const result = 108 + 223 - 2 * 5;
console.log(`Результат - ${result}`);
const result_2 = (108 + 223 - 2) * 5;
console.log(`Результат - ${result_2}`);
console.log('\n');

// Example 4 - Класс Math
console.log('Example 4 - Класс Math');

// Напиши скрипт, який виводить у консоль округлені вверх/вниз і т.д. значення змінної value. Використай методи Math.floor(), Math.ceil() и Math.round(). Перевір, що буде в консолі при значеннях 27.3 и 27.8.

const value = 27.3;
const float = 27.8;

console.log(`Значення Floor-value - ${Math.floor(value)}`);
console.log(`Значення Ceil-value - ${Math.ceil(value)}`);
console.log(`Значення Round-value - ${Math.round(value)}`);

console.log(`Значення Floor-float - ${Math.floor(float)}`);
console.log(`Значення Ceil-float - ${Math.ceil(float)}`);
console.log(`Значення Round-float - ${Math.round(float)}`);
console.log('\n');

// Example 5 - Шаблонні рядки
console.log('Example 5 - Шаблонні рядки');
// Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставленні в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const allBots = repairBots + defenceBots;
const message = `Cyberdyne Systems has ${allBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
console.log('\n');

// Example 6 - Методи рядків та чейнінг
console.log('Example 6 - Методи рядків та чейнінг');

// Напиши скрипт який розраховує індекс маси людини. Для цього необхідно розділити вагу в кілограмах на квадрат зросту людини в метрах.
// Вага та зріст зберігаються в змінних weight и height, але не як числа, а у вигляді рядків (спеціально для задачі). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто, як роздільник дробної частини - може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = Number('88,3'.replace(',', '.'));
console.log(`Вага людини - ${weight} кг.`);
let height = Number('1.75'.replace(',', '.'));
console.log(`Зріст людини - ${height} м.`);

// const bmi = Number(weight / Math.pow(height, 2)).toFixed(1);
const bmi = Number(weight / height ** 2).toFixed;
console.log(`Індекс маси тіла людини - ${bmi}.`); // 28.8
console.log('\n');

// Example 7 - Оператори порівняння та приведення типів
console.log('Example 7 - Оператори порівняння та приведення типів');

// Яким буде результат виразів?

console.log('5 > 4 -', 5 > 4);
console.log('10 >= "7" -', 10 >= '7');
console.log('"2" > "12" -', '2' > '12');
console.log('"2" < "12" -', '2' < '12');
console.log('"4" == 4 -', '4' == 4);
console.log('"6" === 6', '6' === 6);
console.log('"false" === false -', 'false' === false);
console.log('1 == true -', 1 == true);
console.log('1 === true -', 1 === true);
console.log('"0" == false -', '0' == false);
console.log('"0" === false -', '0' === false);
console.log('"Papaya" < "papaya" -', 'Papaya' < 'papaya');
console.log('"Papaya" === "papaya" -', 'Papaya' === 'papaya');
console.log('undefined == null -', undefined == null);
console.log('undefined === null -', undefined === null);
console.log('\n');

// Example 8 - Логічні оператори
console.log('Example 8 - Логические операторы');

// Яким буде результат виразів?

console.log('true && 3 -', true && 3);
console.log('false && 3 -', false && 3);
console.log('true && 4 && "kiwi"-', true && 4 && 'kiwi');
console.log('true && 0 && "kiwi" -', true && 0 && 'kiwi');
console.log('true || 3 -', true || 3);
console.log('true || 3 || 4 -', true || 3 || 4);
console.log('true || false || 7 -', true || false || 7);
console.log('null || 2 || undefined -', null || 2 || undefined);
console.log('(1 && null && 2) > 0 -', (1 && null && 2) > 0);
console.log('null || (2 && 3) || 4 -', null || (2 && 3) || 4);
console.log('\n');

// Example 9 - Значення за замовчуванням та оператор нульового злиття
console.log(
  'Example 9 - Значення за замовчуванням та оператор нульового злиття'
);

// Зроби рефакторинг коду так, щоб в змінну value присвоювалось значення incomingValue, якщо воно не дорівнює undefined або null. В іншому випадку повинно присвоїтись значення defaultValue. Перевір роботу скрипту для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

const incomingValue = null;
const defaultValue = 10;
const value2 = incomingValue ?? defaultValue;
console.log(value2);
console.log('\n');

// Example 10 - Опертор % та методи рядків
console.log('Example 10 - Опертор % та методи рядків');
// Напиши скрипт який приведе значення totalMinutes (кількість хвилин) до рядка в форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24: 01

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
console.log('\n');
console.log('\n');
