import React, {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete"

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
      <DeleteIcon 
      onClick={() => {
        props.onChecked(props.id);
      }}
      />
    </div>
  );
}

export default ToDoItem;
