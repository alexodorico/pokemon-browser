import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultsList from "./components/ResultsList";
import SearchBar from "./components/SearchBar";
import "./main.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  function getPokemon(offset = 0) {
    if (offset !== 1000) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`)
        .then(response =>
          setPokemon(pokemon => [...pokemon, ...response.data.results])
        )
        .then(_ => getPokemon(offset + 50));
    }
  }

  function handleChange(query) {
    let filteredPokemon;

    if (query !== "") {
      filteredPokemon = pokemon.filter(item => {
        const filter = query.toLowerCase();
        return item.name.includes(filter);
      });

      setResults(filteredPokemon);
    } else {
      setResults([]);
    }
  }

  return (
    <div className="App">
      <SearchBar handleChange={handleChange} pokemon={pokemon} />
      <ResultsList results={results} />
    </div>
  );
}

export default App;
