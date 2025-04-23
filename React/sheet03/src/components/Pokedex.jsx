import { useState, useEffect } from "react";
import Pokecard from "./Pokecard";

function Pokedex({filter}) {
  const [pokemons, setPokemons] = useState([]);
  

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();
      setPokemons(data.results);
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredPokemons.map((poke) => {
        return <Pokecard key={poke.name} name={poke.name} url={poke.url} />;
      })}
    </>
  );
}

export default Pokedex;
