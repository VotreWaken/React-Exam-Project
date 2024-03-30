import React, { useReducer, useState, useEffect } from 'react';

// Import Recommendation Item
import RecommendationItem from './RecommendationItem';

// Import Item Data
import CarData from './Data';

// Import Recommendation Reducer
import { RecommendationReducer } from './RecommendationReducer';


// Link Styles 
import '../../styles/Recommendation.css';

const RecommendationSlider = () => {

    const [Cars, setCars] = useState([]);

    useEffect(() => {
        const storedCars = localStorage.getItem("Cars");
        if (storedCars) {
            const initialCars = JSON.parse(storedCars);
            setCars(initialCars);
        } else {
            setCars(CarData); // Если сохраненных данных нет, используйте данные из CarData
        }
    }, []);

    return (
        <div className='RecommendedCards'>
            {/* Мапим массив Cars для создания компонентов RecommendationItem */}
            {Cars.map((car, index) => (
                <RecommendationItem
                    {...car}
                    key={index}
                />
            ))}
        </div>
    );
}

export default RecommendationSlider;
