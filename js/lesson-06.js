// Занняття 6. Обʼєкти
console.log('Занняття 6. Обʼєкти');

// Example 1 - Деструктуризація
console.log('Example 1 - Деструктуризація');

// Перепиши функцію так, щоб вона приймала один обʼєкт параметрів замість набору незалежних аргументів

/**
 * Розраховує індекс маси тіла людини
 * @param {Object} obj
 * @returns {Number} BMI
 */
function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(calcBMI({ weight: '88,3', height: '1.75' }));
console.log(calcBMI({ weight: '68,3', height: '1.65' }));
console.log(calcBMI({ weight: '118,3', height: '1.95' }));
console.log('\n');

// Example 2 - Деструктуризація
console.log('Example 2 - Деструктуризація');

// Перепиши функцію так, щоб вона приймала один обʼєкт параметрів замість набору незалежних аргументів

function printcontactsinto({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}, ${phoneList[i]}`);
  }
}

printcontactsinto({
  names: 'Jacob,William,Solomon,Artem ',
  phones: '89001234567,89001112233,890055566377,890055566300 ',
});

console.log('\n');

// Example 3 - Глибока деструктуризація
console.log('Example 3 - Глибока деструктуризація');

// Перепиши функцію так, щоб вона приймала один обʼєкт параметрів замість набору незалежних аргументів

function getBotReport({ companyName, stock: { repairBots, defenceBots } }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// console.log(getBotReport('Cyberdyne Systems', 150, 50));
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    stock: { repairBots: 150, defenceBots: 50 },
  })
);

console.log('\n');

// Example 4 - Деструктуризація
console.log('Example 4 - Деструктуризація');

// Перепиши функцію так, щоб вона приймала обʼєкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії

function getStockReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }

  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
);

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
);

console.log('\n');

// Example 5 - Операція spread
console.log('Example 5 - Операція spread');

// Доповни функцію createContact(partialContact) так, щоб вона повертала новий обʼєкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості

function createContact(partialContact) {
  return {
    id: generateId(),
    createdAt: new Date(),
    list: 'default',
    ...partialContact,
  };
}

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);

console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

console.log('\n');

// Example 6 - Операція rest
console.log('Example 6 - Операція rest');

// Напиши функцію transformUsername(user) так, щоб вона повертала новий обʼєкт із властивістю fullName, замість firstName та lastName

function transformUserName({ firstName, lastName, ...props }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...props,
  };
}

console.log(
  transformUserName({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUserName({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
console.log('\n');
console.log('\n');
