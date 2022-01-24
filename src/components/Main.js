import { useState, useEffect } from "react";
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
  let arr =todoList;
  const newElement = {
    "id": Date.now(),
    "content": "Do coding challenges",
    "completed": false
  }
  function addTodo() {
    arr.push(newElement);
    setTodoList(arr => [...arr])
    console.log(todoList)
    //localStorage.setItem('todos', todoList)
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
      />
    </div>
  );
}

export default Main;