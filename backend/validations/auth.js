import { body } from 'express-validator';

export const RegisterValidation = [
    body('email', 'Неверный Формат Почты').isEmail(),
    body('password', 'Пароль Должен Содержать Минимум 3 Символа').isLength({ min: 5 }),
    body('fullName', 'Укажите Имя').isLength({ min: 3 }),
    body('avatarUrl', 'Неверная Ссылка на Аватарку').optional().isURL(),
];

export const loginValidation = [
    body('email', 'Неверный Формат Почты').isEmail(),
    body('password', 'Пароль Должен Содержать Минимум 3 Символа').isLength({ min: 5 }),
];

export const postCreateValidation = [
    body('year', 'Укажите Год Выпуска Автомобиля').isLength({ min: 4 }),
    body('brand', 'Укажите Производителя Автомобиля').isLength({ min: 3 }),
    body('model', 'Укажите Модель Автомобиля').isLength({ min: 3 }),
    body('price', 'Укажите Цену Автомобиля').isNumeric(),
    body('color', 'Укажите Цвет Автомобиля').isLength({ min: 3 }),
    body('image', 'Загрузите Фотографии Автомобиля').isString(),
    body('description', 'Укажите Описание Автомобиля').optional(),
];

// Year 
// Brand 
// Model 
// Color 
// Description 
// Image