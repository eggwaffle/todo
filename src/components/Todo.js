function Todo(props) {
  return (
    <div className="todo">
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={props.setChecked}
        onClick={() => console.log(props.checked)}
      />
      <p className="todo-text">
        {props.content}
      </p>
    </div>
  );
}

export default Todo;