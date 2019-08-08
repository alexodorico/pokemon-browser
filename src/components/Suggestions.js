import React from "react";

function Suggestions(props) {
  function passQuery(e) {
    props.suggestionSearch(e.target.innerHTML);
  }

  const markup = props.suggestions.map((result, i) => (
    <li onClick={passQuery} key={i}>
      {result.name}
    </li>
  ));

  return (
    <div>
      <ul className="suggestions">{markup}</ul>
    </div>
  );
}

export default Suggestions;
