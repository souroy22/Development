
// ------------------------------------- EVENT LOOP ---------------------------------------

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

// let a = 1;
// let b = true;

// setTimeout(() => {
//      b = false;
//      clearInterval(id);
// }, 2000);

// let id = setInterval(() => {
//      if(b){
//           console.log(a++);
//      }
// }, 200);

// ------------------------------- FETCH -----------------------------------------

// fetch('http://google.com').then(function (req, res) {
//      console.log(res);
// }).catch(function (err) {
//      console.log(err);
// });


// ---------------------------------  THIS ------------------------------------------
// console.log(this);

// "use strict"

// function abc (){
//      console.log(this);
// }

let obj = {
     a: 10, 
     b: "Class",
     c: function () {
          // console.log(this);
          return {
               newobj: function () {
                    console.log(this);
               }
          }
     }
}

let newObj = obj.c();
// newObj.newobj();
// console.log(obj.a);


// ======================================== TASK ===============================================

/*
Q1) Guess the output
let obj = {
     a: 1,
     b: 9,
     c: printThis
}

function printThis(){
     console.log(this);
}

let x = obj.c;
x();

Q2) Guess the output
let obj = {
     a: 1,
     b: 9,
     c: printThis,
     d: function() {
          printThis();
     }
}

function printThis(){
     console.log(this);
}

let x = obj.d;
x();

Q3) Guess the output
let obj = {
     a: 1,
     b: 9,
     c: printThis
}

function printThis(){
     console.log(this);
}

let x = obj.c;
console.log(x === printThis);

Q4) Guess the output
let obj = {
     a: 1,
     b: 9,
     c: printThis,
     d: function() {
          this.c();
          printThis();
          console.log(this.c == printThis);
     }
}

function printThis(){
     console.log(this);
}

obj.d();

Q5) Find out the output and explain why

function eventLoopFn() {
     let a = 10;
     setTimeout(() => {
          console.log(a);
     });
     a++;
}

Q6) Print 1, 2, 3, 4, 5 by modifying the code without using let

function abc() {
     for(var i=1;i<=5;i++){
          setTimeout(function () {
               console.log(i);
          }, i * 1000);
     }
}

abc();

Q7) Remove the falsy values from an array (Read truthy and falsy concepts in JS) (Also read about Boolean function in JS)
Example:
Input: [1, "Hello", true, false, "OK", NaN, 0, 44, undefined, "Friend", "", null, "apple"];
Output: [1, "Hello", true, "OK", 44, "Friend", "apple"]

Q8) Guess the output
console.log(!!true);
console.log(!!"Hello");
console.log(!!false);

Q9) Flatten the array with using JS in-build method (you may use google)
Example:
// single level
Input: ["Hello", [1, "Hi"], 100, [200, 22], 33, true, [false, NaN], undefined]
Output: ["Hello", 1, "Hi", 100, 200, 22, 33, true, false, NaN, undefined]

// multi level
Input: ["Hello", [1, "Hi"], 100, [200, 22, ["Abhi", "Harshit", ["Usha", "Sandhiya"]]], 33, true, [false, NaN], undefined]
Output: ["Hello", 1, "Hi", 100, 200, 22, 33, true, false, NaN, undefined]


Q10) Guess the output in every case

CASE:1
function outer(){
     var a = 10;
     function inner(){
          console.log(a);
     }
     return inner;
}

outer()();

CASE:2
function outer(){
     function inner(){
          console.log(a);
     }
     var a = 10;
     return inner;
}
outer()();

CASE:3
function outer(){
     function inner(){
          console.log(a);
     }
     let a = 10;
     return inner;
}
outer()();

*/

