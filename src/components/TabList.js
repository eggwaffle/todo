import Tab from "./Tab";

function TabList() {
  return (
    <section className="tab-list">
      <Tab
        content = "All"
      />
      <Tab
        content = "Active"
      />
      <Tab
        content = "Completed"
      />
    </section>
  );
}

export default TabList;