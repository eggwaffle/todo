function Bar(props) {
  return (
    <section className="bar">
      <input
        className="bar-input"
        type="text"
        placeholder="add details"
      />
      <button
      className="bar-button"
      onClick={props.addTodo}
      >
        Add
      </button>
    </section>
  );
}

export default Bar;