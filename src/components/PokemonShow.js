function PokemonShow({ pokemon, pokemonImage }) {
  const imageUrl = `data:image/png;base64,${btoa(
    String.fromCharCode(...new Uint8Array(pokemonImage))
  )}`;
  return (
    <div>
      <div>Pokemon: {pokemon.name}</div>
      <img src={imageUrl} alt='pokemon' />
    </div>
  );
}

export default PokemonShow;
