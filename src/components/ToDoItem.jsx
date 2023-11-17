import React, {useState} from "react";

function ToDoItem(props) {

  const [isLineThrough, setLine] = useState(false);

  function lineThrough() {
    setLine(!isLineThrough);
  }

  return (
    <div
      className="todoItem"
    >
      <li 
      onClick={lineThrough}
      style={{textDecoration: isLineThrough && "line-through"}}
      >{props.text}</li>
      
      <p
      onClick={() => {
        props.onChecked(props.id);
      }}
      >D</p>
    </div>
  );
}

export default ToDoItem;
