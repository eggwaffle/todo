import { useState, useEffect} from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify(todoList))
      console.log("new todo list")
    } else {
      let data = JSON.parse(localStorage.getItem('todos'));
      console.log(data)
      setTodoList(data);
    }
  },[]);

  return (
    <div className="App">
      <Header />
      <Main
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Footer />
    </div>
  );
}

export default App;
