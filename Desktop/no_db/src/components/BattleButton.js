import React, { Component } from "react";

class BattleButton extends Component {
  render() {
    return (
      <button
        className="Button"
        id="bat"
        onClick={() =>
          this.props.handleBattleClick(this.props.index, this.props.cardName)
        }
      >
        Battle!!
      </button>
    );
  }
}

export default BattleButton;
