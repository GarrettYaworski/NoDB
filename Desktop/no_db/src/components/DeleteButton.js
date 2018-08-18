import React from "react";
import "./Card.css";

const DeleteButton = props => {
  return (
    <button
      onClick={() => props.handleDelClickFn(props.index)}
      className="Button"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
