import React from "react";
import "./InputBlock.css";

function InputBlock({ handleAdd }) {
  return (
    <form onSubmit={handleAdd}>
      <input type="text" name="item" placeholder="Add new task..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputBlock;
