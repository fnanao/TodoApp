import { useEffect } from "react";
import Todo from "./todo";
import Style from "../App.module.css";

function TodoAll(props) {
  useEffect(() => {
    return () => {
      console.log("we got it", props);
    };
  }, [props]);

  return (
    <div className={Style.main}>
      {props.items.map((eachitem) => (
        <Todo
          todo={eachitem}
          key={eachitem.id}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
        />
      ))}
    </div>
  );
}

export default TodoAll;
