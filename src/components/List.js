import {useState} from 'react';
import Todo from "./Todo";

function List(props) {
  const [checked, setChecked] = useState(false);
  const handlechange = () => {
    setChecked(!checked);
  }

  const list = props.todoList.map ((todo) =>
    <Todo
      key={todo.id}
      content={todo.content}
      completed={todo.completed}
      onChange={handlechange}
    />
  )

  return (
    <div>
      {list}
    </div>
  );
}

export default List;