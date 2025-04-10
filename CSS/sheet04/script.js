async function getPokemonsData() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const response = await fetch(url);
    const data = await response.json();
    const pokemons = data.results;
    const pokemonDetails = await Promise.all(
        pokemons.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            return pokemonResponse.json();
        })
    );
    const pokemonNames = pokemonDetails.map(pokemon => pokemon.name);
    const pokemonImages = pokemonDetails.map(pokemon => pokemon.sprites.front_default);
    const pokemonID = pokemonDetails.map(pokemon => pokemon.id);
    const pokemonTypes = pokemonDetails.map(pokemon => pokemon.types.map(typeInfo => typeInfo.type.name));
    return {pokemonNames, pokemonImages, pokemonID, pokemonTypes};
};

// img id nombre tipos evolucion
const pokemonEvolutions = async () => {
    const urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species?limit=20';
    const speciesResponse = await fetch(urlSpecies);
    const species = await speciesResponse.json();
    const speciesDetails = await Promise.all(
        species.results.map(async (speciesItem) => {
            const speciesResponse = await fetch(speciesItem.url);
            return speciesResponse.json();
        })
    );
    const speciesEvo = speciesDetails.map(specie => specie.evolves_from_species);
    return speciesEvo;
};

const renderPokemonCards = async () => {
    const {pokemonNames, pokemonImages, pokemonID, pokemonTypes} = await getPokemonsData();
    
}
renderPokemonCards()
  