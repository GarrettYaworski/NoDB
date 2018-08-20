import React from "react";
import "./Card.css";

const EditButton = props => {
  return (
    <div className="editComps">
      <input
        placeholder="PokeMove       OVER9000!!"
        className="inputBox"
        onChange={e => props.handleNameFn(e.target.value)}
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
