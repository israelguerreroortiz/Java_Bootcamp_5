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
  console.log(pokemonTypes);
  return { pokemonNames, pokemonImages, pokemonID, pokemonTypes };
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
  const { pokemonNames, pokemonImages, pokemonID, pokemonTypes } = await getPokemonsData();
  const container = document.querySelector('.pokemon-container');

  pokemonNames.forEach(async (name, index) => {
    const card = document.createElement('article');
    card.classList.add('pokemon-card');
    const pokemonEvo = await pokemonEvolutions();
    if (pokemonEvo[index]) {
      card.innerHTML = `
            <div class="pokemon-img-container">
              <p class="pokemon-id">ID / ${pokemonID[index]}</p>
              <img
                src="${pokemonImages[index]}"
                alt="${name}"
              />
            </div>
            <div class="pokemon-info">
              <h2 class="pokemon-name">${name}</h2>
              <div class="pokemon-types">
                ${pokemonTypes[index].map(type => `<span class="type ${type}">${type}</span>`).join('')}
              </div>
            <div class="pokemon-evolution">
              <p>Evoluciona de:</p>
              <p>${pokemonEvo[index].name}</p>
            </div>
            </div>`;
    }
    else {
      card.innerHTML = `
              <div class="pokemon-img-container">
                <p class="pokemon-id">ID / ${pokemonID[index]}</p>
                <img
                  src="${pokemonImages[index]}"
                  alt="${name}"
                />
              </div>
              <div class="pokemon-info">
                <h2 class="pokemon-name">${name}</h2>
                <div class="pokemon-types">
                  ${pokemonTypes[index].map(type => `<span class="type ${type}">${type}</span>`).join('')}
                </div>
              </div>
            `;
    }
    container.appendChild(card);
  });
};
renderPokemonCards();