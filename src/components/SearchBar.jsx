import { useState } from 'react';
import './SearchBar.css';
//this is my searchbar component
const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', location);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Where are you going?"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
