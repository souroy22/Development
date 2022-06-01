// ================================= Clouser ======================================
/*

What is Clouser?
ans: Function along with its lexical scope bundle together, forms a clouser.

Now Interviewr may ask to explain what you have just said.
ans: Give this below example and explain.

function outer (b) {
     function inner(re){
          b = b + 1;
          console.log(a);
     }
     return inner;
}

const x = outer();
x();

*/


let gbl = 11;
let a = 10;
function outer (b) {
     function inner(re){
          b = b + 1;
          console.log(a);
     }
     return inner;
}

const x = outer();
function abc() {
     a++;
}
x();
abc();
x();
// 

// --------------------------------------------- TASK --------------------------------------------------
// Make a calculator using html, Javascript (No need to add any styling, very basic styling with basic functionality)
