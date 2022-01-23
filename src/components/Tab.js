function Tab(props) {
  return (
    <div>
      <section className="tab">
        <button className="tab-button">
          {props.content}
        </button>
      </section>
    </div>
  );
}

export default Tab;