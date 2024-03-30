import React from 'react';

import AboutImage from '../../assets/img/HomePage/AboutSection/AboutUs.png';

import '../../styles/About.css';

const About = () => {
    return (
        <div class="About">
        <div class="AboutLeft">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet tortor ut sit sit. 
            Velit imperdiet integer elementum a scelerisque pulvinar venenatis sodales. Quis nulla euismod 
            feugiat at interdum in. Venenatis arcu semper lectus quis sit in rhoncus auctor.
        </p>
        <div class="AboutItems">
        <div class="AboutItem">
            <span>150</span>
            <hr class="FirstLine"></hr>
            <hr class="SecondLine"></hr>
            <p>Vehicle In Stock</p>
        </div>
        <div class="AboutItem">
            <span>40</span>
            <hr class="FirstLine"></hr>
            <hr class="SecondLine"></hr>
            <p>Sold Car</p>
        </div>
        <div class="AboutItem">
            <span>38</span>
            <hr class="FirstLine"></hr>
            <hr class="SecondLine"></hr>
            <p>Happy Customer</p>
        </div>
        <div class="AboutItem">
            <span>5</span>
            <hr class="FirstLine"></hr>
            <hr class="SecondLine"></hr>
            <p>Awards</p>
        </div>
        </div>
        </div>
        <div className="AboutRight">
        <img src={AboutImage} draggable="false" alt=""/>
        </div>
    </div>
    );
}

export default About;
