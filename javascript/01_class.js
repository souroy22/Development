
// array
// string
// functions
// objects
// others main concepts
// Interview questions
// Project (HTML + CSS + JS) (2 classes)



// datatypes
// var newVar = 12;
// let newLet = undefined;
const newConst = {
     a: 13,
     b: 14
}
const arr = [1, 3, 6, 10, 9]


// valid
newConst.b = 12
arr[2] = 11;

// not valid
// newConst = {}
// arr = [1, 5, 10]

// console.log(a);  // ReferenceError: Cannot access 'a' before initialization
// let a;
// console.log(a); // undefined

/*
a = undefined
b = undefined
c = undefined
{
     fn: function () {
          console.log("Hello")
     }
}
*/

a();

function a() {
     console.log("Hello");
}

let input = [-3, -4, -1, -5, 10, 0, 4];
             j,k

// Output: [-3, -4, -5, 1, 0, 4, 10]
let swap= (arr,i,j)=> arr.map((e,k)=> k-i ? (k-j ? e : arr[i]) : arr[j]);
let j = 0;
let k = 0;
for(let i=0;i<7;i++){
     if(input[k] > 0){
          k++;
     }else if(input[k] < 0 && input[j] < 0){
          j++;
     }else if(input[k] < 0 && input[j] >= 0){
          j++;
          k++;
     }
}

console.log("Input", input);

function getMultiUserInput() {
     const res = '';
     if(res.length === 0){
          getMultiUserInput();
     }
}

// 1 month react
// 2nd month backend
// 3rd month Prject MERN
// DSA + Subjective Topics (3 months)