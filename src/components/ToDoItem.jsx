import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
      className="todoItem"
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
