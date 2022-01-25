function Tab(props) {
  let currentTabClass = `current-tab`;
  if (props.currentTab === props.content) {
    currentTabClass = `current-tab`;
  } else {
    currentTabClass = ``;
  }
  return (
    <div>
      <section className={`tab ${currentTabClass}`}>
        <button
          className={`tab-button`}
          onClick={props.onClick}
        >
          {props.content}
        </button>
      </section>
    </div>
  );
}

export default Tab;