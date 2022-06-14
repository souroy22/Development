import React from "react";

const Task = ({ task, onDelete, onUpdate }) => {

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid red",
        padding: "10px",
        margin: "10px",
        alignContent: 'space-between'
      }}
    >
    <h5>{task.taskName}</h5>
      <h5>{task.description}</h5>
      <h5>{task.startDate}</h5>
      <h5>{task.endDate}</h5>
      <button style={{backgroundColor: 'green'}} onClick={() => onUpdate(task)}>update</button>
      <button style={{backgroundColor: 'red'}} onClick={() => onDelete(task.id)}>delete</button>
    </div>
  );
};

export default Task;
