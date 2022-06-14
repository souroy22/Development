// rafce
import React, { useState } from "react";
import TaskList from "../Task/TaskList";
import Form from "./Form";

const Home = () => {
  const [newTask, setNewTask] = useState({taskName: '', startDate: '', endDate: '', description: ''});
  const [taskList, setTaskList] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const [updateTaskID, setUpdateTaskID] = useState('');

  const onUpdate = (task) => {
    const id = taskList.filter(ele => ele.id === task.id);
    setUpdateTaskID(id);
    setShouldUpdate(true);
    document.getElementsByName('taskName')[0].value = task.taskName;
    document.getElementsByName('startDate')[0].value = task.startDate;
    document.getElementsByName('endDate')[0].value = task.endDate;
    document.getElementsByName('description')[1].value = task.description;
  }

  return (
    <div>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        taskList={taskList}
        setTaskList={setTaskList}
        shouldUpdate={shouldUpdate}
        onUpdate={onUpdate}
        setUpdateTaskID={setUpdateTaskID}
        updateTaskID={updateTaskID}
      />
      <TaskList taskList={taskList} setTaskList={setTaskList} onUpdate={onUpdate} shouldUpdate={shouldUpdate} />
    </div>
  );
};

export default Home;
