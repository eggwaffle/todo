import Todo from "./Todo";

function List(props) {
  let currentList;
  let isHidden;
  switch (props.currentTab) {
    case "Active":
      currentList = props.todoList.filter ((todo) => todo.completed === false);
      isHidden = true;
      break;
    case "Completed":
      currentList = props.todoList.filter ((todo) => todo.completed === true);
      (currentList.length > 0) ? isHidden = false : isHidden = true;
      break;
    default:
      currentList = props.todoList;
      isHidden = true;
      break;
  }
  const list = currentList.map ((todo) =>
    <Todo
      key={todo.id}
      id={todo.id}
      content={todo.content}
      completed={todo.completed}
      onChange={props.handlechange}
      handleDelete={props.handleDelete}
      isHidden={isHidden}
    />
  )

  return (
    <div className="list">
      {currentList.length > 0 ? list : null}
      <div className={`delete-all-container ${isHidden ? "hidden" : "flex"}`}>
        <button
          className="delete-all"
          onClick={props.deleteAll}
        >
          <span className="material-icons">
            delete_outline
          </span>
          delete all
        </button>
      </div>
    </div>
  );
}

export default List;