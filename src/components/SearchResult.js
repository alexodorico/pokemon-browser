import React from "react";

function SearchResult(props) {
  return (
    <div>
      <img src={props.result.sprites.front_default} alt="Pokemon Sprite" />
      <h3>{props.result.id}</h3>
      <h3>{props.result.name}</h3>
      <ul>
        {props.result.types.map((type, i) => (
          <li key={i}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
