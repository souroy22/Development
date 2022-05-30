
// =============================== THIS =============================
/*

1) In a method, this refers to the owner of the object;
let obj = {
     a: {
          b: function(){
               return this; // will return object a
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
     <button onClick={console.log(this)}>
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