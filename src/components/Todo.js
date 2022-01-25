import { useState } from "react";

function Todo(props) {
  const [checked, setChecked] = useState(props.completed);
  let completed = ``;
  props.completed ? completed = `completed` : completed = ``;

  return (
    <div className="todo">
      <input
        id={props.id}
        className="todo-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() =>setChecked(props.onChange(props.id, checked))}
      />
      <p className={`todo-text ${completed}`}>
        {props.content}
      </p>
    </div>
  );
}

export default Todo;