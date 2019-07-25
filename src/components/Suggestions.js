import React from "react";

function Suggestions(props) {
  const markup = props.suggestions.map((result, i) => (
    <li key={i}>{result.name}</li>
  ));

  return <ul>{markup}</ul>;
}

export default Suggestions;
