import React from "react";
import "./Card.css";

const EditButton = props => {
  return (
    <div>
      <input
        onChange={e => props.handleNameFn(e.target.value)}
        placeholder="Enter new Name"
      />
      <button
        onClick={() => props.handleNameClick(props.index)}
        className="Button"
      >
        Voila
      </button>
    </div>
  );
};

export default EditButton;
