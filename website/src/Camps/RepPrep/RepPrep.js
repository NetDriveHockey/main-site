import { React, useState, useEffect } from 'react';

import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import RepPrepImg from '../rep_prep_img.jpeg';

import './RepPrep.css';

import FormManager from './FormManager/FormManager';


import Toast from '../../Toast/Toast';


export default function RepPrep() {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 769);

    const [toast, setToast] = useState({message: '', type: ''});

    function handleSubmitResult(success, message) {
        setToast({
            message,
            type: success ? 'success' : 'error'
        });
    }

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
            {isMobile ? <MobileRepPrep onSubmitResult={handleSubmitResult} /> : <DesktopRepPrep onSubmitResult={handleSubmitResult} />}
            <Toast message={toast.message} type={toast.type} />
            <Footer />
        </div>
    );
}

function DesktopRepPrep({onSubmitResult}) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="RepPrep">
            {showForm && <FormManager onClose={() => setShowForm(false)} onSubmitResult={onSubmitResult}/>}

            <div>
                <h1 className="rep-prep-header">Pre Season Rep-Prep Chilliwack</h1>
                <hr className="rep-prep-line"></hr>
                <h1 className="rep-prep-date">August 21st-25th  -  Chilliwack Colliseum</h1>
                <h6 className="rep-prep-subheader">NetDriveHockey will again offer our very popular end of summer hockey skills sessions in Chilliwack. The Chilliwack camps dates will be the week before CMHA try-outs. These camps have been very successful over the past 10 seasons. Each session includes 45 minutes of skills, followed by 45 min game. Total ice time 7.5 hours. This camp will get the kids prepared for rep tryouts. There will be a goalie specific coach working with the goaltenders for 2 days during the week.</h6>
                <div className="image-container-rep-prep">
                    <img src={RepPrepImg} alt="rep-prep" className="rep-prep-image"></img>
                </div>
                <div className="registration-container">
                    <div className="cost">Cost: $245.00</div>
                    <div className="vertical-line"></div>
                    <button className="register-button" onClick={() => setShowForm(true)}>Register Now</button>
                </div>
                
                <div className="rep-prep-offer-container">
                    <h3 className="rep-prep-offer-header">Details</h3>
                    <div className="rep-prep-card-container">
                        <Card title={"Age Groups"} body={["Midget (U18) - 2006/07/08 birth year", "Bantam (U15) - 2009/2010 birth year", "Pee Wee (U13) - 2011/2012 birth year", "Atom (U11) - 2013/2014 birth year"]}/>
                        <Card title={"Tentative Schedule"} body={["2013/2014 (U11) 8:00-8:45am skills - 8:45-9:30am scrimmage", "2011/2012 (U13) 9:45-10:30am skills - 10:45-11:30am scrimmage", "2009/2010 (U15) 11:45-12:30pm skills - 12:45-1:30pm scrimmage", "2006/2007/2008 (U18) 1:45-2:30 skills - 2:45-3:30pm scrimmage", "2006/2007/2008 (U18) 3:45-4:30 skills - 4:45-5:30pm scrimmage"]}/>
                    </div>
                </div>  

                <div className="rep-prep-testimonial-container">
                    <h3 className="rep-prep-offer-header">Testimonials</h3>
                    <div className="rep-prep-testimonial-card-container">
                        <Testimonial name={"Chris Reitsma"} testimonial={"Thanks for all your efforts again this year. You guys always put on a great camp. I also appreciate the words of encouragement that you offered my son. He really enjoys learning from you. Good luck to both of you this season! Best Regards,"}/>
                        <Testimonial name={"Brian Maloney, Chilliwack Chiefs - Head Coach and GM"} testimonial={"Thank you for everything you two do for our kids. Not only on the ice but in the community. We’re lucky to have you guys around. Thanks again!!"}/>
                    </div>
                </div>    
            </div>
        </div>
    );
}

