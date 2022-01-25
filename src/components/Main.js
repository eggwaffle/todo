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

    useEffect(() => {
    setFilteredList(todoList)
  }, [todoList]);

  */

  const [todoList, setTodoList] = useState([]);
  const [currentTab, setCurrentTab] = useState("All");
  const arr =todoList;

  function addTodo(newElement) {
    arr.push(newElement);
    setTodoList(arr => [...arr])
    //localStorage.setItem('todos', todoList)
  }

  function handleDelete(deleteElementId) {
    let newArr = arr;
    newArr = arr.filter (element => element.id !== deleteElementId)
    setTodoList([...newArr])
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
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        todoList={todoList}
      />
      <Bar
        todoList={todoList}
        setTodoList={setTodoList}
        addTodo={addTodo}
      />
      <List
        currentTab={currentTab}
        todoList={todoList}
        handlechange={handlechange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Main;