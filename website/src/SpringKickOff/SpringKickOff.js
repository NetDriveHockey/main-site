import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './SpringKickOff.css';

import sponsor1img from './sponsor1.jpeg';
import sponsor2img from './sponsor2.jpeg';
import sponsor3img from './sponsor3.jpeg';
import sponsor4img from './sponsor4.jpeg';

import springKickoffLogo from './spring-kickoff-img.jpeg';
import tournamentTeam1 from './tournament-team1.jpeg';
import tournamentTeam2 from './tournament-team2.jpeg';

export default function SpringKickOff() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="sko-header">Spring Kickoff Tournament</h1>
                <hr className="sko-line"></hr>
                
                <h3 className="sko-offer-header">2023 Spring Kick Off Tournament Information - Mar 31-April 2nd, 2023</h3>
                <h6 className="sko-subheader">The Spring Kick Off Tournament is hosted by Netdrivehockey.ca and the Chilliwack Jr. Chiefs each spring in beautiful Chilliwack BC. The 12th Spring Kick Off Tournament will be March 31-April 2nd, 2023. This is for AA/A teams in the 2011, 2012, 2013, 2014, 2015, 2016 divisions (AAA teams can play up an age group). Every age group will be guaranteed 4 games. Game slots will be 75min. Please email for more information or call Clarke Wismer 604-217-6116. Each year we host approximately 45 teams. We look forward to hosting you again in Chilliwack.</h6>
                <div className="image-container">
                    <img src={springKickoffLogo} alt="rep-prep" className="rep-prep-image"></img>
                </div>
                <div className="registration-container">
                    <div className="cost">Cost: $1750/Team</div>
                    <div className="vertical-line"></div>
                    <button className="register-button" onClick={() => (null)}>Register Now</button>
                </div>
                <div className="sko-offer-container">
                    <h3 className="sko-offer-header">Info</h3>
                    <div className="sko-card-container">
                        <Card title={"Spring Kick Off Website"} body={"For Spring Kick Off Tournament website, including schedule, and standings click the link below"} link={"/"}/>
                        <WaiverCard title={"Waiver"} body={"Download and upload the 2023 Spring Kick Off Waiver here"} link={"https://files.snappages.site/6fdnt6l7u5/assets/files/SpringKick-off-2023-Waiver.docx-Google-D-67.pdf"}/>
                    </div>
                </div>
                <div className="sko-sponsor-container">
                    <h3 className="sko-offer-header">Sponsors</h3>
                    <div className="sko-sponsor-img-container">
                        <img src={sponsor1img} alt="sponsor1" className="sko-sponsor-img"></img>
                        <img src={sponsor2img} alt="sponsor2" className="sko-sponsor-img"></img>
                        <img src={sponsor3img} alt="sponsor3" className="sko-sponsor-img"></img>
                        <img src={sponsor4img} alt="sponsor4" className="sko-sponsor-img"></img>
                    </div>
                </div>
                <div className="sko-past-attendees-container">
                    <h3 className="sko-offer-header">Previous teams that have attended</h3>
                    <div className="sko-past-attendees-card-container">
                        <AttendeesCard title={"2023"} subheader={"49 teams (2011-2015) total from the following associations"} body={["Chilliwack Jr Chiefs", "Chilliwack Jr Jets", "West Coast Wolverines", "Silverbacks", "BC Kodiaks", "BC Kraken", "BC Lightning", "Texcan Top Guns", "Lake City Monsters", "Snipers",
                                                                                                                                    "Kelowna Heat", "Fraser Valley Canadians", "Total Ice Titans", "Whitehorse Huskies", "Wukong - China", "Vancouver Selects", "Revelstoke Ravens", "Prince George Wildcats", "Prince George Thunderhawks",
                                                                                                                                    "Northern Ice Flyers", "Surrey Rebels", "WestCan Warriors", "Eagles Hockey Club", "Delta Lightning", "Delta Sundevils", "Kamloops Jr Blazers", "Port Coquitlam Jr Trailblazers", "Prince George Whalers"]}/>

                        <AttendeesCard title={"2022"} subheader={"38 teams (2010-2014) in total from the following associations"} body={["Chilliwack Jr Chiefs", "Chilliwack Jr Jets", "Fraser Valley Kings", "Jr Warriors", "Lake City Monsters", "Snipers", "BC Kodiaks", "West Coast Wolverines", "BC Lightning", "Kelowna Heat", "Island Outlaws",
                                                                                                                                        "Delta Lightning", "Jr Blazers", "Northern Ice Flyers", "Vancouver Selects"]} />

                        <AttendeesCard title={"2019"} subheader={"43 teams (2006-2011) in total from the following associations"} body={["Chilliwack Jr Chiefs", "BC Kodiaks", "Okanagan Jr Warrios", "Abbotsford Jr Pilots", "Kelowna Heat", "Vancouver Warbirds", "Kamloops Wolves", "Total Ice Titans", "HP Wings", "Silverbacks", "Fraser Valley Kings",
                                                                                                                                        "Snipers", "Jr Sockeyes", "BC Knights", "Okanagan Lightning", "North Central Pitbulls", "Jr. Eagles", "West Coast Prospects", "Kootenay Avalanche"]} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Card({ title, body, link }) {
    return (
        <div className="sko-card">
            <h4 className="sko-card-title">{title}</h4>
            <p className="sko-card-description">{body}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="sko-card-link">Visit Tournament Site</a>
        </div>
    );
}

function AttendeesCard({ title, subheader, body }) {
    return (
        <div className="sko-card">
            <div className="sko-card-header">
                <h4 className="sko-card-title">{title}</h4>
                <h6 className="sko-card-subheader">{subheader}</h6>
            </div>
            <div className="sko-card-body">
                <ul className="sko-card-list">
                    {body.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}

function WaiverCard({ title, body, link }) {
    return (
        <div className="sko-card">
            <h4 className="sko-card-title">{title}</h4>
            <p className="sko-card-description">{body}</p>
            <div className='waiver-row'>
                <a href={link} target="_blank" rel="noopener noreferrer" className="sko-card-link">Waiver</a>
                <div className="sko-vertical-line"></div>
                <input type="file" id="fileInput"></input>
            </div>
            
        </div>
    );
}