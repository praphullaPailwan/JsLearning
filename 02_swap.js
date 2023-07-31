// 2. Without using third variable 
let num1 = 10; // 30
let num2 = 20; // 10
console.log(num1, num2);
num1 = num1 + num2; // 10 + 20 = 30
num2 = num1 - num2; // 10
num1 = num1 - num2;
console.log(num1, num2);
