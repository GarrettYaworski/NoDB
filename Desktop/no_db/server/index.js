const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;

const {
  getPokemon,
  addPokemon,
  deletePokemon,
  editPokemon
} = require("./controller/controller");

const app = express();
app.use(cors());
app.use(json());

app.get("/api/pokemon", getPokemon);
app.post("/api/pokemon", addPokemon);
app.delete("/api/deletePokemon/:id", deletePokemon);
app.put("/api/pokemon", editPokemon);

app.listen(port, () => console.log(`listening at port ${port}`));
