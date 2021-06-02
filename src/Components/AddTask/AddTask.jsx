import React, { useState } from "react";
import "./AddTask.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
function AddTask() {
  const [newTask, setnewTask] = useState("");
  const handleTask = (e) => {
    setnewTask(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addTask({ description: newTask }));
    setnewTask("");
  };
  return (
    <div>
      <h1>ToDo App !</h1>
      <div className="inputArea">
        <Form.Control
          type="text"
          value={newTask}
          placeholder="Todo Add..."
          onChange={handleTask}
        />

        <Button variant="info" onClick={handleSubmit}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddTask;
