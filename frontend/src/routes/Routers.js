import React from 'react';

// Import React Router Dom
import { Routes, Route, Navigate } from 'react-router-dom'

// Import Pages
import Home from '../pages/Home';
import SearchCars from '../pages/SearchCars';
import SellCars from '../pages/SellCars';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Routers Component 
const Routers = () => {
    return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path = '/home' element={<Home/>} />
    <Route path = '/SearchCars' element={<SearchCars/>} />
    <Route path = '/SellCars' element={<SellCars/>} />
    <Route path = '/signin' element={<SignIn/>} />
    <Route path = '/signup' element={<SignUp/>} />
  </Routes>
}

export default Routers;
