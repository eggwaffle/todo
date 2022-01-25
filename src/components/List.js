import Todo from "./Todo";

function List(props) {
  let currentList;
  let isHidden;
  switch (props.currentTab) {
    case "Active":
      currentList = props.todoList.filter ((todo) => todo.completed === false)
      isHidden = true
      break;
    case "Completed":
      currentList = props.todoList.filter ((todo) => todo.completed === true)
      isHidden = false
      break;
    default:
      currentList = props.todoList
      isHidden = true
      break;
  }
  const list = currentList.map ((todo) =>
    <Todo
      key={todo.id}
      id={todo.id}
      content={todo.content}
      completed={todo.completed}
      onChange={props.handlechange}
      isHidden={isHidden}
    />
  )

  return (
    <div className="list">
      {list}
    </div>
  );
}

export default List;