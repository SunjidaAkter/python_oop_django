fetch('https://fakestoreapi.com/products/1')//return a promise which need to be converted to JSON
    .then(res => res.json())//return a json converted promise
    .then(json => console.log(json))//getting data from the promise if the promise is resolved
    .catch(err => console.log(err));//getting error if there is any rejection


// //* idea of synchronous and asynchronous  
console.log(1);
console.log(2);
console.log(3);
console.log(4);
name(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

function name(x) {
    setTimeout(() => console.log(x));
}



//* promise
const getData = new Promise(function (resolve, reject) {
    return resolve(20);
});
getData.then(data => console.log(data)).catch(err => console.log(err));
const getReject = new Promise(function (resolve, reject) {
    return reject("no data found");
});
getReject.then(data => console.log(data)).catch(err => console.log(err));
// console.log(getData);



//* async function
const loadData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
loadData();