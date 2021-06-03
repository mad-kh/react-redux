import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./Task.css";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/actions";
import { toggle } from "../../redux/actions";
function Task({ taskData, index }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(taskData.description);

  const handleEdit = (e) => {
    setEdit(e.target.value);
  };
  const dispatch = useDispatch();
  const handleTask = () => {
    dispatch(editTask({ id: taskData.id, description: edit }));
    handleClose();
  };
  const toggleTask = () => {
    dispatch(toggle({ id: taskData.id }));
  };
  return (
    <div className="task">
      <h4 style={{ textDecoration: taskData.isDone ? "line-through" : "none" }}>
        <span>Task {index + 1}:</span>
        {taskData.description}
      </h4>
      <Button
        variant={taskData.isDone ? "danger" : "success"}
        onClick={toggleTask}
      >
        {taskData.isDone ? "unDo" : "Done"}
      </Button>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form.Control
          type="text"
          placeholder="Todo Add..."
          onChange={handleEdit}
          defaultValue={taskData.description}
        />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleTask}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Task;
