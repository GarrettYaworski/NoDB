import React from "react";
import "./Card.css";

const EditButton = props => {
  return (
    <button onClick={() => this.props.handleEdClick()} className="Button">
      Edit
    </button>
  );
};

export default EditButton;
