import { useState } from "react";

function Bar(props) {
  const [content, setContent] = useState(``);
  const timestamp = Date.now();

  let newElement = {
    "id": timestamp,
    "content": content,
    "completed": true
  }

  return (
    <section className="bar">
      <input
        className="bar-input"
        type="text"
        placeholder="add details"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
      className="bar-button"
      onClick={() => {
        props.addTodo(newElement);
        setContent(``);
      }}
      >
        Add
      </button>
    </section>
  );
}

export default Bar;