// Занняття 8. Перебираючі методи масиву
console.log('Занняття 8. Перебираючі методи масиву');

// Колекція обʼєктів для всіх прикладів з автомобілями

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Example 1 - Метод map()
console.log('Example 1 - Метод map()');

// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів

const getModels = cars => cars.map(car => car.model);

console.table(getModels(cars));
console.log('\n');

// Example 2 - Метод map()
console.log('Example 2 - Метод map()');

// Нехай функція makeCarsWithDiscount повертає новий масив обʼєктів із зміненним значенням властивості price залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => ({
    ...car,
    price: car.price * (1 - discount),
  }));

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
console.log('\n');

// Example 3 - Метод filter()
console.log('Example 3 - Метод filter()');

// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold

const filterByPrice = (cars, threshold) =>
  cars.filter(car => car.price < threshold);

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
console.log('\n');

// Example 4 - Метод filter()
console.log('Example 4 - Метод filter()');

// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true

const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

console.table(getCarsWithDiscount(cars));
console.log('\n');

// Example 5 - Метод filter()
console.log('Example 5 - Метод filter()');

// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
console.log('\n');

// Example 6 - Метод find()
console.log('Example 6 - Метод find()');

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

console.table(getCarByModel(cars, 'F-150'));
console.table(getCarByModel(cars, 'CX-9'));
console.log('\n');

// Example 7 - Метод sort()
console.log('Example 7 - Метод sort()');

// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount

const sortByAscendingAmount = cars =>
  [...cars].sort(({ amount: a }, { amount: b }) => a - b);

console.table(sortByAscendingAmount(cars));
console.log('\n');

// Example 8 - Метод sort()
console.log('Example 8 - Метод sort()');

// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price

const sortByDescendingPrice = cars =>
  [...cars].sort(({ price: a }, { price: b }) => b - a);

console.table(sortByDescendingPrice(cars));
console.log('\n');

// Example 9 - Метод sort()
console.log('Example 9 - Метод sort()');

// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order

const sortByModel = (cars, order) =>
  [...cars].sort(({ model: a }, { model: b }) =>
    order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  );

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
console.log('\n');

// Example 10 - Метод reduce()
console.log('Example 10 - Метод reduce()');

// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount)

const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

console.log(getTotalAmount(cars));
console.log('\n');

// Example 11 - Ланцюжки методів
console.log('Example 11 - Ланцюжки методів');

// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі

const getAvailableCarNames = cars =>
  cars.filter(car => car.onSale).map(car => car.model);

console.table(getAvailableCarNames(cars));
console.log('\n');

// Example 12 - Ланцюжки методів
console.log('Example 12 - Ланцюжки методів');

// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни

/**
 * Gets cars on sale and sorts them
 * @param {Array} cars - array with objects
 * @returns {Array} -sorted array on sale
 */
const getSortedCarsOnSale = cars =>
  cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

console.table(cars);
console.log('\n');

// Приклади застосування reduce
console.log('Приклад застосування reduce');

const str = 'duaguidgasuidgauisdhasudasdfhsgvfakhfugduashc';

const result = str.split('').reduce((acc, item) => {
  item in acc ? (acc[item] += 1) : (acc[item] = 1);
  return acc;
}, {});

const result1 = str.split('').reduce((acc, item) => {
  return {
    ...acc,
    [item]: acc[item] ? (acc[item] += 1) : 1,
  };
}, {});

console.log(result);
console.log(result1);
console.log('\n');

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

const count = fruitBasket.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});

console.log(count);
console.log('\n');

// Загальна кількість авто 6:
// Вивести
// 1 Honda
// 2 Audi

// 6 Reno

// Якщо порожній массив
// Вибачте, авто немає

function logCars(arr) {
  const result = arr.reduce(
    (acc, car, idx) => {
      return acc + `${idx + 1} - ${car}\n`;
    },
    arr.length
      ? `Загальна кількість авто - ${arr.length}\n`
      : 'Вибачте, авто немає 😱'
  );

  return result;
}

console.log(
  logCars(['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault', 'Opel', 'KIA'])
);
console.log(logCars([]));

console.log('\n');
console.log('\n');
