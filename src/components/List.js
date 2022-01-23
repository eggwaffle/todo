import { useEffect, useState } from "react";
import Todo from "./Todo";

function List(props) {
  const [checked, setChecked] = useState(props.completed);

  const todoList = props.todoList.map ((todo) =>
    <Todo
      key={todo.id}
      content={todo.content}
      completed={todo.completed}
      checked={checked}
      setChecked={setChecked}
    />
  )
  return (
    <div>
      {todoList}
    </div>
  );
}

export default List;