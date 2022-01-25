import Todo from "./Todo";

function List(props) {

  const list = props.todoList.map ((todo) =>
    <Todo
      key={todo.id}
      id={todo.id}
      content={todo.content}
      completed={todo.completed}
      onChange={props.handlechange}
    />
  )

  return (
    <div>
      {list}
    </div>
  );
}

export default List;