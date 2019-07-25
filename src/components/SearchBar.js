import React, { useState, useEffect } from "react";
import Suggestions from "./Suggestions";
import axios from "axios";

function SearchBar(props) {
  const [query, updateQuery] = useState("");
  const [suggestions, updateSuggestions] = useState([]);

  useEffect(() => {
    let filteredPokemon;

    if (query) {
      filteredPokemon = props.pokemon.filter(item => {
        const filter = query.toLowerCase();
        return item.name.includes(filter);
      });

      console.log(filteredPokemon);
      updateSuggestions(filteredPokemon);
    } else {
      updateSuggestions([]);
    }
  }, [query]);

  function handleChange(e) {
    updateQuery(e.target.value);
  }

  function searchForPokemon() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={searchForPokemon}>Search</button>
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default SearchBar;
