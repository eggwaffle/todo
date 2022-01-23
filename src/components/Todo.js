function Todo(props) {
  return (
    <div className="todo">
      <input
        className="todo-checkbox"
        type="checkbox"
      />
      <p className="todo-text">
        {`Do coding challenges`}
      </p>
    </div>
  );
}

export default Todo;