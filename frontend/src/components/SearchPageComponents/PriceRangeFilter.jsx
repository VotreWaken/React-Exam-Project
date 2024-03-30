import React, { useState } from 'react';

const PriceRangeFilter = ({ activeFilter, setFilter }) => {
  const handlePriceChange = (event) => {
    const newPriceRange = { ...activeFilter.priceRange, min: parseInt(event.target.value) };
    setFilter({ ...activeFilter, priceRange: newPriceRange });
  };

  return (
    <div className="FilterByPrice">
      <span>${activeFilter.priceRange.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - $800000</span>
      <input
        type="range"
        name="min"
        min="0"
        max="800000"
        value={activeFilter.priceRange.min}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default PriceRangeFilter;