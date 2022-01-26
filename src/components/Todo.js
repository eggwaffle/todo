import { useState } from "react";

function Todo(props) {
  const [checked, setChecked] = useState(props.completed);
  let completed = ``;
  if (props.completed) {
    completed = `completed`
  } else {
    completed = ``;
  }

  return (
    <div className="todo-container">
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
      <button
        className={`delete-todo ${props.isHidden ? "hidden" : null}`}
        onClick={() => props.handleDelete(props.id)}
      >
        <span className="material-icons">
          delete_outline
        </span>
      </button>
    </div>
  );
}

export default Todo;