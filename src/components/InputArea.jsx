import React from "react";
import AddIcon from "@mui/icons-material/Add";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={(event)=> {
        props.handleChange(event)
      }} type="text" value={props.inputText} />
      <button onClick={props.addItem}>
      <span>
        <AddIcon />
        </span>
      </button>
    </div>
  );
}

export default InputArea;
