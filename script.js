'Use strict';
// ----------  Завдання 1 -------------------------------------

// class Worker{
//     constructor(firstName, secondName, rate, days) {
//         this.firstName = firstName;
//         this.secondName = secondName;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
// }

// let work1 = new Worker('Petro', 'Petriv', 20, 30);
// console.log(work1);
// console.log(work1.firstName);
// console.log(work1.secondName);
// console.log(work1.rate);
// console.log(work1.days);
// console.log(work1.getSalary());

// let work2 = new Worker('Ivan', 'Ivanov', 25, 30);

// console.log(work2.getSalary());

// let sum = work1.getSalary() + work2.getSalary();

// console.log(sum);

// -------------- Завдання 2 ----------------------------------- 

// class MyString {
//     reverse(str) {
//         return str.split("").reverse().join("");
//     }
//     ucFirst(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//     ucWords(str) {
//         let arr = str.split(" ");
//         for (const i in arr) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//         }
//         return arr.join(" ");
//     }
// }
// let str1 = new MyString();
// console.log(str1.reverse("IVAN"));
// console.log(str1.ucFirst("arsenal")); 
// console.log(str1.ucWords("arsenal arsenal arsenal"));

// ---------------- Завдання 3 ------------------------------------

// class CoffeMake{
//     on() {
//             console.log('on');
//     }
//     off() {
//             console.log('off');
//     }
// }

// class CoffeMakeDrip extends CoffeMake{
//     drip() {
//         console.log("CoffeMakeDrip");
//     }
// }
// class CoffeMakeCornish extends CoffeMake {
//     cornish() {
//         console.log("CoffeMakeCornish");
//     }
// }


