import React, { useState } from "react";

function SearchBar(props) {
  function handleChange(e) {
    props.handleChange(e.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}

export default SearchBar;
