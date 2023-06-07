import React, { useState } from 'react';
import './Navbar.css';

import logo from './NetDriveLogo.jpeg';

export default function Navbar() {
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
