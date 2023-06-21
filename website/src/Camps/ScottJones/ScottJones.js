import { React, useEffect, useState } from 'react';

import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import './ScottJones.css';

import ScottJonesImg from '../scott_jones_img.jpeg'

import Toast from '../../Toast/Toast';

export default function ScottJones() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 769);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div>
            <Navbar />
            {isMobile ? <MobileScottJones /> : <DesktopScottJones />}
            <Footer />
        </div>
    );
}

function DesktopScottJones() {
    const [toast, setToast] = useState({message: '', type: ''});

    return (
        <div>
            <div>
                <h1 className="scott-jones-header">Advanced Skills Camp with Scott Jones of the NHL's Vegas Golden Knights</h1>
                <hr className="scott-jones-line"></hr>
                <h1 className="scott-jones-date">Check again soon for potential 2023 dates</h1>
                <h6 className="scott-jones-subheader">Netdrivehockey.ca was thrilled to bring Scott Jones, Vegas Golden Knights Skill and Skating Development Coach back from June 21-24, 2021. Players received 4 skill sessions led by Scott Jones. Scott has worked with the Washington Capitals, London Knights and Sarnia Sting of the OHL, as well as his current role with the Vegas Golden Knights (NHL). This was our 4th year bringing Scott to BC. We had such great feedback from players and parents last year that we made it a priority to bring him back.</h6>
                <div className="image-container-camp">
                    <img src={ScottJonesImg} alt="scott-jones" className="scott-jones-image"></img>
                </div>
                <div className="registration-container">
                    <div className="cost">Cost: TBD</div>
                    <div className="vertical-line"></div>
                    <button className="register-button" onClick={() => (setToast({message: 'Check back again soon', type: 'success'}))}>Registration TBD</button>
                </div>
                
                <div className="scott-jones-offer-container">
                    <h3 className="scott-jones-offer-header">Camp Details</h3>
                    <div className="scott-jones-card-container">
                        <Card title={"Age Groups"} body={["TBD"]}/>
                        <Card title={"Schedule"} body={["TBD"]}/>
                    </div>
                </div>  

                <div className="scott-jones-testimonial-container">
                    <h3 className="scott-jones-offer-header">Testimonials</h3>
                    <div className="scott-jones-testimonial-card-container">
                        <Testimonial name={"Lindsay, parent"} testimonial={"My boys were impressed with Scott's stride tips and his different approaches from their previous training.  They will be back next year if you can convince Scott.  Thanks for making this such a great opportunity for Chilliwack hockey players." }/>
                        <Testimonial name={"Raelene, parent who's son is playing Jr A"} testimonial={"Thank you so much for organizing it!! I know my boys loved it!  I also know that one kid in particular was very happy to be in it and got as much as he could out of Scott!  Thanks again! Especially on behalf of Jonathan!"}/>
                        <Testimonial name={"Artice from the Chilliwack Progress"} testimonial={<a style={{textDecoration: "none", color: 'black'}} href="https://www.theprogress.com/sports/las-vegas-golden-knights-coach-leads-chilliwack-hockey-camp/">Click to Read Article</a>}/>
                    </div>
                </div> 

                
            </div>
            <Toast message={toast.message} type={toast.type} />
        </div>
    );
}

function MobileScottJones() {
    const [toast, setToast] = useState({message: '', type: ''});

    return (
        <div>
            <div>
                <h1 className="scott-jones-header-mobile">Advanced Skills Camp with Scott Jones of the NHL's Vegas Golden Knights</h1>
                <hr className="scott-jones-line"></hr>
                <h1 className="scott-jones-date-mobile">Check again soon for potential 2023 dates</h1>
                <h6 className="scott-jones-subheader-mobile">Netdrivehockey.ca was thrilled to bring Scott Jones, Vegas Golden Knights Skill and Skating Development Coach back from June 21-24, 2021. Players received 4 skill sessions led by Scott Jones. Scott has worked with the Washington Capitals, London Knights and Sarnia Sting of the OHL, as well as his current role with the Vegas Golden Knights (NHL). This was our 4th year bringing Scott to BC. We had such great feedback from players and parents last year that we made it a priority to bring him back.</h6>
                <div className="image-container-camp-mobile">
                    <img src={ScottJonesImg} alt="scott-jones" className="scott-jones-image-mobile"></img>
                </div>
                <div className="registration-container-mobile">
                    <div className="cost-mobile">Cost: TBD</div>
                    <div className="vertical-line-mobile"></div>
                    <button className="register-button-mobile" onClick={() => (setToast({message: 'Check back again soon', type: 'success'}))}>Registration TBD</button>
                </div>
                
                <div className="scott-jones-offer-container">
                    <h3 className="scott-jones-offer-header">Camp Details</h3>
                    <div className="scott-jones-card-container-mobile">
                        <MobileCard title={"Age Groups"} body={["TBD"]}/>
                        <MobileCard title={"Schedule"} body={["TBD"]}/>
                    </div>
                </div>  

                <div className="scott-jones-testimonial-container">
                    <h3 className="scott-jones-offer-header">Testimonials</h3>
                    <div className="scott-jones-testimonial-card-container">
                        <MobileTestimonial name={"Lindsay, parent"} testimonial={"My boys were impressed with Scott's stride tips and his different approaches from their previous training.  They will be back next year if you can convince Scott.  Thanks for making this such a great opportunity for Chilliwack hockey players." }/>
                        <MobileTestimonial name={"Raelene, parent who's son is playing Jr A"} testimonial={"Thank you so much for organizing it!! I know my boys loved it!  I also know that one kid in particular was very happy to be in it and got as much as he could out of Scott!  Thanks again! Especially on behalf of Jonathan!"}/>
                        <MobileTestimonial name={"Artice from the Chilliwack Progress"} testimonial={<a style={{textDecoration: "none", color: 'black'}} href="https://www.theprogress.com/sports/las-vegas-golden-knights-coach-leads-chilliwack-hockey-camp/">Click to Read Article</a>}/>
                    </div>
                </div> 

                
            </div>
            <Toast message={toast.message} type={toast.type} />
        </div>
    );
}

function Card({ title, body }) {
    return (
        <div className="scott-jones-card">
            <h4 className="scott-jones-card-title">{title}</h4>
            <ul className="scott-jones-card-description">
                {body.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

function MobileCard({ title, body }) {
    return (
        <div className="scott-jones-card-mobile">
            <h4 className="scott-jones-card-title-mobile">{title}</h4>
            <ul className="scott-jones-card-description-mobile">
                {body.map((item, index) => <li className="scott-jones-card-description-item-mobile" key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

function Testimonial({ name, testimonial }) {
    return (
        <div className="scott-jones-testimonial">
            <p className="scott-jones-testimonial-description">{testimonial}</p>
            <h6 className="scott-jones-testimonial-name">- {name}</h6>
        </div>
    );
}

function MobileTestimonial({ name, testimonial }) {
    return (
        <div className="scott-jones-testimonial-mobile">
            <p className="scott-jones-testimonial-description">{testimonial}</p>
            <h6 className="scott-jones-testimonial-name">- {name}</h6>
        </div>
    );
}