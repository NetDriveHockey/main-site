import {React, useState, useEffect} from 'react';

import './QuickLinks.css';

import femaleCamp from './femaleCamp.jpeg';
import vegasCamp from './vegas.png';
import springKickoff  from './springKickoffLogo.jpeg';
import extra from './extra.jpeg';

export default function QuickLinks() {
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

    return isMobile ? <MobileQuickLinks /> : <DesktopQuickLinks />;
}

function MobileQuickLinks() {
    return (
        <div className="quicklinks">
            <hr className='quicklinks-line'/>
            <h2 className="quicklinks-header">Quick Links</h2>
            <div className="links-container">
                <Card title={"Spring Kick Off Tournament"} image={springKickoff} buttonText={"Learn More"} buttonLink={"/tournaments/springkickoff"} />
                <Card title={"Spring/Summer Camp Info"} image={extra} buttonText={"Learn More"} buttonLink={"/camps/summer"} />
                <Card title={"Female Prep Camp"} image={femaleCamp} buttonText={"Learn More"} buttonLink={"/camps/femaleprep"} />
                <Card title={"Scott Jones Camp"} image={vegasCamp} buttonText={"Learn More"} buttonLink={"/tournaments/scottjones"} />
            </div>
        </div>
    );
}

function DesktopQuickLinks() {
    return (
        <div className="quicklinks">
            <hr className='quicklinks-line'/>
            <h2 className="quicklinks-header">Quick Links</h2>
            <div className="links-container">
                <Card title={"Spring Kick Off Tournament"} image={springKickoff} buttonText={"Learn More"} buttonLink={"/tournaments/springkickoff"} />
                <Card title={"Spring/Summer Camp Info"} image={extra} buttonText={"Learn More"} buttonLink={"/camps/summer"} />
                <Card title={"Female Prep Camp"} image={femaleCamp} buttonText={"Learn More"} buttonLink={"/camps/femaleprep"} />
                <Card title={"Scott Jones Camp"} image={vegasCamp} buttonText={"Learn More"} buttonLink={"/tournaments/scottjones"} />
            </div>
        </div>
    );
}

function Card({ title, image, buttonText, buttonLink }) {
    return (
        <div className="link-card">
            <h2 className='link-card-title'>{title}</h2>
            <img className="link-card-img" src={image} alt={title} />
            <button className='link-card-button'><a href={buttonLink}>{buttonText}</a></button>
        </div>
    );
}