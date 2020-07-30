import React, { useState } from 'react';

const SearchBar = (props) => {

  const [search, setSearch] = useState('')

  return (
    <div className="search-bar">

      <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} />

      <button onClick={() => props.handleSearch(search)}>Search</button>

    </div>
  );
};

export default SearchBar;