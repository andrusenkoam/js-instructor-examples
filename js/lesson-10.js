// Занняття 10. Класи
console.log('Занняття 10. Класи');

// Example 1 - Блогер
console.log('Example 1 - Блогер');

// Напиши клас Blogger для створення обʼєкта блогера з наступними властивостями:
// email - пошта, рядок
// age - вік, число
// numberofPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - обʼєкт налаштувань з однойменними властивостями

// Додай метод getInfo(), який, повертає рядок: User ${пошта) is ${вік) years old and has $(кількість постів) posts
// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві

class Bloger {
  constructor({ name, age, numberofPosts, topics } = {}) {
    this.email = name;
    this.age = age;
    this.numberofPosts = numberofPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberofPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberofPosts += value;
  }
}

const mango = new Bloger({
  name: 'mango@mail.com',
  age: 24,
  numberofPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango.getInfo());
mango.updatePostCount(8);
console.log(mango.getInfo());

const poly = new Bloger({
  name: 'poly@mail.com',
  age: 19,
  numberofPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});

console.log(poly.getInfo());
poly.updatePostCount(3);
console.log(poly.getInfo());
console.log('\n');

// Example 2 - Сховище
console.log('Example 2 - Сховище');

// Напиши клас Storage- який створює обʼєкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items
// Додай методи класу:
// getItems () - повертає масив товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
      console.log(`Товар ${item} додано!`);
      return;
    }

    console.log(`Товар ${item} вже є на складі!`);
  }

  removeItem(item) {
    const idx = this.items.indexOf(item);

    if (!!~idx) {
      this.items.splice(idx, 1);
      console.log(`Товар ${item} видалено!`);
      return;
    }

    console.log(`Товар ${item} не знайдено!`);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
const items = storage.getItems();

console.log(items);

storage.addItem('🍋');
storage.addItem('🍓');
storage.addItem('🍌');

console.log(items);

storage.removeItem('🍇');
storage.removeItem('🍐');

console.log(items);
console.log('\n');

// Example 3 - User
console.log('Example 3 - User');

// Напиши клас User який створює обʼєкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email

class User {
  #login;
  #email;

  constructor({ login, email } = {}) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    if (this.#login !== newLogin) {
      this.#login = newLogin;
    }
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (this.#email !== newEmail) {
      this.#email = newEmail;
    }
  }
}

const ajax = new User({ login: 'Ajax', email: 'ajax@mail.com' });

console.log(ajax.login);
console.log(ajax.email);

ajax.login = 'Ajax';
ajax.login = 'superAjax';
ajax.email = 'ajax@gmail.com';

console.log(ajax.login);
console.log(ajax.email);
console.log('\n');

// Example 4 - Нотатки
console.log('Example 4 - Нотатки');

// Напиши клас Notes який керує колекцією нотаток у властивості notes. Замітка це обʼєкт із властивостями text та prionity. Додай класу статичну властивість Priority, у якому зберігатиметься обʼєкт із пріоритетами
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) тa updatePriority (text, newPriority)

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(notes) {
    this.items = notes;
  }

  addNote(note) {
    const inArr = this.items.some(({ text }) => text === note.text);
    if (!inArr) {
      this.items.push(note);
      return;
    }

    console.log(`Нотатка "${note.text}" - вже є у списку!`);
  }

  removeNote(text) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);

    if (!!~idx) {
      this.items.splice(idx, 1);
    }
  }

  updatePriority(text, newPriority) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);

    if (!!~idx) {
      this.items[idx].priority = newPriority;
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
myNotes.addNote({ text: 'Моя друга замітка', priority: Notes.Priority.HIGH });
myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
myNotes.addNote({ text: 'Моя третя замітка', priority: Notes.Priority.NORMAL });

console.table(myNotes.items);

myNotes.removeNote('Моя третя замітка');

console.table(myNotes.items);

myNotes.updatePriority('Моя перша замітка', Notes.Priority.NORMAL);
console.table(myNotes.items);
