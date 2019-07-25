import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header" />
    </div>
  );
}

export default App;
