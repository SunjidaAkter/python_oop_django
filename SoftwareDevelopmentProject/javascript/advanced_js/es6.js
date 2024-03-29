//* ES6 stands for ECMAScript 6.
//* ECMAScript was created to standardize JavaScript,
//* and ES6 is the 6th version of ECMAScript,
//* it was published in 2015, and is also known as ECMAScript 2015.



//* var in js is functional scope
//* let and const in js are block scope




//* template string
let name = "sun"
const message = `hello ${name}`;



//* spread operator
const num = [1, 2, 3, 4, 5];
console.log(num);//[1, 2, 3, 4, 5]
console.log(...num);// 1 2 3 4 5
const newMessage = ['hello', 'world', ...num];
console.log(newMessage);//[ 'hello', 'world', 1, 2, 3, 4, 5 ]
console.log(...newMessage);//hello world 1 2 3 4 5
console.log(Math.max(...num));// 5



//* arrow functions
const test = () => 2 * 2;
const test1 = () => {
    return 2 * 2;
}
console.log(test());
console.log(test1());



//* destructuring
//* array destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second] = numbers;
console.log(first, second);
//* object destructuring
const obj = {
    name: "sun",
    age: 20,
    city: "Bangalore",
    country: "India"
}
const { age } = obj;
console.log(age);



//* map
const num1 = [2, 2, 8, 7]
const square = num1.map(x => x * x);
console.log(square);//return array 
//[ 4, 4, 64, 49 ]



//* filter
const products = [
    { id: 1, name: "apple", price: 500, color: "orange" },
    { id: 2, name: "xiaomi", price: 100, color: "black" },
    { id: 3, name: "samsung", price: 343, color: "black" },
    { id: 4, name: "lenovo", price: 454, color: "blue" },
    { id: 5, name: "huawei", price: 234, color: "red" }
]
const res = products.filter(prod => prod.color == "black");
console.log(res);//return array
// [
//     { id: 2, name: 'xiaomi', price: 100, color: 'black' },
//     { id: 3, name: 'samsung', price: 343, color: 'black' }
// ]



//* find
const res2 = products.find(prod => prod.color == "black");
console.log(res2);//return array's single element
// { id: 2, name: 'xiaomi', price: 100, color: 'black' }



//* forEach
const productContainer = document.getElementById('product-container');
const res3 = products.forEach(prod => {
    const h1 = document.createElement("h1");
    h1.innerText = prod.name;
    productContainer.appendChild(h1);
})