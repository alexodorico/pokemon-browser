import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import "./main.scss";

function App() {
  const [pokemonList, setpokemonList] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    getPokemon();
  }, []);

  function getPokemon(offset = 0) {
    if (offset !== 1000) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`)
        .then(response =>
          setpokemonList(pokemonList => [
            ...pokemonList,
            ...response.data.results
          ])
        )
        .then(_ => getPokemon(offset + 50));
    }
  }

  function searchForPokemon(query) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(response => setResult(response.data))
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <SearchBar
        searchForPokemon={searchForPokemon}
        pokemonList={pokemonList}
      />
      {result && <SearchResult result={result} />}
    </div>
  );
}

export default App;
