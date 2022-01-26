import { useState } from "react";
import Bar from './Bar';
import List from './List';
import TabList from './TabList';

function Main({todoList, setTodoList}) {

  const [currentTab, setCurrentTab] = useState("All");
  const arr = todoList;

  function addTodo(newElement) {
    arr.push(newElement);
    setTodoList(arr => [...arr]);
    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  function deleteAll() {
    for (let index = arr.length; index > 0; index--) {
      const element = arr[index - 1];
      if (element.completed === true) {
        console.log(element)
        arr.splice(arr.indexOf(element), 1)
      }
    }
    setTodoList(arr => [...arr]);
    localStorage.setItem('todos', JSON.stringify(todoList));
    console.log(todoList)
  }

  function handleDelete(deleteElementId) {
    let deleteElement;
    deleteElement = arr.find (element => element.id === deleteElementId);
    arr.splice(arr.indexOf(deleteElement), 1)
    setTodoList(arr => [...arr]);
    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  function handlechange(id, completed) {
    completed = !(completed)
    arr.map(element => {
      if (element.id === id) {
        element.completed = completed;
      }
      return element;
    })
    setTodoList(arr => [...arr]);
    localStorage.setItem('todos', JSON.stringify(todoList));
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
        currentTab={currentTab}
        todoList={todoList}
        setTodoList={setTodoList}
        addTodo={addTodo}
      />
      <List
        currentTab={currentTab}
        todoList={todoList}
        handlechange={handlechange}
        handleDelete={handleDelete}
        deleteAll={deleteAll}
      />
    </div>
  );
}

export default Main;