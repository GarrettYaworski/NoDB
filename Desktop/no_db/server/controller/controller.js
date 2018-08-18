const axios = require("axios");

let pokeData = [];

const getPokemon = async (req, res) => {
  let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  pokeData = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index
    };
  });

  let promises = [];
  for (let i = 0; i < pokeData.length; i++) {
    promises.push(axios.get(`${pokeData[i].url}`));
  }

  let responses = await Promise.all(promises);
  let images = responses.map(response => response.data.sprites.front_default);
  pokeData = pokeData.map((pokemon, index) => {
    return {
      ...pokemon,
      imageUrl: images[index]
    };
  });
  res.status(200).json(pokeData);
};

const addPokemon = (req, res) => {
  let { name, img } = req.body;
  let newPoke = {
    url: img,
    name,
    id: pokeData.length + 1,
    imageUrl: img
  };
  pokeData.push(newPoke);
  res.status(200).json(pokeData);
};

const deletePokemon = (req, res) => {
  let deleteID = req.params.id;
  console.log({ deleteID });
  const pokeIndex = pokeData.findIndex(poke => poke.id === +deleteID);
  pokeData.splice(pokeIndex, 1);
  res.status(200).json(pokeData);
};

const editPokemon = (req, res) => {
  let { name, id } = req.body;
  console.log(name, id);
  const pokeIndex = pokeData.findIndex(poke => poke.id === +id);
  pokeData[pokeIndex].name = name;
  res.status(200).json(pokeData);
};

module.exports = {
  getPokemon,
  addPokemon,
  deletePokemon,
  editPokemon
};
