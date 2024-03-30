import React, { useState } from 'react';
import CarSearch from "./SearchCarsSearch";

const SearchCarsFilter = ({ setFilter, activeFilter, carModels, carYears  }) => {

  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize activeFilter.years to an empty array if it's undefined
  if (!activeFilter.years) {
    activeFilter.years = [];
  }

  // Handler for changing the search term
  const handleCarSearch = (searchTerm) => {
    // Set the current search term value
    setSearchTerm(searchTerm);
    // Apply the search term to the filter
    setFilter({ ...activeFilter, searchTerm: searchTerm.toLowerCase() });
  };

  // Handler for changing the selected brand
  const handleBrandChange = (event) => {
    setFilter({ ...activeFilter, brand: event.target.value });
  };

  return (
    <div className="Tasks-Filter">
      <div className="Tasks-FilterBtn">
      {/* Cars Brand Items to Set Filter by Brand */}
      <select
          value={activeFilter.brand}
          onChange={handleBrandChange}
        >
          {carModels.map((carModel) => (
            <option key={carModel} value={carModel}>{carModel}</option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default SearchCarsFilter;
