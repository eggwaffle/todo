import { useState } from "react";
import Bar from './Bar';
import List from './List';
import TabList from './TabList';

function Main() {
  /*
  useEffect(() => {
    localStorage.setItem('todos', [])
  }, []);
  const [todoList, setTodoList] = useState(localStorage.getItem('todos'));
  */

  const [todoList, setTodoList] = useState([]);
  const arr =todoList;

  function addTodo(newElement) {
    arr.push(newElement);
    setTodoList(arr => [...arr])
    //localStorage.setItem('todos', todoList)
  }

  const handlechange = (id, completed) => {
    console.log(todoList.find(element => element.id === id))
    completed = !(completed)
    arr.map(element => {
      if (element.id === id) {
        element.completed = completed;
      }
      return element;
    })
    setTodoList(arr => [...arr])
    console.log(todoList.find(element => element.id === id))
    return completed
  }

  return (
    <div>
      <TabList
        todoList={todoList}
      />
      <Bar
        todoList={todoList}
        setTodoList={setTodoList}
        addTodo={addTodo}
      />
      <List
        todoList={todoList}
        handlechange={handlechange}
      />
    </div>
  );
}

export default Main;