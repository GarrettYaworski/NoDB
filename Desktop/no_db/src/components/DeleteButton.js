import React from "react";

const DeleteButton = props => {
  return (
    <button
      onClick={() => props.handleDelClickFn(props.index2)}
      className="Button"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
