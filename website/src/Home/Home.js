import React, {useState, useEffect } from 'react';
import './Home.css';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HomeCarousel from './Home-Carousel/Home-Carousel';
import AboutUs from './AboutUs/AboutUs';
import QuickLinks from './QuickLinks/QuickLinks';

export default function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 769);
      });
  
      return () => {
        window.removeEventListener('resize', () => {
          setIsMobile(window.innerWidth < 769);
        });
      };
    }, []);
  
    return isMobile ? <MobileHome /> : <DesktopHome />;
}

function DesktopHome() {
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

function MobileHome() {
    return (
        <div>
            <Navbar />
            <div>
                <h3 className="home-header-subtitle">Offering professional hockey camps and tournaments since 2012</h3> 
            </div>
            <HomeCarousel />
            <AboutUs />
            <QuickLinks />
            <Footer />
        </div>
    );
}