function PokemonShow({ pokemon, pokemonImage }) {
  const imageUrl = `data:image/png;base64,${btoa(
    String.fromCharCode(...new Uint8Array(pokemonImage))
  )}`;
  return (
    <div className='poke-show'>
      <div className='pokemon-name'>
        <h2>{pokemon.name}</h2>
      </div>
      <img className='pokemon-image' src={imageUrl} alt='' />
    </div>
  );
}

export default PokemonShow;
