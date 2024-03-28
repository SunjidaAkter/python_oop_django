const num1 = "100";
const num2 = 100;

console.log(num1 + num2); //type cast to string
console.log(parseInt(num1) + num2); //avoiding type casting
console.log(num1 * num2); //no type casting

let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);