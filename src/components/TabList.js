import { useState } from 'react';
import Tab from './Tab';

function TabList() {
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <section className="tab-list">
      <Tab
        content = "All"
        currentTab = {currentTab}
        onClick = {() => setCurrentTab((prev) => prev = "All")}
      />
      <Tab
        content = "Active"
        currentTab = {currentTab}
        onClick = {() => setCurrentTab((prev) => prev = "Active")}
      />
      <Tab
        content = "Completed"
        currentTab = {currentTab}
        onClick = {() => setCurrentTab((prev) => prev = "Completed")}
      />
    </section>
  );
}

export default TabList;