import Todo from "./Todo";

function List(props) {
  let currentList;
  switch (props.currentTab) {
    case "Active":
      currentList = props.todoList.filter ((todo) => todo.completed === false)
      break;
    case "Completed":
      currentList = props.todoList.filter ((todo) => todo.completed === true)
      break;
    default:
      currentList = props.todoList
      break;
  }
  const list = currentList.map ((todo) =>
    <Todo
      key={todo.id}
      id={todo.id}
      content={todo.content}
      completed={todo.completed}
      onChange={props.handlechange}
    />
  )

  return (
    <div className="list">
      {list}
    </div>
  );
}

export default List;