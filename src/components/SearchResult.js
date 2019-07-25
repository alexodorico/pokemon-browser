import React, { useState, useEffect } from "react";

function SearchResult(props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes(props.result.types);
  }, [props.result]);

  function getTypes(types) {
    if (types !== undefined) {
      const typesArray = props.result.types.map(type => {
        return type.type.name;
      });

      setTypes(typesArray);
    }
  }

  return (
    <div>
      <h3>{props.result.id}</h3>
      <h3>{props.result.name}</h3>
      <ul>
        {types.map(type => (
          <li>{type}</li>
        ))}
      </ul>
      <h3>{props.result.id}</h3>
    </div>
  );
}

export default SearchResult;
