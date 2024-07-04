import React, { useState } from 'react';
import data from './Data';
import { GoSearch } from "react-icons/go";

function Search({ setList }) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    if (!value) {
      setList(data);
      return;
    }

    const results = data.filter((item) => 
      value &&
      item && 
      (item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase()))
    );
    setList(results);
    console.log(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div id='search-container'>
        <GoSearch id='Search-icon' />
        <input
          id='searchInput'
          type="text"
          placeholder='Search...'
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default Search;

