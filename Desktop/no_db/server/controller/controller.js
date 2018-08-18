const axios = require("axios");

let pokeData = [];
// let images = [];

// for (let i = 155; i <= 200; i++) {
//   axios
//     .get(`https://pokeapi.co/api/v1/sprite/${i}`)
//     .then(res => {
//       //   console.log(res.data);
//       pokeData.push(res.data);
//     })
//     .catch(err => console.log(err));
// }

const getPokemon = async (req, res) => {
  // if (pokeData[0]) {
  //   res.status(200).json(pokeData);
  // }
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

module.exports = {
  getPokemon,
  addPokemon,
  deletePokemon
};
