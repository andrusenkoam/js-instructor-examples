// Task 1
console.log('Task 1');

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має обʼєкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обєʼкти в яких айді співпав - видалити з масиву
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  { id: 'sku1', qty: 1 },
  { id: 'sku2', qty: 2 },
  { id: 'sku3', qty: 3 },
  { id: 'sku1', qty: 6 },
  { id: 'sku1', qty: 8 },
  { id: 'sku2', qty: 19 },
  { id: 'sku4', qty: 1 },
];

function sortProduct(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i].id === arr[j].id) {
        arr[i].qty += arr[j].qty;
        arr.splice(j, 1);
        j -= 1;
      }
    }
  }
}

sortProduct(products);

console.log(products);
console.log('\n');

// Task 2
console.log('Task 2');

// у кожному масиві є унікальний рядок, у якому не повторюються літери. Знайдіть і виведіть цей рядок

function findUniq(arr) {
  // for (let i = 0; i < arr.length; i += 1) {
  //   const result = arr[i].split('').every((item) => {
  //     for (let j = 0; j < arr.length; j += 1) {
  //       if (i !== j) {
  //         if (!arr[j].includes(item)) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       }
  //     }
  //   });
  //   if (result) {
  //     return arr[i];
  //   }
  // }

  // let word;
  // arr.forEach((current, i) => {
  //   const result = current
  //     .split('')
  //     .every((item) =>
  //       arr.reduce(
  //         (acc, comparison, j) =>
  //           i !== j ? (acc = comparison.includes(item) ? false : true) : false,
  //         false
  //       )
  //     );
  //   if (result) {
  //     word = current;
  //   }
  // });
  // return word;

  return arr.find((current, i) => {
    return current
      .split('')
      .every(item =>
        arr.reduce(
          (acc, comparison, j) =>
            i !== j ? (acc = !comparison.includes(item)) : false,
          false
        )
      );
  });
}

console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));
console.log(findUniq(['fghj', 'ghfj', 'abcd', 'ghjf', 'fghj', 'fgjh', 'ghjf']));
console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']));
