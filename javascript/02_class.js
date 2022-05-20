// variable
// name, email, password
var vari = "dkdkkd";
// let name = "Usha";
// let email = "usha@yahoo.com";
// let password = "123456789";
// let phone = 737383;
// var newvar = "wicinwc";


// console.log(newvar);
// if(true){
//      var newvar1 = "kdkkdkd";
     
//      if(true){
     //           var abc = "jdjjd";
     //      }
     // }
// console.log("newvar1", newvar1);


// memory stack
// vari: "dkdkkd"
// name: "Usha"
// newvar: "wicinwc"

// let n = null;
// let n1 = undefined;
// console.log(typeof n);
// console.log(typeof n1);
// let var2 = 2772;
// let var1 = BigInt(10000000000000000000000000000000000000000000000000000000000000000000000000000000000);
// var2 = BigInt(var2);
// let arr = ["Sandhya", "Sourav"]
// for(let i=0;i<arr.length;i++){
//      console.log(arr[i]);
// }

// 

// let username = "usha12"
// let password = "usha123";
// let confirmPassword = "usha124";

// if(username && password){
//      console.log("Succesfully loggedin");
// }else{
//      console.log("password is not matching");
// }
// let abc = -1;

let obj1 = {
     name: "Sourav"
}

let obj2 = {
     name: "Sourav"
}

// console.log(obj1 === obj2);

let arr3 = ["sandhya", "sourav", "abhi", "ududi", "ddid"]

// for(let i=0;i<arr3.length;i++){
//      if(arr3[i] === 'abhi'){
//           // console.log("yes abhi is your friend");
//      }
// }

// arr3.push("diya");
let indx = 2;
// arr3 = [...arr3.slice(0, 2), "HHHHH", ...arr3.slice(2)] 

function addInRandomIndex(arr, indx, value) {
     return [...arr.slice(0, indx), value, ...arr.slice(indx)] 
}

arr3 = addInRandomIndex(arr3, indx, "ddddd");

console.log(arr3);