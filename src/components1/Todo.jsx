import React, { useState } from "react";
import Style from "../App.module.css";

function Todo({ todo, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.item);

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSaveEdit = () => {
    handleEdit(todo.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className={Style.todoItem}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={handleEditChange}
            className={Style.editInput}
          />
          <button className={Style.saveButton} onClick={handleSaveEdit}>
            Save
          </button>
          <button
            className={Style.cancelButton}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className={todo.completed ? Style.completed : ""}>
            {todo.item}
          </span>
          <div>
            <button
              className={Style.editButton}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className={Style.deleteButton}
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
