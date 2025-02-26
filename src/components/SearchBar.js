import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
      <input
        type="text"
        placeholder="Search..."
        value={ searchTerm }
        onChange={ handleSearchChange }
      />
  );
};
