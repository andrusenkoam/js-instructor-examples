// Занняття 7. Коллбек функції
console.log('Занняття 7. Коллбек функції');

// Example 1 - Коллбек функції
console.log('Example 1 - Коллбек функції');

// Напишіть наступні функції:
// createProduct(obj, callback) - приймає обʼєкт товару без id, а також коллбек. Функція створює обʼєкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений обʼєкт
// logProduct(product) - колббек приймаючий обʼєкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає обʼєкт продукту і логіює загальну вартість товару в консоль

function createProduct(obj, callback) {
  const product = {
    id: Math.random().toString(36).substr(2, 9),
    ...obj,
  };

  callback(product);
}

function logProduct(obj) {
  console.log(obj);
}

function logTotalPrice({ price, quantity }) {
  console.log(`Загальна вартість продукту ${price * quantity} грошей!`);
}

createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
createProduct({ name: 'apple', price: 30, quantity: 3 }, logTotalPrice);
createProduct({ name: 'lemon', price: 20, quantity: 5 }, logProduct);
createProduct({ name: 'lemon', price: 20, quantity: 5 }, logTotalPrice);

console.log('\n');

// Example 2 - Коллбек функції
console.log('Example 2 - Коллбек функції');

// Додайте в обʼєкт account методи withdraw(amount, onSuccess, onError) Ta deposit (amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT ao this.balance, i onSuccess в іншому випадку
// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, i onSuccess в іншому випадку

const TRANSACTION_LIMIT = 1000;

const account = {
  userName: 'Jacob',
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Ліміт транзакції - ${TRANSACTION_LIMIT} грошей`);
      return;
    } else if (amount > this.balance) {
      onError('Недостатньо коштів на рахунку!');
      return;
    }

    this.balance -= amount;
    onSuccess('Операція успішна!');
    console.log(`Залишок на рахунку - ${this.balance} грошей`);
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Ліміт транзакції - ${TRANSACTION_LIMIT} грошей`);
      return;
    } else if (amount <= 0) {
      onError('Сума відємна або дорівнює 0!');
      return;
    }

    this.balance += amount;
    onSuccess('Операція успішна!');
    console.log(`Залишок на рахунку - ${this.balance} грошей`);
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}

function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

console.log('\n');

// Example 3 - Коллбек функції
console.log('Example 3 - Коллбек функції');

// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека

function each(array, callback) {
  const newArray = [];

  for (const number of array) {
    newArray.push(callback(number));
  }

  return newArray;
}

console.log(
  each([64, 49, 36, 2, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 2, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 2, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
console.log('\n');

// Example 4 - Стрілочні функції
console.log('Example 4 - Стрілочні функції');

// Виконайте рефакторинг коду Example 1 за допомогою стрілочних функцій

const createNewProduct = (obj, callback) =>
  callback({
    id: Math.random().toString(36).substr(2, 9),
    ...obj,
  });

const logNewProduct = obj => console.log(obj);

const logNewTotalPrice = ({ price, quantity }) =>
  console.log(`Загальна вартість продукту ${price * quantity} грошей!`);

createNewProduct({ name: '🍎', price: 30, quantity: 3 }, logNewProduct);
createNewProduct({ name: '🍎', price: 30, quantity: 3 }, logNewTotalPrice);
createNewProduct({ name: '🍋', price: 20, quantity: 5 }, logNewProduct);
createNewProduct({ name: '🍋', price: 20, quantity: 5 }, logNewTotalPrice);

console.log('\n');

// Example 5 - Стрілочні функції
console.log('Example 5 - Стрілочні функції');

// Виконайте рефакторинг колбеків Example 2 за допомогою стрілочних функцій

const NEW_TRANSACTION_LIMIT = 1000;

const newAccount = {
  userName: 'Jacob',
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Ліміт транзакції - ${TRANSACTION_LIMIT} грошей`);
      return;
    } else if (amount > this.balance) {
      onError('Недостатньо коштів на рахунку!');
      return;
    }

    this.balance -= amount;
    onSuccess('Операція успішна!');
    console.log(`Залишок на рахунку - ${this.balance} грошей`);
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Ліміт транзакції - ${TRANSACTION_LIMIT} грошей`);
      return;
    } else if (amount <= 0) {
      onError('Сума відємна або дорівнює 0!');
      return;
    }

    this.balance += amount;
    onSuccess('Операція успішна!');
    console.log(`Залишок на рахунку - ${this.balance} грошей`);
  },
};

const newHandleSuccess = message => console.log(`✅ Success! ${message}`);

const newHandleError = message => console.log(`❌ Error! ${message}`);

newAccount.withdraw(2000, handleSuccess, handleError);
newAccount.withdraw(600, handleSuccess, handleError);
newAccount.withdraw(300, handleSuccess, handleError);
newAccount.deposit(1700, handleSuccess, handleError);
newAccount.deposit(0, handleSuccess, handleError);
newAccount.deposit(-600, handleSuccess, handleError);
newAccount.deposit(600, handleSuccess, handleError);

console.log('\n');

// Example 6 - Інлайн стрілочні функції
console.log('Example 6 - Інлайн стрілочні функції');

// Виконайте рефакторинг коду Example 3 за допомогою стрілочних функцій

function newEach(array, callback) {
  const newArray = [];

  for (const number of array) {
    newArray.push(callback(number));
  }

  return newArray;
}

console.log(newEach([64, 49, 36, 2, 16], value => value * 2));
console.log(newEach([64, 49, 36, 2, 16], value => value - 10));
console.log(newEach([64, 49, 36, 2, 16], value => Math.sqrt(value)));
console.log(newEach([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(newEach([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
console.log('\n');

// Example 7 - Метод forEach
console.log('Example 7 - Метод forEach');

// Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції

// function logItems(items) {
//   console.log(items);

//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
// }

const logItems = arr => {
  console.log(arr);
  arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

console.log('\n');

// Example 8 - Метод forEach
console.log('Example 8 - Метод forEach');

// Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total / args.length;
// }

const calculateAverage = (...args) => {
  let total = 0;
  args.forEach(arg => (total += arg));

  return total / args.length;
};

console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));
console.log(calculateAverage(27, 43, 2, 8, 36));
console.log('\n');
console.log('\n');
