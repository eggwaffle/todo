import { useState } from 'react';
import TabList from './TabList';

function Main() {
  const [tab, setTab] = useState("All");
  return (
    <div>
      <TabList
        tab = {tab}
      />
    </div>
  );
}

export default Main;