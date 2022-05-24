// hoisting (70%)
// console.log(vari); // undefined
// var vari = 12;

// fn(5); // 5

// function fn(params) {
//      console.log(params);
// }

// fn();// not hoisted

// var fn = () => {
//      console.log("djjdjkd");
// }


// function outer(a, b) {
//      if(a > b)
//           return function inner() {
//                console.log(a + b);
//           }
// }

// let a = outer(5, 3)();


// setInterval(() => {
//      console.log("HI");
// }, 2);

// function outer(inner, val) { // 5
//      if(val === 0){
//           return inner();
//      }else{
//           return outer(inner, --val);
//      }
// }

// outer(function () {
//      console.log("Hello");
// }, 5);


// lexical scope
// function parent(a, b) {
//      let money = 50;
//      function child() {
//           var phone = "IPhone";
//           console.log(a);
//      }
//      child();
// }

// parent(4, 5)

// block scope vs function scope
// if(true){
//      var uss = "jdjjkd";
// }
// function parent(a, b) {
//      var money = 50;
// }

// const arrfn = () => {

// }

// const vari = 1010;

// function fn(a=true) {
//      // code
//      if(a){
//           console.log();
//      }else{
//           console.log();
//      }
// }

// fn(false);


// callback function


// function Promise(resolve, reject){
//      // api call
//      const res = ["jsdjks", 'jsjjs'];
//      if(res.length){
//           resolve();
//      }else{
//           reject();
//      }
// }

// Promise(() => console.log("Data saved in db"), () => console.log("Error aya"));


let i = 0;
// setInterval(() => {
//      function inner() {
//           console.log(arr[i++]);
//      }
//      inner();
// }, 5);

// map vs filter vs forEach vs reduce


// map returns a new array with modified value
// const arr1 = arr.map(val => val+2);

// console.log(arr);
// console.log(arr1);


// filter also returns a new array with filtered value
// const arr2 = arr.filter((val, i) => val < 0);

// console.log(arr2);

// not returning
let value = 0;
// arr.forEach(val => );
// console.log(value);


// sum of an array
const arr = [1, 3, 6, -10, 14, -4]
const sum = arr.reduce((pre, curr) => curr + pre, 0);

// console.log(sum);

const findelement = arr.findIndex(value => value > 5);

console.log(findelement);





