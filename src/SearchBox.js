import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br-pill"
        type="search"
        name="search"
        id="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
