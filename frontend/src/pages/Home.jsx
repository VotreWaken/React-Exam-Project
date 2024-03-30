import React from 'react';
import SearchCarComponent from '../components/SearchCarInput/SearchCarComponent';

// Link Styles
import '../styles/Home.css';
import RecommendationSlider from '../components/RecommendationCars/RecommendationSlider';
import CompareCarsHandler from '../components/CompareCars/CompareCarsHandler';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <div className='HomeWrapper'>

            {/* Hero Section */}
            <div className="Hero">

                {/* Hero Section Title */}
                <div className="Hero__title">
                    <h1>Find your dream car</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div>

                {/* Hero Section Search Car Component */}
                <SearchCarComponent/>
            </div>

            {/* Recommendation Section */}

            <div className="Recommendations">
                <h2 className="Recommended-Title">Recommended Cars</h2>
                <RecommendationSlider/>
            </div>

            {/* Compare Section */}
            <div className="CompareCars">
                <h2 className="CompareCars-Title">Compare Cars</h2>
                <CompareCarsHandler/>
                <button class="CompareBtn">Compare Cars</button>
            </div>
            

            {/* About Section */}
            <About/>

            {/* Contact Section */}
            <Contact/>

            {/* Partners Section */}

        </div>
    );
}

export default Home;
