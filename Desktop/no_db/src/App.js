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
      newImg: ""
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleName = this.handleName.bind(this);
    this.editPoke = this.editPoke.bind(this);
  }

  componentDidMount() {
    axios.get("/api/pokemon").then(res => {
      console.log(res);
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
    console.log(body);
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

  render() {
    console.log(this.state.myPoke);
    return (
      <div className="App">
        <Cards
          deleteCard={this.deleteCard}
          editPokeFn={this.editPoke}
          myPokeArr={this.state.myPoke}
          handleNameFn={this.handleName}
        />
        <input
          placeholder="image url"
          onChange={e => this.handleImg(e.target.value)}
        />
        <input
          placeholder="Pokemon name"
          onChange={e => this.handleName(e.target.value)}
        />
        <button
          onClick={() => this.addPoke(this.state.newName, this.state.newImg)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default App;
