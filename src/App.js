import { useEffect, useState } from 'react';
import axios from 'axios';
import { getPokemons, getPokemonImages } from './api';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import PokemonShow from './components/PokemonShow';

function App() {
  //Gets All pokemons from api
  const [pokemonList, setPokemonList] = useState([]);

  //Starts a Counter so we can get each pokemon individualy
  const [pokemonIndex, setPokemonIndex] = useState(1);

  //Gets Current Pokemon with current counter value
  const [currentPokemon, setCurrentPokemon] = useState([]);

  //Gets the image for the current Pokemon from index
  const [pokemonImage, setPokemonImage] = useState('');

  const getPokemons = async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    );
    setPokemonList(response.data.results);
  };

  const getPokemonImages = async (index) => {
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
    const response = await axios.get(URL, {
      responseType: 'arraybuffer',
    });
    setPokemonImage(response.data);
  };

  useEffect(() => {
    getPokemons();
    getPokemonImages(pokemonIndex);
  }, []);

  const changePokemon = () => {
    setCurrentPokemon(pokemonList[pokemonIndex]);
    setPokemonIndex(pokemonIndex + 1);
    getPokemonImages(pokemonIndex);
  };

  return (
    <div className='App'>
      <Header />
      <p>{pokemonIndex}</p>
      <button onClick={changePokemon}>Change Pokemon</button>
      <PokemonShow pokemon={currentPokemon} pokemonImage={pokemonImage} />
    </div>
  );
}

export default App;
