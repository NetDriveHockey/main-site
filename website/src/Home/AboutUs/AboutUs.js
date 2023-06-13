import {React, useEffect, useState} from 'react';

import './AboutUs.css';


export default function AboutUs() {
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

    return isMobile ? <MobileAboutUs /> : <DesktopAboutUs />;
}

function MobileAboutUs() {
    return (
        <div className="aboutus">
            <hr className='aboutus-line'/>
            <h2 className="aboutus-header">About Us</h2>
            <div className="cards-container">
                <Card title="Testimonial" mainText="'Thank you for everything you two do for our kids. Not only on the ice but in the community. We’re lucky to have you guys around.  Thanks again!!'" footerText="Brian Maloney, Chilliwack Chiefs Head Coach and GM" />
                
                <Card title="Who We Are" mainText="Jeff and Clarke have been teaching in the public school system each for over 20 years. Working with youth is not only their passion but their career choice.
                                                  They are not just experienced hockey players but also university trained instructors and educators. Jeff and Clarke are lifelong learners having completed 4 bachelor degrees, and a masters degree in curriculum and instruction combined.  
                                                  They have coached youth from Hockey 1 all the way through to Major Midget and Jr. players." footerText="" />
                
                <Card title="What We Offer" mainContent={"List"} mainContentList={["Hockey skill development camps", "School hockey programs", "Chilliwack Spring Kick Off Tournament",
                                                                                   "Private training", "Player evaluations (association and individual)", "Coach mentoring - practice planning"]} />
            </div>
        </div>
    )
}

function DesktopAboutUs() {
    return (
        <div className="aboutus">
            <hr className='aboutus-line'/>
            <h2 className="aboutus-header">About Us</h2>
            <div className="cards-container">
                <Card title="Testimonial" mainText="'Thank you for everything you two do for our kids. Not only on the ice but in the community. We’re lucky to have you guys around.  Thanks again!!'" footerText="Brian Maloney, Chilliwack Chiefs Head Coach and GM" />
                
                <Card title="Who We Are" mainText="Jeff and Clarke have been teaching in the public school system each for over 20 years. Working with youth is not only their passion but their career choice.
                                                  They are not just experienced hockey players but also university trained instructors and educators. Jeff and Clarke are lifelong learners having completed 4 bachelor degrees, and a masters degree in curriculum and instruction combined.  
                                                  They have coached youth from Hockey 1 all the way through to Major Midget and Jr. players." footerText="" />
                
                <Card title="What We Offer" mainContent={"List"} mainContentList={["Hockey skill development camps", "School hockey programs", "Chilliwack Spring Kick Off Tournament",
                                                                                   "Private training", "Player evaluations (association and individual)", "Coach mentoring - practice planning"]} />
            </div>
        </div>
    );
}


function Card({ title, mainText, footerText, mainContent, mainContentList }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            {mainContent === "List" ? (
                <ul>{
                mainContentList.map((item) => (
                    <li>{item}</li>
                ))}
                </ul>
            ) : (<p>{mainText}</p>)
            }
            
            <footer>{footerText}</footer>
        </div>
    );
}