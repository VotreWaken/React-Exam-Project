import React from 'react';
import SearchCarsItem from './SearchCarsItem';

const SearchCarsList = ({ posts }) => {
  return (

      <div className="todo-list">
        <div className="TodoTasksList">
          {/* Display Cars Items */}
          {posts.map((post, index) => (
            <SearchCarsItem key={index} {...post} />
          ))}
        </div>
      </div>

  );
};

export default SearchCarsList;
