import React, { Component } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleEdClick = this.handleEdClick.bind(this);
  }

  handleEdClick() {}

  handleDelClick(index) {
    this.props.deleteCard(index);
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div className="Card" key={pokemon.name}>
        {pokemon.name}
        <img className="Card__img" alt="pokemon Image" src={pokemon.imageUrl} />
        <EditButton handleEdClick={this.handleEdClick} />
        <DeleteButton
          handleDelClickFn={this.handleDelClick}
          index={this.props.index}
          cardName={pokemon.name}
        />
      </div>
    );
  }
}
export default Card;
