export const RecommendationReducer = (state, action) => 
{ 
    switch (action.type) {
        case 'create':
            // Возвращаем новый массив, включающий существующее состояние и новые данные
            return [...state, 1, 2, 3]; // Замените [1, 2, 3] на действительные данные, если это необходимо
        default:
            return state; // Возвращаем существующее состояние, если действие не распознано
    }

    return state;
}