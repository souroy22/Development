// Basic Javascript
// methods
// functions
// Objects
// advanced concepts
// HTML + CSS + JS


// React
// class component , functional 
// hooks
// Redux

// Projects, Task

let phone = 28282992;
const email = "sroy@yahoo.com";
const friends = ["Sachin", "Diya", "Rahul"];

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigInt = BigInt(10000000000000000000000000000000000000000000000000000000);
let val = 2882;
val = BigInt(val);
const newUser = {
     name: "",
     email: "",
     phone: "",
     password: ""
}

// car['modelNo'] = "BMW";

// friends.push("Newfriend")

if(true){
     // email = 37388383;
}

let group = null;
// undefined vs null
// console.log("Typeof", typeof group);

// Array
const arr1 = [1, 3, 7, 10, 3, 7];
// let arr2 = [].concat(arr1);
let arr2 = [...arr1];


arr1.push(13);
// console.log("arr1", arr1);
// console.log("arr2", arr2);

// arr.unshift(17);
// arr.shift();

// arr.forEach((val, indx) => console.log(val))



// console.log(arr);

// functions
// method: 1
// fn(5);
function fn(val) {
     console.log("FN -> ", val + 2);
}

// method: 2 (arrow function)
// arrowFn(6);
let arrowFn = (value) => {
     console.log(value * 2);
}
