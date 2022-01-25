import { useState } from "react";

function Todo(props) {
  const [checked, setChecked] = useState(props.completed);
  let completed = ``;
  let hidden = ``;
  if (props.completed) {
    completed = `completed`
    hidden = ``
  } else {
    completed = ``;
    hidden = `hidden`;
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
        className={`delete-todo ${hidden}`}
        onClick={() => console.log("delete")}
      >
        <span className="material-icons delete">
          delete_outline
        </span>
      </button>
    </div>
  );
}

export default Todo;