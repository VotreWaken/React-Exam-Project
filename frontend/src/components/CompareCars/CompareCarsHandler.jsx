import React, { useReducer, useState, useEffect } from 'react';

// Link Styles 
import '../../styles/Recommendation.css';
import CompareCarsItem from './CompareCarsItem';

// Import Item Data
import CarData from '../RecommendationCars/Data';

const CompareCarsHandler = () => {

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
<div className='CompareCarsCards'>
    {/* Мапим первые два элемента массива Cars для создания компонентов RecommendationItem */}
    {Cars.slice(0, 2).map((car, index) => (
        <React.Fragment key={index}>
            {/* Если это не первый элемент, вставляем div с классом circle */}
            {index !== 0 && <div class="circle">VS</div>}
            <CompareCarsItem
                {...car}
            />
        </React.Fragment>
    ))}
    
</div>

    );
}

export default CompareCarsHandler;
