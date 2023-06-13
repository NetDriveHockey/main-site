import React, { useState, useEffect } from 'react';
import './Navbar.css';

import logo from './NetDriveLogo.jpeg';

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
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
  
    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
  }


function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpenCamps, setIsOpenCamps] = useState(false);
    const menuIcon = isMenuOpen ? <FaTimes /> : <FaBars />;

    return (
        <div className="navbar">

            <div className="navbar-title-row">
                <div className="navbar-title">
                    <img className="navbar-title-logo" src={logo} alt="NetDriveHockey Logo"></img>NetDriveHockey
                </div>
                <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {menuIcon}
                </button>
            </div>

            {isMenuOpen && (
                <div className="navbar-items-mobile">
                    <div className='navbar-item-mobile'> <a className="navbar-fields-normal-a" href="/">Home</a></div>
                    <div className='navbar-item-mobile'><a className="navbar-fields-normal-a" href="/instructors">Instructors</a></div>
                    <div className='navbar-item-mobile'> 
                        <div className="navbar-fields-normal-a" onClick={() => setIsOpenCamps(!isOpenCamps)}>Camps</div>
                        {isOpenCamps && (
                            <div className="dropdown-menu-camps-mobile"> 
                                <a href="/camps/rep-prep">Rep Prep Chilliwack</a>
                                <a href="/camps/female-prep">Female Prep</a>
                                <a href="/camps/scott-jones">Scott Jones</a>
                            </div>
                        )}
                    </div>
                    <div className='navbar-item-mobile'><a className="navbar-fields-normal-a" href="/spring-kick-off">Spring Kick Off</a></div> 
                    <div className='navbar-item-mobile'><a className="navbar-fields-normal-a" href="/alumni">Alumni</a></div>
                    <div className='navbar-item-contact-mobile'><a className="navbar-fields-contact-a" href="/contact">Contact</a></div>
                </div>
            )}
        </div>
    );
}


function DesktopNavbar() {
    const [isOpenCamps, setIsOpenCamps] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-title"><img className="navbar-title-logo" src={logo} alt="NetDriveHockey Logo"></img>NetDriveHockey</div>
            <div className="navbar-fields">
                <div className='navbar-item'> <a className="navbar-fields-normal-a" href="/">Home</a></div>
                <div className='navbar-item'><a className="navbar-fields-normal-a" href="/instructors">Instructors</a></div>
                <div className='navbar-item' onMouseEnter={() => setIsOpenCamps(true)} onMouseLeave={() => setIsOpenCamps(false)}> 
                    <a className="navbar-fields-normal-a" href="/camps">Camps</a>
                    {isOpenCamps && (
                        <div className="dropdown-menu-camps"> 
                            <a href="/camps/rep-prep">Rep Prep Chilliwack</a>
                            <a href="/camps/female-prep">Female Prep</a>
                            <a href="/camps/scott-jones">Scott Jones</a>
                        </div>
                    )}
                </div>
                <div className='navbar-item'><a className="navbar-fields-normal-a" href="/spring-kick-off">Spring Kick Off</a></div> 
                <div className='navbar-item'><a className="navbar-fields-normal-a" href="/alumni">Alumni</a></div>
                <div className='navbar-item-contact'><a className="navbar-fields-contact-a" href="/contact">Contact</a></div>
            </div>
        </div>
    );
}
