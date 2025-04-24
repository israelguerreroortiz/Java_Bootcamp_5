import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Pokedex from "./components/Pokedex";
import PokeDetail from "./components/PokeDetail";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header className="header-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Filtra pokemons por nombre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </header>
        <Routes>
          <Route path="/" element={<section className="pokemon-container"><Pokedex filter={search} /></section>} />
          <Route path="/pokemon/:name" element={<PokeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
