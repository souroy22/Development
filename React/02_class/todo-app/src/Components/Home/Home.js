// rafce
import React, { useState } from "react";
import TaskList from "../Task/TaskList";
import Form from "./Form";

const Home = () => {
  const [newTask, setNewTask] = useState({});
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default Home;
