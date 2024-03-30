import React from 'react';

// Link Images
import logo from '../../assets/img/LayoutPage/NavSection/logo.svg';
import FacebookLogo from '../../assets/img/LayoutPage/FooterSection/Facebook.svg';
import InstagrammLogo from '../../assets/img/LayoutPage/FooterSection/Instagramm.svg';
import YoutubeLogo from '../../assets/img/LayoutPage/FooterSection/Youtube.svg';

// Link Styles 
import '../../styles/Footer.css';

// Footer Component 
const Footer = () => {
    return (
        <footer>
            <img draggable="false" src={logo} alt="Logo"/>
            <hr/>

            <div class="footerLinks">
                <ul>
                    <li>ABOUT US</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>

                <ul>
                    <li>CUSTOMER SERVICE</li>
                    <li>info@car.com</li>
                    <li>240-865-3730</li>
                </ul>

                <ul>
                    <li>3926 Calvin Street,
                        Baltimore, Maryland,
                        21201,
                        United State
                    </li>
                    <li>
                        <ul>
                            <li><img draggable="false" src={FacebookLogo} alt="Facebook"/></li>
                            <li><img draggable="false" src={InstagrammLogo} alt="Instagramm"/></li>
                            <li><img draggable="false" src={YoutubeLogo} alt="Youtube"/></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <hr/>

            <p>2021 Autohunt. All Rights reserved</p>

        </footer>
    );
}

export default Footer;
