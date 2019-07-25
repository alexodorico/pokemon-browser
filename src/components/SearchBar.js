import React, { useState, useEffect } from "react";
import Suggestions from "./Suggestions";

function SearchBar(props) {
  const [query, updateQuery] = useState("");
  const [suggestions, updateSuggestions] = useState([]);

  useEffect(() => {
    let filteredPokemon;

    if (query) {
      filteredPokemon = props.pokemonList.filter(item => {
        const filter = query.toLowerCase();
        return item.name.includes(filter);
      });

      updateSuggestions(filteredPokemon);
    } else {
      updateSuggestions([]);
    }
  }, [query, props.pokemonList]);

  function handleChange(e) {
    updateQuery(e.target.value);
  }

  function passQuery() {
    if (query) {
      props.searchForPokemon(query);
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={passQuery}>Search</button>
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default SearchBar;
