import { useState } from "react";

function Bar(props) {
  const [content, setContent] = useState(``);
  const timestamp = Date.now();
  let isHidden;

  switch (props.currentTab) {
    case "Active":
      isHidden = false
      break;
    case "Completed":
      isHidden = true
      break;
    default:
      isHidden = false
      break;
  }

  let newElement = {
    "id": timestamp,
    "content": content,
    "completed": false
  }

  function handleClick(newElement) {
    if (newElement.content) {
      props.addTodo(newElement);
      setContent(``);
    }
  }

  return (
    <section className={`bar ${isHidden ? "hidden" : "grid"}`}>
      <input
        className="bar-input"
        type="text"
        placeholder="add details"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
      className="bar-button"
      onClick={() => handleClick(newElement)}
      >
        Add
      </button>
    </section>
  );
}

export default Bar;