// Корзина товарів
console.log('Корзина товарів');
console.log('\n');

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
      total: product.price,
    };

    items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (name === productName) {
        console.log(`Продукт ${productName} знайдено!`);

        items.splice(i, 1);

        console.log(`Продукт ${productName} видалено!`);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;

    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }

    return totalPrice;
  },

  increaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
      }
    }
  },

  decreaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
      }
    }
  },
};

// Порожня корзина
console.log('Порожня корзина!');
console.log(cart.getItems());
console.log(`Загальна вартість товарів ${cart.countTotalPrice()} грн.`);
console.log('\n');

// Додавання товарів до корзини
console.log('Додано товари!');
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 80 });
cart.add({ name: 'melone', price: 60 });
cart.add({ name: 'watermelone', price: 100 });
cart.add({ name: 'grape', price: 70 });
cart.add({ name: 'strawberry', price: 90 });

console.table(cart.getItems());
console.log(`Загальна вартість товарів ${cart.countTotalPrice()} грн.`);
console.log('\n');

// Видалення товарів з корзини
console.log('Видалено товар(и)!');

cart.remove('melone');

console.table(cart.getItems());
console.log(`Загальна вартість товарів ${cart.countTotalPrice()} грн.`);
console.log('\n');

// Збільшення кількості товару
console.log('Збільшення кількості товару!');
cart.increaseQuantity('apple');
cart.increaseQuantity('lemon');
cart.increaseQuantity('watermelone');
cart.increaseQuantity('grape');
cart.increaseQuantity('strawberry');

console.table(cart.getItems());
console.log(`Загальна вартість товарів ${cart.countTotalPrice()} грн.`);
console.log('\n');

// Зменшення кількості товару
console.log('Зменшення кількості товару!');

cart.decreaseQuantity('apple');

console.table(cart.getItems());
console.log(`Загальна вартість товарів ${cart.countTotalPrice()} грн.`);
console.log('\n');

// Очищення корзини
console.log('Очищення корзини!');

cart.clear();

console.log(cart.getItems());
console.log(`Загальна вартість товарів ${cart.countTotalPrice()} грн.`);
