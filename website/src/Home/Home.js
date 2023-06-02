import React from 'react';
import './Home.css';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HomeCarousel from './Home-Carousel/Home-Carousel';
import AboutUs from './AboutUs/AboutUs';
import QuickLinks from './QuickLinks/QuickLinks';


export default function Home() {
    return (
        <div>
            <Navbar />
            <HomeCarousel />
            <div>
                <h3 className="home-header-subtitle">Offering professional hockey camps and tournaments since 2012</h3> 
            </div>
            <AboutUs />
            <QuickLinks />
            <Footer />
        </div>
    );
}
