import React, { useState, useEffect } from "react";

function SearchResult(props) {
  const [types, setTypes] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (props.result.types) {
      getTypes();
      setImageSrc(props.result.sprites.front_default);
    }
  }, [props]);

  function getTypes() {
    const typesArray = props.result.types.map(type => {
      return type.type.name;
    });

    setTypes(typesArray);
  }

  return (
    <div>
      <img src={imageSrc} />
      <h3>{props.result.id}</h3>
      <h3>{props.result.name}</h3>
      <ul>
        {types.map(type => (
          <li>{type}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
