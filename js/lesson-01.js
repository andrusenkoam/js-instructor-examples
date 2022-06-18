// Модуль 1. Занятие 1. Переменные, типы и операторы
console.log('Модуль 1. Занятие 1. Переменные, типы и операторы');
// console.log('\n');

// Example 1 - Базовые математические операторы
console.log('Example 1 - Базовые математические операторы');

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log('Ябдок - ', apples);
console.log('Винограда - ', grapes);
console.log('Общее количество яблок и винограда - ', total);
const diff = grapes - apples;
console.log('Разница яблок и винограда - ', diff);
console.log('\n');

// Example 2 - Комбинированные операторы
console.log('Example 2 - Комбинированные операторы');

// Замени выражение переопределения комбинированным оператором +=.
let students = 100;
students += 50;
console.log('Всего студентов - ', students);
console.log('\n');

// Example 3 - Приоритет операторов
console.log('Example 3 - Приоритет операторов');
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

const result = 108 + 223 - 2 * 5;
console.log(`Результат ${result}`);
console.log('\n');

// Example 4 - Класс Math
console.log('Example 4 - Класс Math');
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

const value = 27.3;
const float = 27.9;

console.log(`Значение Floor-value - ${Math.floor(value)}`);
console.log(`Значение Ceil-value - ${Math.ceil(value)}`);
console.log(`Значение Round-value - ${Math.round(value)}`);

console.log(`Значение Floor-float - ${Math.floor(float)}`);
console.log(`Значение Ceil-float - ${Math.ceil(float)}`);
console.log(`Значение Round-float - ${Math.round(float)}`);
console.log('\n');

// Example 5 - Шаблонные строки
console.log('Example 5 - Шаблонные строки');
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const allBots = repairBots + defenceBots;
const message = `Cyberdyne Systems has ${allBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
console.log('\n');

// Example 6 - Методы строк и чейнинг
console.log('Example 6 - Методы строк и чейнинг');
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

let weight = Number('88,3'.replace(',', '.'));
console.log(weight);
let height = Number('1.75'.replace(',', '.'));
console.log(height);

const bmi = Number(weight / Math.pow(height, 2)).toFixed(1);
console.log(`Масса тела человека - ${bmi} кг.`); // 28.8
console.log('\n');

// Example 7 - Операторы сравнения и приведение типов
console.log('Example 7 - Операторы сравнения и приведение типов');
// Каким будет результат выражений?

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

// Example 8 - Логические операторы
console.log('Example 8 - Логические операторы');
// Каким будет результат выражений?

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

// Example 9 - Значение по умолчанию и оператор нулевого слияния
console.log('Example 9 - Значение по умолчанию и оператор нулевого слияния');
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

const incomingValue = null;
const defaultValue = 10;
const value2 = incomingValue ?? defaultValue;
console.log(value2);
console.log('\n');

// Example 10 - Опертор % и методы строк
console.log('Example 10 - Опертор % и методы строк');
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24: 01

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