function MobileRepPrep({onSubmitResult}) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="RepPrep">
            {showForm && <FormManager onClose={() => setShowForm(false)} onSubmitResult={onSubmitResult}/>}

            <div>
                <h1 className="rep-prep-header-mobile">Pre Season Rep-Prep Chilliwack</h1>
                <hr className="rep-prep-line"></hr>
                <h1 className="rep-prep-date-mobile">August 21st-25th  -  Chilliwack Colliseum</h1>
                <h6 className="rep-prep-subheader-mobile">NetDriveHockey will again offer our very popular end of summer hockey skills sessions in Chilliwack. The Chilliwack camps dates will be the week before CMHA try-outs. These camps have been very successful over the past 10 seasons. Each session includes 45 minutes of skills, followed by 45 min game. Total ice time 7.5 hours. This camp will get the kids prepared for rep tryouts. There will be a goalie specific coach working with the goaltenders for 2 days during the week.</h6>
                <div className="image-container-rep-prep-mobile">
                    <img src={RepPrepImg} alt="rep-prep" className="rep-prep-image-mobile"></img>
                </div>
                <div className="registration-container-mobile">
                    <div className="cost-mobile">Cost: $245.00</div>
                    <div className="vertical-line-mobile"></div>
                    <button className="register-button-mobile" onClick={() => setShowForm(true)}>Register Now</button>
                </div>
                
                <div className="rep-prep-offer-container">
                    <h3 className="rep-prep-offer-header">Details</h3>
                    <div className="rep-prep-card-container-mobile">
                        <MobileCard title={"Age Groups"} body={["Midget (U18) - 2006/07/08 birth year", "Bantam (U15) - 2009/2010 birth year", "Pee Wee (U13) - 2011/2012 birth year", "Atom (U11) - 2013/2014 birth year"]}/>
                        <MobileCard title={"Tentative Schedule"} body={["2013/2014 (U11) 8:00-8:45am skills - 8:45-9:30am scrimmage", "2011/2012 (U13) 9:45-10:30am skills - 10:45-11:30am scrimmage", "2009/2010 (U15) 11:45-12:30pm skills - 12:45-1:30pm scrimmage", "2006/2007/2008 (U18) 1:45-2:30 skills - 2:45-3:30pm scrimmage", "2006/2007/2008 (U18) 3:45-4:30 skills - 4:45-5:30pm scrimmage"]}/>
                    </div>
                </div>  

                <div className="rep-prep-testimonial-container">
                    <h3 className="rep-prep-offer-header">Testimonials</h3>
                    <div className="rep-prep-testimonial-card-container-mobile">
                        <MobileTestimonial name={"Chris Reitsma"} testimonial={"Thanks for all your efforts again this year. You guys always put on a great camp. I also appreciate the words of encouragement that you offered my son. He really enjoys learning from you. Good luck to both of you this season! Best Regards,"}/>
                        <MobileTestimonial name={"Brian Maloney, Chilliwack Chiefs - Head Coach and GM"} testimonial={"Thank you for everything you two do for our kids. Not only on the ice but in the community. We’re lucky to have you guys around. Thanks again!!"}/>
                    </div>
                </div>    
            </div>
        </div>
    );
}


// TODO: Create a form for registering

function Card({ title, body }) {
    return (
        <div className="rep-prep-card">
            <h4 className="rep-prep-card-title">{title}</h4>
            <ul className="rep-prep-card-description">
                {body.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

function MobileCard({ title, body }) {
    return (
        <div className="rep-prep-card-mobile">
            <h4 className="rep-prep-card-title-mobile">{title}</h4>
            <ul className="rep-prep-card-description-mobile">
                {body.map((item, index) => <li className="rep-prep-card-description-item-mobile" key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

function Testimonial({ name, testimonial }) {
    return (
        <div className="rep-prep-testimonial">
            <p className="rep-prep-testimonial-description">{testimonial}</p>
            <h6 className="rep-prep-testimonial-name">- {name}</h6>
        </div>
    );
}

function MobileTestimonial({ name, testimonial }) {
    return (
        <div className="rep-prep-testimonial-mobile">
            <p className="rep-prep-testimonial-description">{testimonial}</p>
            <h6 className="rep-prep-testimonial-name">- {name}</h6>
        </div>
    );
}
  
