import React, { Component } from "react";
import Card from "./Card";
import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const pokemonDisplay = this.props.myPokeArr.map(pokemon => {
      return (
        <Card
          key={pokemon.id}
          deleteCard={this.props.deleteCard}
          pokemon={pokemon}
          index={pokemon.id}
        />
      );
    });

    return <div className="Cards">{pokemonDisplay}</div>;
  }
}

export default Cards;
