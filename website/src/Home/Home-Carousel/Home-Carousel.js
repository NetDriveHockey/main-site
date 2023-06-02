import {React} from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import img1 from './img1.jpeg'; 
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';    
import img6 from './img6.jpeg';
import img7 from './img7.jpeg';
import img8 from './img8.jpeg';
import img9 from './img9.jpeg';
import img10 from './img10.jpeg';
import img11 from './img11.jpeg';
import img12 from './img12.jpeg';
import img13 from './img13.jpeg';

import './Home-Carousel.css';

export default function HomeCarousel() {
    return (
        <div className="home">
            <Carousel autoPlay infiniteLoop showArrows={true}>
                <div>
                    <img src={img1} alt="Pic 1" />
                </div>
                <div>
                    <img src={img2} alt="Pic 2" />
                </div>
                <div>
                    <img src={img3} alt="Pic 3" />
                </div>
                <div>
                    <img src={img4} alt="Pic 4" />
                </div>
                <div>
                    <img src={img5} alt="Pic 5" />
                </div>
                <div>
                    <img src={img6} alt="Pic 6" />
                </div>
                <div>
                    <img src={img7} alt="Pic 7" />
                </div>
                <div>
                    <img src={img8} alt="Pic 8" />
                </div>
                <div>
                    <img src={img9} alt="Pic 9" />
                </div>
                <div>
                    <img src={img10} alt="Pic 10" />
                </div>
                <div>
                    <img src={img11} alt="Pic 11" />
                </div>
                <div>
                    <img src={img12} alt="Pic 12" />
                </div>
                <div>
                    <img src={img13} alt="Pic 13" />
                </div>
            </Carousel>
        </div>
    );
}