import React from "react";
import "./Card.css";

const EditButton = props => {
  return (
    <div className="editComps">
      <input
        onChange={e => props.handleNameFn(e.target.value)}
        placeholder="New Name..."
      />
      <button
        onClick={() => props.handleNameClick(props.index)}
        className="Button"
      >
        Confirm
      </button>
    </div>
  );
};

export default EditButton;
