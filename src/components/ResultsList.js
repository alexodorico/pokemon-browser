import React from "react";

function ResultsList(props) {
  const markup = props.results.map(result => <li>{result.name}</li>);

  return <ul>{markup}</ul>;
}

export default ResultsList;
