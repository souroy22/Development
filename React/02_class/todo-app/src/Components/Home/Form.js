import React, { useState, useEffect } from "react";

const Form = ({
  newTask,
  setNewTask,
  taskList,
  setTaskList,
  shouldUpdate,
  setUpdateTaskIndx,
  setShouldUpdate,
  updateTaskIndx
}) => {
  const onChangeFn = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    newTask[name] = value;
    setNewTask(newTask);
  };

  const onFormSubmit = () => {
    if (shouldUpdate) {
      let taskName = document.getElementsByName("taskName")[0].value;
      let startDate = document.getElementsByName("startDate")[0].value;
      let endDate = document.getElementsByName("endDate")[0].value;
      let description = document.getElementsByName("description")[1].value;
      const id = taskList[updateTaskIndx].id;
      const newTaskList = taskList;
      newTaskList[updateTaskIndx] = {taskName, startDate, endDate, description, id};
      setTaskList(newTaskList);
      setShouldUpdate(false);
    } else {
      newTask["id"] = Date.now();
      taskList.push(newTask);
      setTaskList(taskList);
      setNewTask({});
    }
    clearForm();
  };

  const clearForm = () => {
    document.getElementsByName("taskName")[0].value = "";
    document.getElementsByName("startDate")[0].value = "";
    document.getElementsByName("endDate")[0].value = "";
    document.getElementsByName("description")[1].value = "";
  };

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
        name="endDate"
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
      <button onClick={onFormSubmit}>
        {shouldUpdate ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default Form;
