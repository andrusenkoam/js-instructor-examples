// Занняття 3. Масиви
console.log('Занняття 3. Масиви');

// Example 1 - Базові операції з масивом
console.log('Example 1 - Базові  операції з масивом');

// Створіть масив genres з елементами "Jazz" та "Blues"
// Додайте "Rock" до кінця
// Виведіть у консоль перший елемент масиву
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини
// Видаліть перший елемент та виведіть його в консоль
// Вставте "Country" та "Reggae" на початку масиву

const genres = ['Jazz', 'Blues'];
console.log(genres);

genres.push('Rock');
console.log(genres);

console.log(genres[0]);

console.log(genres[genres.length - 1]);

console.log(genres.shift());
console.log(genres);

genres.unshift('Country', 'Reggae');
console.log(genres);
console.log('\n');

// Example 2 - Масиви та рядки
console.log('Example 2 - Масиви та рядки');

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом

const values = '8 11';
console.log(values);

const arr = values.split(' ');
console.log(arr);

const width = Number(arr[0]);
const height = Number(arr[arr.length - 1]);

const square = width * height;

console.log(square);
console.log('\n');

// Example 3 - Перебір масиву
console.log('Example 3 - Перебір масиву');

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елементу масиву виведи у консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1

const fruits = ['Apple', 'Grape', 'Strawbery', 'Banana', 'Lemon'];
console.table(fruits);

for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
  console.log(`${n}: ${fruits[i]}`);
}

console.log('\n');

// Example 4 - Масиви та цикли
console.log('Example 4 - Масиви та цикли');

// Напиши скрипт, який виводить у консоль імʼя та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказує на відповідність. Кількість імен та телефонів гарантовано однакова

let names = 'Jacob,William,Solomon,Andriy';
console.log(names);

let phones = '8091111111,80912222222,80913333333,80914444444';
console.log(phones);

names = names.split(',');
console.log(names);

phones = phones.split(',');
console.log(phones);

for (let i = 0; i < names.length && i < phones.length; i += 1) {
  console.log(`${names[i]} - ${phones[i]}`);
}

console.log('\n');

// Example 5 - Масиви та рядки
console.log('Example 5 - Масиви та рядки');

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символом пробілу. Скрипт повинен працювати для будь якого рядка

const string = 'Welcome to the future';
console.log(string);

const changeString = string.split(' ').slice(1, -1).join(' ');

console.log(changeString);
console.log('\n');

// Example 6 - Масиви та рядки
console.log('Example 6 - Масиви та рядки');

// Напиши скрипт, який перевериає рядок (зворотний порядок букв) і виводить його в консоль

const string2 = 'Welcome to the future';
console.log(string2);

const reverseString = string2.split('').reverse().join('');
console.log(reverseString);
console.log('\n');

// Example 7 - Сортування масиву із циклом
console.log('Example 7 - Сортування масиву із циклом');

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента

const languages = ['python', 'javascript', 'c++', 'haskel', 'ruby'];
console.log(languages);

for (let i = 0; i < languages.length; i += 1) {
  if (languages[0] > languages[i]) {
    const result = languages.splice(i, 1)[0];
    languages.unshift(result);
  }
}

console.log(languages);
console.log('\n');

// Example 8 - Сортування масиву із циклом
console.log('Example 8 - Сортування масиву із циклом');

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розвʼязування задачі

const numbers = [2, 17, 94, 1, 23, 37];
console.log(numbers);

let min = numbers[0];

for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}

console.log(min);
console.log('\n');
console.log('\n');
