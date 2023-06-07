import { React} from 'react';

import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import './FemalePrep.css';

import FemalePrepImg from '../female_prep_img.jpeg'

export default function FemalePrep() {
    return (
        <div className="FemalePrep">
            <Navbar />

            <div>
                <h1 className="female-prep-header">Female Prep Camp</h1>
                <hr className="female-prep-line"></hr>
                <h1 className="female-prep-date">Aug/Sept 2023  -  Check back for registration info in Spring 2023</h1>
                <h6 className="female-prep-subheader">Players will have fun, development and refine their skating, puck and checking skills over the 5 day camp. Goalies have professional goalie coach for 2 sessions. In addition, players will partake in valuable scrimmage like situations. All participants have to be experienced hockey players. This camp accomodates C players through to Rep and U18 AAA Female players.</h6>
                <div className="image-container">
                    <img src={FemalePrepImg} alt="female-prep" className="female-prep-image"></img>
                </div>
                <div className="registration-container">
                    <div className="cost">Cost: $285.00</div>
                    <div className="vertical-line"></div>
                    <button className="register-button" onClick={() => (null)}>Registration Opens Soon!</button>
                </div>
                
                <div className="female-prep-offer-container">
                    <h3 className="female-prep-offer-header">Tentative Camp Schedule</h3>
                    <div className="female-prep-card-container">
                        <Card title={"Group 1"} body={["Age groups 2013-2010", "8.75 total hours of ice", "8:30-9:30am Skills", "9:30-10:15am Scrimmage"]}/>
                        <Card title={"Group 2"} body={["Age groups 2009-2006", "8.75 total hours of ice", "10:30-11:30am Skills", "11:45-12:30pm Scrimmage"]}/>
                    </div>
                </div>  

                
            </div>
            <Footer />
        </div>
    );
}

function Card({ title, body }) {
    return (
        <div className="female-prep-card">
            <h4 className="female-prep-card-title">{title}</h4>
            <ul className="female-prep-card-description">
                {body.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}