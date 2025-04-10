async function getPokemonsData() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const response = await fetch(url);
    const data = await response.json();
    const pokemons = data.results;
    const pokemonDetails = await Promise.all(
        pokemons.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            console.log(pokemonResponse);
            return pokemonResponse.json();
        })
    );
    return pokemonDetails
};

// img id nombre tipos evolucion

getPokemonsData();
  