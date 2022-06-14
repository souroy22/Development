import React, {useState} from "react";
import Task from "./Task";

const TaskList = ({ taskList, setTaskList, onUpdate, shouldUpdate }) => {

  

  const onDelete = (id) => {
    let temp = taskList;
    temp = temp.filter(task => task.id !== id);
    setTaskList(temp);
  }

  return (
    <div>
      {taskList.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
          shouldUpdate={shouldUpdate}
        />
      ))}

      {/* {
        for(let i=0;i<taskList.length;i++){
          retrun <Task
          taskName={taskList[i].taskName}
          startDate={taskList[i].startDate}
          endDate={taskList[i].endDate}
          description={taskList[i].description}
        />
        } */}
      
    </div>
  );
};

export default TaskList;
