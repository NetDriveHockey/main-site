import { React} from 'react';

import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import './ScottJones.css';

import ScottJonesImg from '../scott_jones_img.jpeg'

export default function ScottJones() {
    return (
        <div>
            <Navbar />

            <div>
                <h1 className="scott-jones-header">Advanced Skills Camp with Scott Jones of the NHL's Vegas Golden Knights</h1>
                <hr className="scott-jones-line"></hr>
                <h1 className="scott-jones-date">Check again soon for potential 2023 dates</h1>
                <h6 className="scott-jones-subheader">Netdrivehockey.ca was thrilled to bring Scott Jones, Vegas Golden Knights Skill and Skating Development Coach back from June 21-24, 2021. Players received 4 skill sessions led by Scott Jones. Scott has worked with the Washington Capitals, London Knights and Sarnia Sting of the OHL, as well as his current role with the Vegas Golden Knights (NHL). This was our 4th year bringing Scott to BC. We had such great feedback from players and parents last year that we made it a priority to bring him back.</h6>
                <div className="image-container">
                    <img src={ScottJonesImg} alt="scott-jones" className="scott-jones-image"></img>
                </div>
                <div className="registration-container">
                    <div className="cost">Cost: TBD</div>
                    <div className="vertical-line"></div>
                    <button className="register-button" onClick={() => (null)}>Registration TBD</button>
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
            <Footer />
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

function Testimonial({ name, testimonial }) {
    return (
        <div className="scott-jones-testimonial">
            <p className="scott-jones-testimonial-description">{testimonial}</p>
            <h6 className="scott-jones-testimonial-name">- {name}</h6>
        </div>
    );
}