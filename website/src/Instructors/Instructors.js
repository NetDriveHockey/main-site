import React from "react";

import "./Instructors.css";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import clarke from "./clarke_headshot.jpeg";
import jeff from "./jeff_headshot.jpeg";

export default function Instructors() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="instructors-header">Instructors</h1>
                <hr className="instructors-line"></hr>
                <div className="instructors-cards">
                    <Card title={"Clarke Wismer"} image={clarke} body={"Clarke Wismer has been teaching for 23 years in SD #34, and at Robert Bateman Secondary since 2005.  He currently teaches Law 12,  coordinates the Golf Academy and runs the school Hockey Program. He has coached both boys and girls basketball during his time as an educator.   Clarke has been involved in hockey as a player and coach for over 40 years.  As a player he began playing Jr. Hockey in Southern Ontario at the age of 14 finishing with 2 years of Jr.B in Thunder Bay, ON while attending Lakehead University.  Over the past 12 years he has coached all levels in the Chilliwack Minor Hockey Association. Clarke has run youth development camps for 15 years and is the founder and director of the Chilliwack Jr. Chiefs Spring Hockey program in Chilliwack from 2010 until 2020, and manager of the Chilliwack Chiefs U18/U16/U15 spring program in the BCSHL.   For the past 11 years Clarke and Jeff have run the Robert Bateman Secondary School hockey program in Abbotsford. Their High School team also won the BC Hockey High School Tier 2 championship in 2015 and 2022.    Clarke has his Hockey Canada High Performance Coach certification. Currently, Clarke is a skills coach for the Chilliwack Minor Hockey Association.   Netdrivehockey has recently formed a mentorship with Scott Jones of the Vegas Golden Knights.  Scott is the skills and skating development coach of the NHL's Vegas Golden Knights, he is also the skills coach for the OHL's Sarnia Sting."} />
                    <Card title={"Jeff Dods"} image={jeff} body={"Jeff Dods has been teaching for 25 years in SD #34 all at Robert Bateman Secondary.  He currently is the Career Counsellor for the school and has been a Provincial champion girls rugby coach.  Two members of that program went on to play National level rugby for Team Canada.   Jeff has been involved with hockey for over 40 years as a player and coach.  He played Minor Hockey in Prince George. Played Junior A Hockey in Kelowna and captained the Prince George Spruce Kings. He played Varsity University Hockey at UBC where he was assistant captain and awarded the teams best defencemen.  Jeff also represented Canada in Senior AAA at Four Nations Tournament in Holland. For the past 11 years Clarke and Jeff have run the Robert Bateman Secondary School hockey program in Abbotsford. Their High School team also won the BC Hockey High School Tier 2 championship in 2015 and 2022.  In addition, Jeff runs several youth development camps throughout the year.   Jeff has a Masters Degree with a focus in Curriculum and Instruction.  Jeff is a certified Hockey Canada Development 1 coach.  Jeff is currently a skills coach for the Chilliwack Minor Hockey Association.  Netdrivehockey has recently formed a mentorship with Scott Jones of the Vegas Golden Knights.  Scott is the skills and skating development coach of the NHL's Vegas Golden Knights, he is also the skills coach for the OHL's Sarnia Sting."} />
                </div>
            </div>
            <Footer />

        </div>
    );
}
                        
function Card({ title, image, body }) {
    return (
        <div className="instructors-card">
            <h2 className='instructors-card-title'>{title}</h2>
            <div className="card-content">
                <img className="instructors-card-img" src={image} alt={title} />
                <p className="instructors-card-body">{body}</p>
            </div>
        </div>
    );
}

