import Tab from './Tab';

function TabList(props) {

  return (
    <section className="tab-list">
      <Tab
        content = "All"
        currentTab = {props.currentTab}
        onClick = {() => props.setCurrentTab((prev) => prev = "All")}
      />
      <Tab
        content = "Active"
        currentTab = {props.currentTab}
        onClick = {() => props.setCurrentTab((prev) => prev = "Active")}
      />
      <Tab
        content = "Completed"
        currentTab = {props.currentTab}
        onClick = {() => props.setCurrentTab((prev) => prev = "Completed")}
      />
    </section>
  );
}

export default TabList;