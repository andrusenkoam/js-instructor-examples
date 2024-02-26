// Занняття 2. Розгалуження та цикли
console.log('Занняття 2. Розгалуження та цикли');

// Example 1 - Введення користувача та розгалуження
console.log('Example 1 - Введення користувача та розгалуження');

// Використовуючи конструкцію if...else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript - то показуй alert з рядком "Прявильно!", в іншому випадку - "Не знаєте? ECMAScript!"

const answer = 'ECMAScript'.toLowerCase();
// const userAnswer = prompt('Яка офіційна назва JavaScript?').toLowerCase();
const testAnswer = 'ECMAScript'.toLowerCase();

if (testAnswer === answer) {
  // alert('Правильно!');
  console.log('Правильно!');
} else {
  // alert('Не знаєте? ECMAScript!');
  console.log('Не знаєте? ECMAScript!');
}

console.log('\n');

// Example 2 -Відображення часу (if...else)
console.log('Example 2 - Відображення часу  (if...else)');

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г." без хвилин

const hours = 14;
const minutes = 26;
let timeString;

if (minutes) {
  timeString = `${hours} г. ${minutes} хв.`;
} else {
  timeString = `${hours} г.`;
}

console.log(timeString);
console.log('\n');

// Example 3 Розгалуження
console.log('Example 3 - Розгалуження');

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль - "Це нуль". Якщо передали відємне число - "Це негативне число"

// const userInput = Number(prompt('Введіть число!'));
const testInput = 8;

if (!testInput) {
  console.log('Це нуль');
} else if (testInput > 0) {
  console.log('Це позитивне число');
} else {
  console.log('Це негативне число');
}

console.log('\n');

// Example 4 Вкладені розгалуження
console.log('Example 4 - Вкладені розгалуження');

// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
  console.log(a > b ? a : b);
  // if (a > b) {
  //   console.log(a);
  // } else {
  //   console.log(b);
  // }
} else {
  console.log(b + 512);
}

console.log('\n');

// Example 5 Форматування посилання (endsWith)
console.log('Example 5 - Форматування посилання (endsWith)');

// Напиши скрипт, який перевіряє, чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else

let link = 'https://my-site.com/about';

if (!link.endsWith('/')) {
  link += '/';
}

console.log(link);
console.log('\n');

// Example 6 Форматування посилання (includes та логічне "І")
console.log('Example 6 - Форматування посилання (includes та логічне "І")');

// Напиши скрипт, який перевіряє, чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-cite". Використовуй конструкцію is...else

let link_2 = 'https://somesite.com/about';

if (!link_2.endsWith('/') && link_2.includes('my-site')) {
  link_2 += '/';
}

console.log(link_2);
console.log('\n');

// Example 7 Форматування посилання (тернарний оператор)
console.log('Example 7 - Форматування посилання (тернарний оператор)');

// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор

let link_3 = 'https://somesite.com/about';

// if (!link_3.endsWith('/') && link_3.includes('my-site')) {
//   link_2 += '/';
// }

console.log(
  !link_3.endsWith('/') && link_3.includes('my-site') ? (link_3 += '/') : link_3
);
console.log('\n');

// Example 8 if...else та логічні оператори
console.log('Example 8 - if...else та логічні оператори');

// Напиши скрипт, який виводитиме в консоль браузера рядок залежно від значення змінної hours
// Якщо значення змінної hours:
// Менше 17 - рядок "Pending"
// Більше або дорівнює 17 і менше або дорівнює 24 - рядок "Expires"
// Більше 24 - рядок "Overdue"

const hours_2 = 18;

if (hours_2 < 17) {
  console.log('Pending');
} else if (hours_2 <= 24) {
  console.log('Expires');
} else {
  console.log('Overdue');
}

console.log('\n');

// Example 9 Дедлайн здачі проекту (if...else)
console.log('Example 9 - Дедлайн здачі проекту (if...else)');

// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні!!!"
// Якщо до дедлайну 1 день - виведи рядок "Завтра!!"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавта!"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

const daysUntilDeadline = 4;

if (!daysUntilDeadline) {
  console.log('Сьогодні!!!');
} else if (daysUntilDeadline === 1) {
  console.log('Завтра!!');
} else if (daysUntilDeadline === 2) {
  console.log('Післязавта!');
} else {
  console.log('Дата у майбутньому');
}

console.log('\n');

// Example 10 Дедлайн здачі проекту (switch...case)
console.log('Example 10 - Дедлайн здачі проекту (switch...case)');

// Виконай рефакторинг коду задачі номер 9 використовуючи switch

const daysUntilDeadline_2 = 2;

switch (daysUntilDeadline_2) {
  case 0:
    console.log('Сьогодні!!!');
    break;
  case 1:
    console.log('Завтра!!');
    break;
  case 2:
    console.log('Післязавта!');
    break;
  default:
    console.log('Дата у майбутньому');
}

console.log('\n');

// Example 11 Цикл for
console.log('Example 11 - Цикл for');

// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5

const min = 20;
const max = 100;

for (let i = min; i >= min && i <= max; i += 1) {
  if (!(i % 5)) {
    console.log(`${i} - кратне 5`);
  }
}

console.log('\n');

// Example 12 Введення користувача та розгалуження
console.log('Example 12 - Введення користувача та розгалуження');

// Напиши скрипт, який питатиме логін за допомогою prompt та логує результат у консоль браузера
// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано!"
// В іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевірити так:
// Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!"
// Інакше виводити рядок "Невірний пароль!"

// const userLogin = prompt('Введіть логін:');
const login = 'Адмін';

if (login === 'Адмін') {
  // const userPassword = prompt('Введіть пароль:');
  const password = 'Я адмін';
  console.log(password === 'Я адмін' ? 'Вітаю!' : 'Невірний пароль!');
} else if (!userLogin || userLogin === '') {
  console.log('Скасовано!');
} else {
  console.log('Я вас не знаю!');
}
