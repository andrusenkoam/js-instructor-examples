// Занняття 5. Обʼєкти
console.log('Занняття 5. Обʼєкти');

// Example 1 - Основи обʼєктів
console.log('Example 1 - Основи обʼєктів');

// Напиши скрипт, який для об'єкта user, послідовно:
// додає поле mood - зі значенням 'happy'
// замінює значення hobby- на 'skydiving'
// замінює значення premium на false
// виводить вміст обʼєкта user у форматі ключ: значення використовуючи Object. keys() тa for... of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log(user);

user.mood = 'happy';
console.log(user);

user.hobby = 'skydiving';
console.log(user);

// const key = 'premium';
// user[key] = false;
user['premium'] = false;
console.log(user);

const userKeys = Object.keys(user);

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

console.log('\n');

// Example 2 - метод Object.values ()
console.log('Example 2 - метод Object.values ()');

// у нас є обʼект, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо обʼєкт salaries порожній, то результат має бути 0

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(salaries);

const salariesValues = Object.values(salaries);
let sum = 0;

for (const salary of salariesValues) {
  sum += salary;
}

console.log(`Сума зарплат - ${sum}`);
console.log('\n');

// Example 3 - Масив об'єктів
console.log('Example 3 - Масив обʼєктів');

// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив обʼєктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким імʼям, ціною та кількістю з об'єкта

const stones = [
  {
    name: 'Смарагд',
    price: 1300,
    quantity: 4,
  },
  {
    name: 'Діамант',
    price: 2700,
    quantity: 3,
  },
  {
    name: 'Сапфір',
    price: 400,
    quantity: 7,
  },
  {
    name: 'Щебінь',
    price: 200,
    quantity: 2,
  },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stoneName === stone.name) {
      return `${stoneName} - ${stone.price * stone.quantity}`;
    }
  }

  return `${stoneName} - не знайдено`;
}

console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Сапфір'));
console.log(calcTotalPrice(stones, 'Щебінь'));
console.log(calcTotalPrice(stones, 'Рубін'));
console.log('\n');

// Example 4 - Комплексні завдання
console.log('Example 4 - Комплексні завдання');

// Напиши скрипт управління особистим кабінетом інтернет банку. Є обʼєкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій
// Типів транзакцій всього два
// Можна покласти "deposit' чи зняти 'withdraw' гроші з рахунку
// Кожна транзакція це обʼєкт із властивостями: id, type Ta amount

const Transactions = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

Object.freeze(Transactions);

const account = {
  //Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  // Метод створює та повертає обʼєкт транзакції
  // Приймає суму та тип транзакції
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },
  // Метод, що відповідає за додавання суми до балансу
  // Приймає суму транзакції
  // Викликає createTransaction для створення обʼєкта транзакції
  // після чого додає його до історії транзакцій
  deposit(amount) {
    if (amount <= 0) {
      return 'Error';
    }

    const item = this.createTransaction(amount, Transactions.DEPOSIT);
    this.balance += amount;
    this.transactions.push(item);
  },
  // Метод, що відповідає за зняття суми з балансу
  // Приймає суму транзакції
  // Викликає createTransaction для створення обʼєкта транзакції після чого додає його до історії транзакцій.
  // Якщо amount більше ніж поточний баланс, виводь повідомлення "Недостатньо коштів!"
  withdraw(amount) {
    if (amount > this.balance || amount <= 0) {
      return 'Помилка операції!';
    }

    const item = this.createTransaction(amount, Transactions.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(item);
  },
  // Метод повертає поточний баланс
  getBalance() {
    return `Поточний баланс - ${this.balance}`;
  },
  // Метод шукає та повертає обʼєкт транзакції по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return `Транзакцію ${id} не знайдено!`;
  },
  // Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return `Кількість коштів транзакцій типу ${type} - ${sum}`;
  },
};

console.log(account.getBalance());

// Додаємо гроші до балансу
console.log('Додаємо гроші до балансу');
account.deposit(100);
account.deposit(200);
account.deposit(300);
account.deposit(400);

console.log(account.getBalance());
console.log('Історія транзакцій', account.transactions);
console.log('\n');

// Знімаємо гроші з балансу
console.log('Знімаємо гроші з балансу');
console.log(account.withdraw(2000));
account.withdraw(200);
account.withdraw(400);

console.log(account.getBalance());
console.log('Історія транзакцій', account.transactions);
console.log('\n');

// Повертаємо обʼєкт транзакції по id
console.log('Повертаємо обʼєкт транзакції по id');
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(6));
console.log(account.getTransactionDetails(8));
console.log('\n');

// Повертаємо кількість коштів певного типу транзакції з усієї історії транзакцій
console.log(
  'Повертаємо кількість коштів певного типу транзакції з усієї історії транзакцій'
);

console.log(account.getTransactionTotal(Transactions.DEPOSIT));
console.log(account.getTransactionTotal(Transactions.WITHDRAW));
console.log('\n');
console.log('\n');
