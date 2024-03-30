import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchCarsList from '../components/SearchPageComponents/SearchCarsList';
import YearFilter from '../components/SearchPageComponents/SearchCarsYearFilter';
import PriceRangeFilter from '../components/SearchPageComponents/PriceRangeFilter';
import { fetchCars } from '../redux/slices/posts';

import SearchFilter from "../components/SearchPageComponents/SearchFilter";

// Link Styles 
import '../styles/SearchCars.css';

const SearchCars = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const [filter, setFilter] = useState({ brand: "All", priceRange: { min: 0, max: 800000 }, searchTerm: "", years: [] });
  const [uniqueCarModels, setUniqueCarModels] = useState([]);
  const [uniqueCarYears, setUniqueCarYears] = useState([]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (posts.items) {
      const carModels = posts.items.map(post => post.brand).filter(Boolean);
      const uniqueModels = [...new Set(carModels)];
      setUniqueCarModels(uniqueModels);

      const carYears = posts.items.map(post => post.year).filter(year => year);
      const uniqueYears = [...new Set(carYears)];
      setUniqueCarYears(uniqueYears);
    }
  }, [posts.items]);

  const handleYearChange = (event, year) => {
    const isChecked = event.target.checked;
    setFilter(prevFilter => {
      const newYears = isChecked
        ? [...prevFilter.years, year]
        : prevFilter.years.filter(y => y !== year);
      return { ...prevFilter, years: newYears };
    });
  };

  const handleSearchChange = event => {
    setFilter(prevFilter => ({
      ...prevFilter,
      searchTerm: event.target.value
    }));
  };

  const filteredPosts = posts.items ? posts.items.filter(post => {
    const brandFilter = filter.brand === "All" || post.brand === filter.brand;
    const priceFilter = post.price >= filter.priceRange.min && post.price <= filter.priceRange.max;
    const searchFilter = post.model && post.model.toLowerCase().includes(filter.searchTerm.toLowerCase());
    const yearFilter = !filter.years || filter.years.length === 0 || filter.years.includes(post.year);
    return brandFilter && priceFilter && searchFilter && yearFilter;
  }) : [];

  const resetFilter = () => {
    setFilter({ brand: "All", priceRange: { min: 0, max: 800000 }, searchTerm: "", years: [] });
  };

  return (
    <div className="Hero--wrapper">
      <div className="LeftSide">
        <p>Filter</p>

        {/* Brand Filter */}
        <div className="LeftSideItem">
        </div>

        {/* Year Filter */}
        <div className="LeftSideItem">
          <YearFilter
            carYears={uniqueCarYears}
            selectedYears={filter.years}
            onYearChange={handleYearChange}
          />
        </div>

        {/* Price Range Filter */}
        <PriceRangeFilter activeFilter={filter} setFilter={setFilter} />

        <button onClick={resetFilter}>Reset Filter</button>
      </div>

      <div className="RightSide">
        <div className="SearchSection">
          <input
            type="text"
            placeholder="Search"
            value={filter.searchTerm}
            onChange={handleSearchChange}
          />
        </div>
          {/* Cars Items Filter */}
          <SearchFilter
          setFilter={setFilter}
          activeFilter={filter}
          carModels={uniqueCarModels}
          carYears={uniqueCarYears}
        />


        {/* Cars Items List */}
        <div className="CardsWrapper">
          <SearchCarsList
            posts={filteredPosts} // Pass filtered posts to the SearchCarsList
          />
        </div>
      </div>
    </div>
  );
};

export default SearchCars;