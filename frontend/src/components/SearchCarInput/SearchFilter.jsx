import React from 'react';

const SearchFilter = () => {
    return (
        <div class="Hero__Search-Inputs">
            <div class="FirstRowInput">
                <input class="SearchInput" type="text" placeholder="Search"/>
                <input class="ModelInput" type="text" placeholder="Model"/>
                <select>
                    <option value="" disabled selected>Model</option>
                    <option value="">BMW</option>
                    <option value="">Ford</option>
                    <option value="">Tesla</option>
                    <option value="">Honda</option>
                    <option value="">Audi</option>
                </select>
                <input class="BrandInput" type="text" placeholder="Brand"/>
                <select>
                    <option value="" disabled selected>Brand</option>
                    <option value="">Focus</option>
                    <option value="">Rio</option>
                    <option value="">Model 3</option>
                </select>
            </div>
            <div class="SecondRowInput">
                <input class="LocationInput second-row" type="text" placeholder="Location"/>
                <p class="PriceText second-row">Price Range<br/> <span>$.0 - $3,000,000.00</span></p>
                <input type="range" class="Slider second-row" />
                <button class="SearchBtn second-row">Search</button>
            </div>

        </div>
    );
}

export default SearchFilter;
