import React, { useState } from "react";

const Form = ({ newTask, setNewTask, taskList, setTaskList }) => {
  const onChangeFn = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    newTask[name] = value;
    setNewTask(newTask);
  };

  const onFormSubmit = () => {
       newTask['id'] = Date.now();
       taskList.push(newTask);
       setTaskList(taskList);
       console.log("taskList", taskList);
       setNewTask({});
  }

  return (
    <div>
      <input
        name="taskName"
        placeholder="enter task name"
        type="text"
        style={{ marginBottom: "10px", marginTop: "10px" }}
        onChange={onChangeFn}
      />
      <br />
      <input
        name="startDate"
        type="date"
        style={{ marginBottom: "10px" }}
        onChange={onChangeFn}
      />
      <input
        name="endDateDate"
        type="date"
        style={{ marginBottom: "10px" }}
        onChange={onChangeFn}
      />
      <br />
      <input
        name="description"
        placeholder="enter task description"
        type="text"
        style={{ marginBottom: "10px" }}
        onChange={onChangeFn}
      />
      <br />
      <button onClick={onFormSubmit}>Submit</button>
    </div>
  );
};

export default Form;
