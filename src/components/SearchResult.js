import React from "react";

function SearchResult(props) {
  return (
    <div className="pokemon-card">
      <div className="info-wrapper">
        <h3>#{props.result.id}</h3>
        <h3>{props.result.name}</h3>
        <ul className="type-list">
          {props.result.types.map((type, i) => (
            <li key={i}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <img src={props.result.sprites.front_default} alt="Pokemon Sprite" />
    </div>
  );
}

export default SearchResult;
