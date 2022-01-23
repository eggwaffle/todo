import { useState } from 'react';
import Bar from './Bar';
import List from './List';
import TabList from './TabList';

function Main() {
  const [tab, setTab] = useState("All");
  return (
    <div>
      <TabList
        tab = {tab}
      />
      <Bar />
      <List />
    </div>
  );
}

export default Main;