import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";

class App extends Component {
  constructor() {
    super();

    this.state = {
      myPoke: [],
      newName: "",
      newImg: "",
      battleID1: null,
      battleID2: null,
      name1: "",
      name2: ""
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleName = this.handleName.bind(this);
    this.editPoke = this.editPoke.bind(this);
    this.handleBattleClick = this.handleBattleClick.bind(this);
  }

  componentDidMount() {
    axios.get("/api/pokemon").then(res => {
      this.setState({ myPoke: res.data });
    });
  }

  deleteCard(index) {
    axios.delete(`/api/deletePokemon/${index}`).then(res => {
      this.setState({ myPoke: res.data });
    });
  }

  addPoke(name, img) {
    let body = { name, img };
    axios.post(`/api/pokemon`, body).then(res => {
      this.setState({ myPoke: res.data });
    });
  }
  editPoke(name, id) {
    let body = { name, id };
    axios.put(`/api/pokemon`, body).then(res => {
      this.setState({ myPoke: res.data });
    });
  }

  handleImg(imgUrl) {
    this.setState({ newImg: imgUrl });
  }
  handleName(name) {
    this.setState({ newName: name });
  }

  async handleBattleClick(id, name) {
    if (this.state.battleID1 === null) {
      await this.setState({ battleID1: id });
      await this.setState({ name1: name });
    } else if (id === this.state.battleID1) {
      return alert(
        "Please choose 2 different pokemon and stop trying to break my code...."
      );
    } else if (this.state.battleID2 === null) {
      await this.setState({ battleID2: id });
      await this.setState({ name2: name });
      await this.doBattle(
        this.state.battleID1,
        this.state.name1,
        this.state.battleID2,
        this.state.name2
      );
      await this.setState({
        battleID1: null,
        battleID2: null,
        name1: "",
        name2: ""
      });
    }
  }

  doBattle(poke1, name1, poke2, name2) {
    console.log(poke1, name1, poke2, name2);
    let poke1Pwr = "";
    let poke2Pwr = "";
    if ((poke1 + 1) % 3 === 0) {
      poke1Pwr = 3;
    } else if ((poke1 + 1) % 2 === 0) {
      poke1Pwr = 2;
    } else {
      poke1Pwr = 1;
    }

    if ((poke2 + 1) % 3 === 0) {
      poke2Pwr = 3;
    } else if ((poke2 + 1) % 2 === 0) {
      poke2Pwr = 2;
    } else {
      poke2Pwr = 1;
    }

    poke1Pwr = Math.random() * poke1Pwr;
    poke2Pwr = Math.random() * poke2Pwr;

    if (poke1Pwr > poke2Pwr) {
      alert(`${name1} has arisen victorious!!`);
      this.deleteCard(poke2);
    } else {
      alert(`${name2} has arisen victorious!!`);
      this.deleteCard(poke1);
    }
  }

  render() {
    return (
      <div className="App">
        <br />
        <img
          className="titleImg"
          alt=""
          src="https://fontmeme.com/permalink/180819/18ba8e26225bd21bd2448746efd58592.png"
        />
        <br />
        <Cards
          deleteCard={this.deleteCard}
          editPokeFn={this.editPoke}
          myPokeArr={this.state.myPoke}
          handleNameFn={this.handleName}
          handleBattleClick={this.handleBattleClick}
        />
        <input
          placeholder="Image URL"
          onChange={e => this.handleImg(e.target.value)}
        />
        <input
          placeholder="Pokémon name"
          onChange={e => this.handleName(e.target.value)}
        />
        <button
          className="daBut"
          onClick={() => this.addPoke(this.state.newName, this.state.newImg)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default App;
