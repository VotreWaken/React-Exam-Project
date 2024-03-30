import React from 'react';

import Category from './SearchCategory';
import Filter from './SearchFilter';

import  '../../styles/SearchCar.css';

const SearchCarComponent = () => {
    return (
        <div class="Hero__Search">
            <Category/>
            <Filter/>
        </div>
    );
}

export default SearchCarComponent;
