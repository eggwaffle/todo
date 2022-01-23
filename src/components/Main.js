import todoList from "../assets/data/todos.json";
import Bar from './Bar';
import List from './List';
import TabList from './TabList';

function Main() {
  return (
    <div>
      <TabList
      />
      <Bar />
      <List
        todoList={todoList}
      />
    </div>
  );
}

export default Main;