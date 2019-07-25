import React from "react";

function ResultsList(props) {
  const markup = props.results.map((result, i) => (
    <li key={i}>{result.name}</li>
  ));

  return <ul>{markup}</ul>;
}

export default ResultsList;
