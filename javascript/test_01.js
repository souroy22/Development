
// **********************   Donot execute the code.   ***********************
/*
Q1) Write the Output
var a = 10;

console.log(a); // 10

function task(){
     var a = 10;
     console.log(a); // 10
     
     if(true){
          var a = 30;
          console.log(a); //30
     }

     console.log(a); // 30
}

task();

console.log(a); //10
*/

/* 
Q2) Guess the output.

var fn = function (a){
     var a = 10;
     console.log(a);
}

fn();
*/


/* 
Q3) Guess the output.

console.log(fn); // undefined
fn()
var fn = function (a){
     console.log(b);
     var b = a + 2;
}
*/


/*
Q4) Guess the output.

let a = 10;
const arr1 = [1, 3, 10, 23, 4];
let arr2 = [5, 9, 1, 22, 7];
arr1[2] = a;
arr2[1] = a;

console.log(arr1);
console.log(arr2);
*/

/*
Q5) You are provided a string and an array of products. You have to find out that any value of that array contains the string or not.
Example: 
Input: str: "lap", products: ["computer", "mobile", "guiter", "book", "laptop", "flower"]
Output: Yes present

Input: str: "memory", products: ["computer", "mobile", "guiter", "book", "laptop", "flower"]
Output: Sorry no such product found!

*/


let products = ["computer", "mobile", "guiter", "book", "laptop", "flower"];
let str = "lap";
let t = false;
for(let i=0;i<products.length;i++){
     let temp = products[i].includes(str);
     if(temp){
          t = true;
          console.log("Yes");
          break;
     }
}

if(!t){
     console.log("No");
}


// console.log(str2.includes(str));
