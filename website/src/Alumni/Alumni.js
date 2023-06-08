import React from 'react';
import CountUp from 'react-countup';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Alumni.css';

import BraydenCrampton from './Alumni_Images/Brayden_Crampton.jpeg';
import ZachBenson from './Alumni_Images/Zach_Benson.jpeg';
import DiegoButtazoni from './Alumni_Images/Diego_Buttazoni.jpeg';
import DylanBrooks from './Alumni_Images/Dylan_Brooks.jpeg';
import EthanWilloughby from './Alumni_Images/Ethan_Willoughby.jpeg';
import GrahamSward from './Alumni_Images/Graham_Sward.jpeg';
import GreyeRampton from './Alumni_Images/Greye_Rampton.jpeg';
import JonathanKrahn from './Alumni_Images/Jonathan_Krahn.jpeg';
import KaleTaylor from './Alumni_Images/Kale_Taylor.jpeg';
import KateKlassen from './Alumni_Images/Kate_Klassen.jpeg';
import MirkoButtazoni from './Alumni_Images/Mirko_Buttazoni.jpeg';

export default function Alumni() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="alumni-header">Alumni</h1>
                <hr className="alumni-line"></hr>
                <h3 className="alumni-subheader">NetDrive Hockey is proud to have been involved the following players hockey journey</h3>
                <div className="alumni-number-row">
                    <div className="alumni-number-card">
                        <CountUp end={1} duration={3.5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className="alumni-number" ref={countUpRef} />
                                    <p className="alumni-number-subheader">NHL Players</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="alumni-number-card">
                        <CountUp end={2} duration={3.5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className="alumni-number" ref={countUpRef} />
                                    <p className="alumni-number-subheader">NCAA/USports Players</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="alumni-number-card">
                        <CountUp end={4} duration={3.5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className="alumni-number" ref={countUpRef} />
                                    <p className="alumni-number-subheader">WHL Players</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="alumni-number-card">
                        <CountUp end={5} duration={3.5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className="alumni-number" ref={countUpRef} />
                                    <p className="alumni-number-subheader">Junior A Players</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>
                <div className="alumni-card-container">
                    <Card title={"Zach Benson"} image={ZachBenson} footer={"WHL Winnipeg Ice, Team Canada U17"}/>
                    <Card title={"Diego Buttazoni"} image={DiegoButtazoni} footer={"WHL Portland Winterhawks"}/>
                    <Card title={"Dylan Brooks"} image={DylanBrooks} footer={"BCHL West Kelowna Warriors"}/>
                    <Card title={"Ethan Willoughby"} image={EthanWilloughby} footer={"BCHL Trail Smoke Eaters"}/>
                    <Card title={"Graham Sward"} image={GrahamSward} footer={"NHL Nashville Predators, WHL Winnipeg Ice"}/>
                    <Card title={"Greye Rampton"} image={GreyeRampton} footer={"BCHL Cowichan Capitals"}/>
                    <Card title={"Jonathan Krahn"} image={JonathanKrahn} footer={"USports Trinity Western University"}/>
                    <Card title={"Kale Taylor"} image={KaleTaylor} footer={"SJHL La Ronge Ice Wolves"}/>
                    <Card title={"Kate Klassen"} image={KateKlassen} footer={"USports Trinity Western University"}/>
                    <Card title={"Mirko Buttazoni"} image={MirkoButtazoni} footer={"AJHL Brooks Bandits, BCHL Coquitlan Express"}/>
                    <Card title={"BraydenCrampton"} image={BraydenCrampton} footer={"WHL Spokane Chiefs"}/> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Card({ title, image, footer }) {
    return (
        <div className="alumni-card">
            <h2 className="alumni-card-header">{title}</h2>
            <img src={image} alt={title} className="alumni-card-image" />
            <div className="alumni-card-footer">{footer}</div>
        </div>
    );
}
