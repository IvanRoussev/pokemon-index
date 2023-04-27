import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PokemonShow from './components/PokemonShow';
import './App.css';

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
  }, []);

  const changePokemon = () => {
    setCurrentPokemon(pokemonList[pokemonIndex]);
    setPokemonIndex(pokemonIndex + 1);
    getPokemonImages(pokemonIndex);
  };

  return (
    <div className='App'>
      <Header />
      <div className='contents'>
        <PokemonShow pokemon={currentPokemon} pokemonImage={pokemonImage} />
        <button className='pokemon-button' onClick={changePokemon}>
          Click for Pokemon
        </button>
      </div>
    </div>
  );
}

export default App;
