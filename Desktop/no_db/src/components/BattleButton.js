import React, { Component } from "react";

class BattleButton extends Component {
  constructor(props) {
    super(props);
  }

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
