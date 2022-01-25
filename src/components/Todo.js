import { useState } from "react";

function Todo(props) {
  const [checked, setChecked] = useState(props.completed);

  return (
    <div className="todo">
      <input
        id={props.id}
        className="todo-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() =>setChecked(props.onChange(props.id, checked))}
      />
      <p className="todo-text">
        {props.content}
      </p>
    </div>
  );
}

export default Todo;