import React, { useState } from 'react';

const CarSearch = ({ onSearch }) => {

    // State for the search term
    const [searchTerm, setSearchTerm] = useState("");
  
    // Handler for changing the search term
    const handleSearchChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      // Call the search function and pass the current search term value
      onSearch(term);
    };
  
    return (
      <div className="SearchInput">
        <input
          type="text"
          placeholder="Search by car name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    );
  };
  
  export default CarSearch;
  