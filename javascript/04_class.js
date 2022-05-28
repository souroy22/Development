
// Event loop
// (setTimeout, setInterval)

function name(params) {
     //
}

const fn = () => {

}

const isUserLoggedIn = true;

// let timer;
// timer = setTimeout(() => {
//      console.log("Hi Usha");
// }, 5000);

// if(isUserLoggedIn){
//      clearTimeout(timer);
// }


// console.log("Hello");


// setInterval
// 1000ms = 1sec
// var a = 1;
// setInterval(() => {
//      a = a + 1;
//      console.log(a);
// }, a*1000);

// let a = 1;
// setInterval(() => {
//      a = a + 1;
//      console.log(a);
// }, a*1000);

// for(let i=0;i<10;i++){
//      setTimeout(() => {
//           console.log("loggin i", i);
//      }, i*1000);
//      // console.log("Normal loggong", i);
// }

// let a = 0;
// setInterval(() => {
//      a = a + 1;
//    console.log(a);  
// }, 1000);


// ======================================     Task     ================================================
/*
Q1) Try to find out the output
function counter(a, b){
     return {
          up() {
               a += b;
               console.log(a);
          },
          down() {
               a -= b;
               console.log(a);
          }
     }
}
let c = counter(10, 12);
c.up();
c.down();

---------------------------------------------------------

Q2) Try to find out the output

let a = true;
let b = 0;

setTimeout(() => {
     a = false;
     consloge.log(a);
}, 2000);

while(a) {
     if(a === false){
          break;
     }
     console.log(b++);
}

Q3) Find out the output

let obj1 = {a: 10, b: 11}

let obj2 = Object.create(obj1);

console.log(obj2); // {a: 10, b: 11}
console.log(obj1); 

obj2.a++;
obj1.a = 44;

console.log(obj2.a);

*/


// function counter(a, b){
//      return {
//           up() {
//                a += b;
//                console.log(a);
//           },
//           down() {
//                a -= b;
//                console.log(a);
//           }
//      }
// }

// a();

// let c = counter(1, 2); // a = 3, b =2
// c.up();
// c.down();

// let obj1 = {a: 10, b: 11};

// let obj2 = Object.create(obj1);

// console.log(obj2.a); // {a: 10, b: 11}
// console.log(obj1); 

// obj2.a++;
// obj1.a = 44;

// console.log(obj2.a); // 11

// console.log("Start");


// a= 10
// setTimeout(function abc() {
//      console.log("Timeout");
// }, 2000);
// setTimeout(function abc() {
//      console.log("Timeout");
// }, 2000);
// setTimeout(function abc() {
//      console.log("Timeout");
// }, 2000);

// function name(params) {
//      console.log("Function");
//      console.log("Function");
//      console.log("Function");
//      console.log("Function");
//      console.log("Function");
//      console.log("Function");
//      console.log("Function");
// }

// name();

// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");
// console.log("End");

let a = 1;
let b = true;

setTimeout(() => {
     b = false;
     clearInterval(id);
}, 2000);

let id = setInterval(() => {
     if(b){
          console.log(a++);
     }
}, 200);




