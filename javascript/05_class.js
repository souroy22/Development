
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
newObj.newobj();
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
          console.log(this.c === printThis);
     }
}

function printThis(){
     console.log(this);
}

obj.d();

*/