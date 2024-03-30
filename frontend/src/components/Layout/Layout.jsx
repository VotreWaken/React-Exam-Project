import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from '../../routes/Routers'

import '../../index.css';

import '../../styles/Adaptive.css';

const Layout = () => {
    return (
      <div className='container'>
        <Header/>
        <Routes />
        <Footer />
      </div>
    );
}

export default Layout;
