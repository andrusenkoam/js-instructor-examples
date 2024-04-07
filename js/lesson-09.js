// Занняття 9. Ключове слово this
console.log('Занняття 9. Ключове слово this');

// Example 1 - Майстерня коштовностей
console.log('Example 1 - Майстерня коштовностей');

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає вагальну вартість каменів з таким імʼям, ціною та кількістю з властивості stones

const chopShot = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    const { price, quantity } = this.stones.find(
      ({ name }) => name === stoneName
    );

    return `Загальна вартість ${stoneName} - ${price * quantity}`;
  },
};

console.log(chopShot.calcTotalPrice('Emerald'));
console.log(chopShot.calcTotalPrice('Diamond'));
console.log(chopShot.calcTotalPrice('Sapphire'));
console.log(chopShot.calcTotalPrice('Ruby'));
console.log('\n');

// Example 2 - Телефонна книга
console.log('Example 2 - Телефонна книга');

// Виконайте рефакторинг методів обʼєкту phonebook щоб код запрацював

const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };

    this.contacts.push(newContact);

    return this.contacts;
  },

  generateId() {
    return '_' + Math.random.toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

console.table(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);

console.table(
  phonebook.add({
    name: 'Poly',
    email: 'poly@mail.com',
  })
);

console.log('\n');

// Example 3 - Калькулятор
console.log('Example 3 - Калькулятор');

// Створіть обʼєкт calculator з трьома методами:
// read(a, b) - приймає два значення та зберігає їх як властивості обʼєкта
// add() - повертає суму збережених значень
// mult() - перемножує збережені вначення та повертає результат

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() {
    return (this.a ?? 0) + (this.b ?? 0);
  },

  mult() {
    return (this.a ?? 1) * (this.b ?? 1);
  },
};

console.log(calculator);

calculator.read(2, 4);

console.log(calculator);
console.log(calculator.add());
console.log(calculator.mult());
console.log('\n');
console.log('\n');
