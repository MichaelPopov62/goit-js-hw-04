'use strict'

// оголошена змінна профіля
const profile = {
  username: "Jacob",
  playTime: 300,

// метод для зміни імені профіля
  changeUsername(newName) {

// змінюю значення властивості username    
  this.username = newName;
  },

// метод для оновлення ігрового часу 
  updatePlayTime(hours) {

//  перевіряємо щоб передані данні були числами і більше за 0.
// return пишемо після console.error щоб було відображення
    
  if (typeof hours !== 'number' || hours < 0) {
  console.error("Значення повинно бути числом, більшим за 0.");
  return;
    }

// додаємо додані часи до загального часу   
  this.playTime += hours;
  },

// метод для інформаціі про профіль
  getInfo(){
  return `${this.username} has ${this.playTime} active hours!`;
}
 };

// перевіряємо роботу кода 

  console.log(profile.getInfo()); // "Jacob has 300 active hours!"

  profile.changeUsername("Marco");
  console.log(profile.getInfo()); // "Marco has 300 active hours!"

  profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Marco has 320 active hours!"
  
// додаємо додаткові визови 

  profile.updatePlayTime(-10);// Виведе " значення повинно бути числом більше за 0."

  profile.updatePlayTime("cdv");// Виведе " значення повинно бути числом більше за 0."


