
// =============================== THIS =============================
/*

1) In a method, this refers to the owner of the object;
let obj = {
     a: {
          c: 12,
          b: function (){
               console.log(this); // will return object a
          }
     }
}

2) Alone this refers to the global object.

console.log(this);

3) In a function, this refers to the global object.
function fn(){
     console.log(this);
}

4) In a function,in strict mode, this is undefined;
function fn(){
     "use strict"
     console.log(this); // undefined
}

5) In a event, this refers to the element who received the event
<div>
     <button onClick={this.styel.backgroundColor = red}>
          Submit
     </button>
</div>

6) Methods like call, apply, bind can refer to this to any object.


*/

// let obj = {
//      a: "Name",
//      c: "Binding"
// }

// let k = {
//      b: "Age"
// }

// k.bind(obj);

// console.log(k.c);

// function getName(lastName, state) {
//      console.log(this.firstName + " " + lastName + " from " + state);
// }

// let obj = {
//      firstName: "Sourav",
//      lastName: "Roy"
// }
// let obj1 = {
//      firstName: "Abhi"
// }



// getName.call(obj1, "Roy", "UP");


// call back hell
// function outer(inner){ // outer function is a first class function because we pass a function into outer params
//      // call back function
//      inner();
// }

// function inner (){
//      console.log("Inner");
// }

// outer(inner);

// function fn(){
//      setTimeout(function () {
//           // address check
//           setTimeout(function (){
//                // price check
//                setTimeout(function () {
//                     // stock
//                     setTimeout(function () {
//                          // Order place
//                          setTimeout(function () {
//                               // Push notifications
//                          })
//                     })
//                })
//           })
//      }, 10000);
// }


// let promise1 = new Promise(resolve, reject)
// let promise2 = new Promise(resolve, reject)
// let promise3 = new Promise(resolve, reject)
// let promise4 = new Promise(resolve, reject)
// let promise5 = new Promise(resolve, reject)

// let isLogged = true;

// const promise1 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           if(true){
//                return Promise.resolve("Yes logged in");
//           }else{
//                return Promise.reject("No, not logged in");
//           }
//      }, 4000);
// });
// const promise2 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("Checked prices and discounts");
//      }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("Checked stock");
//      }, 3000);
// });
// const promise4 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("Order placed successfully");
//      }, 4000);
// });
// const promise5 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("Send push notification");
//      }, 5000);
// });

// Promise.all([promise1, promise2, promise3, promise4, promise5]).then((values) => {
//      console.log(values);
// });

// Promise().then(function () {
//      return Promise;
// }).then().then().then().then().catch()

// const bookOrder = async () =>  {
//      try {
//           const addressCheckRes = await callingAPI1();
//           const PriceCheckRes = await callingAPI1();
//           const StockCheckRes = await callingAPI1();
//           const bookProductCheckRes = await callingAPI1();
//           const pushNotificationCheckRes = await callingAPI1();
//      } catch (error) {
//           console.log(errror.message);
//      }
// }

// promise1.then(function (res){
//      setTimeout(() => {
//           return res;
//           if(true){
//                return Promise.resolve("Yes logged in");
//           }else{
//                return Promise.reject("No, not logged in");
//           }
//      }, 4000);
// }).catch()

// ======================================== DOM ======================================
const btn = document.getElementById("btn");
btn.addEventListener('mouseover', function () {
     btn.style.backgroundColor = 'red';
});

btn.addEventListener('mouseout', function () {
     btn.style.backgroundColor = 'black';
     btn.style.color = 'white';
});

let tableLength = 1000;
if(tableLength > 100){
     const tableRows = document.getElementsByClassName("table-row"); // 4\
     for(let i=0;i<tableRows.length;i++){
          tableRows[i].style.backgroundColor = 'green';
     }
}


