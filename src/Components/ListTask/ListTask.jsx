import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function ListTask() {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  useEffect(() => setFilter(tasks), [tasks]);

  const [Filter, setFilter] = useState(tasks);
  const showAreDoneClick = () => {
    setFilter(tasks.filter((task) => task.isDone === true));
  };
  const showUndoneClick = () => {
    setFilter(tasks.filter((task) => task.isDone === false));
  };
  const showAllClick = () => {
    setFilter([...tasks]);
  };

  return (
    <div>
      <Button variant="outline-info" onClick={showAreDoneClick}>
        Done
      </Button>
      <Button variant="outline-info" onClick={showAllClick}>
        ALL
      </Button>
      <Button variant="outline-info" onClick={showUndoneClick}>
        NotDone
      </Button>
      {Filter.map((taskData, index) => (
        <Task taskData={taskData} index={index} key={index} />
      ))}
    </div>
  );
}

export default ListTask;
