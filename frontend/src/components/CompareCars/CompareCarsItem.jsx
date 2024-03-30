import React from 'react';

import Ford from '../../assets/img/HomePage/RecommendedSection/Ford.png';

const CompareCarsItem = ({ Name, Price, Location, ProductionDate, WheelType, FuelType, PassengerCapacity, CarRating, ReviewsCount }) => {
    return (
        <div className="CarCard">
        <img src={Ford} draggable="false" alt=""/>
        <br/>
        <button>New</button>
        <h3>{Name}</h3>
        <span>{Price}</span>
        <p>{Location}</p>
        <ul className="CarDetails">
            <li>
                <img src="/img/Recommended/Calendar.svg" alt=""/>
                <p>{ProductionDate}</p>    
            </li>
            <li>
                <img src="/img/Recommended/Wheel.svg" alt=""/>
                <p>{WheelType}</p>    
            </li>
            <li>
                <img src="/img/Recommended/Fuel.svg" alt=""/>
                <p>{FuelType}</p>    
            </li>
            <li>
                <img src="/img/Recommended/Capacity.svg" alt=""/>
                <p>{PassengerCapacity}</p>    
            </li>
        </ul>
        <hr/>
        <div className="Car-Rating">
            {Array.from({ length: CarRating }, (_, index) => (
                <span key={index}>*</span>
            ))}
            ({ReviewsCount} Reviews)
        </div>
    </div>
    );
}

export default CompareCarsItem;
