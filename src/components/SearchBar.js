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

  function suggestionSearch(suggested) {
    props.searchForPokemon(suggested);
    resetSearch();
  }

  function passQuery() {
    if (query) {
      props.searchForPokemon(query);
      resetSearch();
    }
  }

  function resetSearch() {
    updateSuggestions([]);
    document.getElementById("search-bar").value = "";
  }

  return (
    <div class="search-wrapper">
      <input type="text" id="search-bar" onChange={handleChange} />
      <button onClick={passQuery}>Search</button>
      <Suggestions
        suggestions={suggestions}
        suggestionSearch={suggestionSearch}
      />
    </div>
  );
}

export default SearchBar;
