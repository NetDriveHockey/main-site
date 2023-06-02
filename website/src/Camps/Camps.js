import { React} from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Camps.css';

import repPrep from './rep_prep_img.jpeg';
import femalePrep from './female_prep_img.jpeg';
import scottJones from './scott_jones_img.jpeg';

export default function Camps() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="camps-header">Hockey Camps/Services</h1>
                <hr className="camps-line"></hr>
                <h6 className="camps-subheader">NetDrive Hockey is committed to providing the highest quality hockey camps for all age groups and genders. Check back often for updates!</h6>
                <div className="camps-offer-container">
                    <h3 className="camps-offer-header">Upcoming</h3>
                    <div className="camps-card-container">
                        <Card title={"Rep Prep"} image={repPrep} body={"NetDriveHockey will again offer our very popular end of summer hockey skills sessions in Chilliwack. The Chilliwack camps dates will be the week before CMHA try-outs. These camps"} link={"camps/rep-prep"}/>
                        <Card title={"Female Prep"} image={femalePrep} body={"Players will have fun, development and refine their skating, puck and checking skills. Goalies have professional goalie coach for 2 sessions. In addition"} link={"camps/female-prep"}/>
                        <Card title={"Scott Jones"} image={scottJones} body={"Netdrivehockey.ca was thrilled to bring Scott Jones, Vegas Golden Knights Skill and Skating Development Coach back from June 21-24, 2021. Players received 4 skill sessions led by Scott Jones"} link={"camps/scott-jones"}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Card({ title, image, body, link }) {
    return (
        <div className="camps-card">
            <h4 className="camps-card-title">{title}</h4>
            <img src={image} alt="camp" className="camps-card-image"></img>
            <p className="camps-card-description">{body}...</p>
            <a href={link} className="camps-card-link">Learn More</a>
        </div>
    );
}