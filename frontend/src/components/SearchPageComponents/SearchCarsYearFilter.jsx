import React, { useState } from 'react';

const YearFilter = ({ carYears, selectedYears, onYearChange }) => {
  return (
    <div className="FilterByYear">
      {carYears.map(year => (
        <div key={year} className="LeftSideItemCheckBox">
          <input
            type="checkbox"
            value={year}
            checked={selectedYears.includes(year)}
            onChange={(event) => onYearChange(event, year)}
          />
          <p>{year}</p>
        </div>
      ))}
    </div>
  );
};

export default YearFilter;