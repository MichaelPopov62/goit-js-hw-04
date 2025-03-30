'use strict'

function calcAverageCalories(days) {

// перевіряємо умови виконання функціі
  if (days.length === 0) {
  
// якщо масив порожній повертаємо 0
  return 0;
  }

// створюємо змінну для підрахунку загального числа колорій тижня
  let totalCalories = 0;

// переберемо дні тижня і підраховуємо загальне число колорій
  for (const day of days) {

// додаємо колоріі кожного дня
  totalCalories += day.calories;
  }

// обчислюємо среднедобове споживання колорій
  const averageNumberCaloriesDay = totalCalories / days.length;
  return averageNumberCaloriesDay;

}

// тестування функціі
  console.log(
    calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
