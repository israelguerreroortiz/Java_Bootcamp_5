import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Pokedex from "./components/Pokedex";

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
        <section className="pokemon-container">
          <Routes>
            <Route path="/" element={<Pokedex filter={search} />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
