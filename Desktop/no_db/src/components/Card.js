import React, { Component } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import BattleButton from "./BattleButton";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: ""
    };

    this.handleNameIn = this.handleNameIn.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
  }

  handleDelClick(index) {
    this.props.deleteCard(index);
  }
  handleNameIn(e) {
    let newName = e;
    this.setState({ newName });
  }
  handleNameClick(index) {
    console.log(index);
    this.props.editPokeFn(this.state.newName, index);
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div className="Card" key={pokemon.name}>
        <p className="spacer" />
        {pokemon.name}
        <div className="imgContain">
          <img className="Card__img" alt="" src={pokemon.imageUrl} />
        </div>
        <br />
        <EditButton
          handleNameClick={this.handleNameClick}
          handleNameFn={this.handleNameIn}
          index={this.props.index}
          cardName={pokemon.name}
        />
        <BattleButton
          handleBattleClick={this.props.handleBattleClick}
          handleDelClickFn={this.handleDelClick}
          index={this.props.index}
          cardName={pokemon.name}
        />
        <DeleteButton
          handleDelClickFn={this.handleDelClick}
          index2={this.props.index}
          cardName={pokemon.name}
        />
      </div>
    );
  }
}
export default Card;
