function Todo(props) {
  return (
    <div className="todo">
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={props.onChange}
      />
      <p className="todo-text">
        {props.content}
      </p>
    </div>
  );
}

export default Todo;