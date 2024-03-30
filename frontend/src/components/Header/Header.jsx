import React,  {useRef} from 'react';

// Import Images
import LanguageIcon from '../../assets/img/LayoutPage/NavSection/Language.svg';
import ProfileIcon from '../../assets/img/LayoutPage/NavSection/Profile.svg';
import Logo from '../../assets/img/LayoutPage/NavSection/logo.svg';

// React Router Dom
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'

// Link Styles 
import '../../styles/Header.css';

// Navigation Links
const nav__links = 
[
    {
      display: 'New Cars',
      path: '/home'
    },
    {
      display: 'Used Cars',
      path: '/home'
    },
    {
      display: 'All Cars',
      path: '/SearchCars'
    },
    {
      display: 'Sell Car',
      path: '/SellCars'
    },
]

// Header Component
const Header = () => {

    // Using useRef to toggleMenu 
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    return (
        <header>
            <nav>
                <ul class="nav__items" ref={menuRef}>
                    <li class="nav__item">
                      <Link to="/home" className="nav__item-link">
                            <img draggable="false" src={Logo} alt=""/>
                      </Link>
                    </li>
                    <div class="nav__items-center">
                    {
            nav__links.map((item,index) => (
              <NavLink onClick={toggleMenu}
               to={item.path} key={index} 
              className={navClass => navClass.isActive ? 'active__menu' : ''}
              >{item.display}</NavLink>
            ))
          }
                    </div>
                    <div class="nav__items-right">
                        <li class="nav__item">
                            <img draggable="false" src={ProfileIcon} alt=""/>
                            <Link to="/signin" className="nav__item-link">Sign In</Link>
                        </li>
                        <li class="nav__item">
                            <img draggable="false" src={LanguageIcon} alt=""/>
                            <a href="" class="nav__item-link">Language</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
