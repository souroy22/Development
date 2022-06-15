// rafce
import React, { useState } from "react";
import TaskList from "../Task/TaskList";
import Form from "./Form";

const Home = () => {
  const [newTask, setNewTask] = useState({
    taskName: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [taskList, setTaskList] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const [updateTaskIndx, setUpdateTaskIndx] = useState("");

  const onUpdate = (task) => {
    // state m save kar rehe hai
    const indx = taskList.findIndex((ele) => ele.id === task.id);
    setUpdateTaskIndx(indx);
    setShouldUpdate(true);

    // form m value fill kar rehe hai
    document.getElementsByName("taskName")[0].value = task.taskName;
    document.getElementsByName("startDate")[0].value = task.startDate;
    document.getElementsByName("endDate")[0].value = task.endDate;
    document.getElementsByName("description")[1].value = task.description;
  };

  return (
    <div>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        taskList={taskList}
        setTaskList={setTaskList}
        shouldUpdate={shouldUpdate}
        onUpdate={onUpdate}
        setUpdateTaskIndx={setUpdateTaskIndx}
        updateTaskIndx={updateTaskIndx}
        setShouldUpdate={setShouldUpdate}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        onUpdate={onUpdate}
        shouldUpdate={shouldUpdate}
      />
    </div>
  );
};

export default Home;
