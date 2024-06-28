import { useState, useEffect } from "react";
import TodoAll from "./components1/TodoAll";
import Style from "./App.module.css";

function App() {
  const [task, setTask] = useState("");
  const [todoAll, setTodoAll] = useState([]);

  useEffect(() => {
    console.log({ todoAll });
  }, [todoAll]);

  function handleDelete(id) {
    const index = todoAll.findIndex((todo) => todo.id === id);
    console.log(index);

    const newList = [...todoAll];
    newList.splice(index, 1);
    setTodoAll(newList);
  }

  function handleEdit(id, editedTask) {
    const updatedList = todoAll.map((todo) => {
      if (todo.id === id) {
        return { ...todo, item: editedTask };
      }
      return todo;
    });

    setTodoAll(updatedList);
  }

  function addTask(e) {
    e.preventDefault();
    const todo = {
      id: todoAll.length + 1,
      item: task,
      completed: false,
    };

    setTodoAll([...todoAll, todo]);
    setTask("");
  }

  return (
    <>
      <div className={Style.app}>
        <form action="" className={Style.div} onSubmit={addTask}>
          <input
            className={Style.input}
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task here"
          />
          <div></div>
          <button className={Style.button} disabled={!task}>
            Add Task
          </button>
        </form>
        <TodoAll
          items={todoAll}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
