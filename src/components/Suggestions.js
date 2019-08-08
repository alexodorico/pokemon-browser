import React from "react";

function Suggestions(props) {
  function passQuery(e) {
    props.passQuery(e.target.innerHTML);
  }

  const markup = props.suggestions.map((result, i) => (
    <li onClick={passQuery} key={i}>
      {result.name}
    </li>
  ));

  return <ul>{markup}</ul>;
}

export default Suggestions;
