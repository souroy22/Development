// ================================= Clouser ======================================
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
