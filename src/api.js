// API's that we will use

//https://pokeapi.co/api/v2/pokemon?limit=150&offset=0

//For information about pokemon
// https://pokeapi.co/api/v2/pokemon/<key-number>

//For image of pokemon sprite
// "https://raw.githubuserco…rites/pokemon/back/<key-number>.png

import axios from 'axios';

export const getPokemons = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  //   console.log(response.data.results);
  return response.data;
};

export const getPokemonImages = async (index) => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`;
  const response = await axios.get(url);
  //   console.log(response);
  return response;
};
