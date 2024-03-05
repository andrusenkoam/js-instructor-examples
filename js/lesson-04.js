// Занняття 4. Функції
console.log('Занняття 4. Функції');

// Example 1 - Індекс маси тіла
console.log('Example 1 - Індекс маси тіла');

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Вага та зріст передані як рядки. Роздільником дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після крапки

function calcBMI(weight, height) {
  weight = Number(weight.replace(',', '.'));
  height = Number(height.replace(',', '.'));

  console.log('Вага -', weight, 'кг.');
  console.log('Зріст -', height, 'м.');

  // return Number((weight / Math.pow(height, 2)).toFixed(1));
  return Number((weight / height ** 2).toFixed(1));
}

const bmi = calcBMI('88,3', '1.75');
console.log('Індекс маси тіла людини - ', bmi);
console.log('\n');

// Example 2 - Найменше з чисел
console.log('Example 2 - Найменше з чисел');

// Напиши функцію min(a, b) яка повертає найменше з чисел a та b

function min(a, b) {
  return a > b ? b : a;
  // return Math.min(a, b);
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(8, 11));
console.log('\n');

// Example 3 - Площа прямокутника
console.log('Example 3 - Площа прямокутника');

// Напиши функцію getRectArea(dimension) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimension у вигляді рядка. Значення гарантовано розділені пробілом

function getRectArea(demension) {
  demension = demension.split(' ');

  return Number(demension[0]) * Number(demension[demension.length - 1]);
}

console.log(getRectArea('8 11'));
console.log(getRectArea('48 22'));
console.log(getRectArea('42 84'));
console.log('\n');

// Example 4 - Логування елементів
console.log('Example 4 - Логування елементів');

// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі "номер елемента" - "значення елемента". Нумерація елементів повинна починатися з 1

function logItems(items) {
  for (let i = 0, n = 1; i < items.length; i += 1, n += 1) {
    console.log(`${n} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['Apple', 'Grape', 'Strawberry', 'Banana', 'Lemon']);

console.log('\n');

// Example 5 - Логування контактів
console.log('Example 5 - Логування контактів');

// Напиши функцію printContactsInfo(names, phones), яка виводить у консоль імʼя та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказує на відповідність. Кількість імен та телефонів гарантовано однакова

function printContactsInfo(names, phones) {
  names = names.split(',');
  phones = phones.split(',');

  for (let i = 0; i < names.length && i < phones.length; i += 1) {
    console.log(`${names[i]} - ${phones[i]}`);
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Andriy',
  '8091111111,80912222222,80913333333,80914444444'
);

console.log('\n');

// Example 6 - Пошук найбільшого елемента
console.log('Example 6 - Пошук найбільшого елемента');

// Напиши функцію findLargestNumber(numbers) яка шукає найбільше число

function findLargestNumber(...args) {
  let largestNumber = args[0];

  for (const arg of args) {
    if (largestNumber < arg) {
      largestNumber = arg;
    }
  }

  return largestNumber;
}

console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
console.log(findLargestNumber(49, 4, 7, 83, 12));
console.log('\n');

// Example 6/1 - Пошук найбільшого елемента в даних з вкладеним масивом
console.log(
  'Example 6/1 - Пошук найбільшого елемента в даних з вкладеним масивом'
);

function findBigestNumber() {
  let max;

  for (const arg of arguments) {
    if (typeof arg === 'number') {
      max = arg;
      break;
    }
  }

  for (const arg of arguments) {
    if (typeof arg === 'number') {
      if (max < arg) {
        max = arg;
      }
    } else {
      max = findBigestNumber(...arg);
    }
  }

  return max;
}

console.log(findBigestNumber([[1, 148], 5, 7], 6, 7, 8, 128));
console.log('\n');

// Example 7 - Середнє значення
console.log('Example 7 - Середнє значення');

// Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами

function calcAverage(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total / args.length;
}

console.log(calcAverage(1, 2, 3, 4));
console.log(calcAverage(14, 8, 2));
console.log(calcAverage(27, 43, 2, 8, 36));
console.log('\n');

// Example 8 - Форматування часу
console.log('Example 8 - Форматування часу');

// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
}

console.log(formatTime(70));
console.log(formatTime(450));
console.log(formatTime(1441));
console.log('\n');

// Example 9 - Колекція курсів (includes, indexOf, push і т.д.)
console.log('Example 9 - Колекція курсів (includes, indexOf, push і т.д.)');

// Напиши функції для роботи з колекцією навчальних курсів courses
// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - зміню імʼя курсу на нове

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
console.log(courses);

function addCourse(course) {
  if (courses.includes(course)) {
    return `Ви вже маєте курс ${course}`;
  }

  courses.push(course);
}

function removeCourse(course) {
  const idx = courses.indexOf(course);

  if (!!~idx) {
    courses.splice(idx, 1);
    return;
  }

  return `Курс ${course} не знайдено!`;
}

function updateCourse(oldCourse, newCourse) {
  const idx = courses.indexOf(oldCourse);

  if (!!~idx) {
    courses.splice(idx, 1, newCourse);
    return;
  }

  return `Курс ${oldCourse} не знайдено!`;
}

console.log('Додаємо курс до кінця колекції');
addCourse('Express');
console.log(courses);
console.log(addCourse('CSS'));

console.log('Видаляємо курс з колекції');
removeCourse('PostgreSQL');
console.log(courses);
console.log(removeCourse('Vue'));

console.log('Змінюємо імʼя курсу на нове');
updateCourse('Express', 'NestJS');
console.log(courses);
console.log(updateCourse('Vue', 'CSS'));

console.log('\n');
console.log('\n');
