import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
function ListTask() {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  return (
    <div>
      {tasks.map((taskData, index) => (
        <Task taskData={taskData} index={index} key={index} />
      ))}
    </div>
  );
}

export default ListTask;
