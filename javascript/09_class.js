// const btn = document.getElementById("btn");

// btn.style.backgroundColor = 'red';
// btn.style.fontSize = '20px';

// // const tasksection = document.querySelector('#taskList');

// btn.addEventListener('click', function () {
//      // const newElement = document.createElement('div');
//      // newElement.innerText = "New Div";
//      // document.body.appendChild(newElement);

//      const newTask = document.createElement('li');
//      const inputVal = document.getElementsByClassName("inputField")[0].value;
//      newTask.innerText = inputVal;
//      tasksection.append(inputVal);
// });

// const inputField = document.getElementsByClassName("inputField");
// inputField[0].addEventListener('input', function () {
//      const showText = document.getElementById("showText");
//      showText.innerText = inputField[0].value;
// });

// let arr = [100, 20, 30, 44, 9, 1];

// for(let i=0;i<arr.length;i++){
//      setTimeout(() => {
//           console.log(arr[i]);
//      }, arr[i]);
// }

// CRUD - (Create, Read, Update, Delete)
let tasks = [{name: "First Task", id: 1}, {name: "Second Task", id: 2}];

// create
tasks.push({name: "Third Task", id: 10});

// delete
tasks = tasks.filter(task => task.id === 2);
console.log(tasks);

// update
tasks = tasks.map(task => {
     if(task.id === 10){
          task.name = "Tenth Task";
     }
});



const newTask = {name: 'Sourav', title: 'Roy'}
newTask['name'] = "Usha";
console.log(newTask);