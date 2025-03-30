'use strict'

function isEnoughCapacity(products, containerSize) {
// создаємо змінну на загальну кількість продуктів
  let totalProducts = 0;

// Запускаємо цикл для перетворення обьека в масив значень властивостей
  for (const quantity of Object.values(products)) {

// додаємо нові значеення до загального числа
    totalProducts += quantity;
  }
  
//повертаємо результат перевірки кількіст товарів які помістятся в контейнері
  return totalProducts <= containerSize;
}

// перевіряємо код
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
