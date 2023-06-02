import React, { useState } from 'react';
import './Navbar.css';

import logo from './NetDriveLogo.jpeg';

export default function Navbar() {
    const [isOpenCamps, setIsOpenCamps] = useState(false);
    const [isOpenTournaments, setIsOpenTournaments] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-title"><img className="navbar-title-logo" src={logo} alt="NetDriveHockey Logo"></img>NetDriveHockey</div>
            <div className="navbar-fields">
                <div className='navbar-item'> <a className="navbar-fields-normal-a" href="/">Home</a></div>
                <div className='navbar-item'><a className="navbar-fields-normal-a" href="instructors">Instructors</a></div>
                <div className='navbar-item' onMouseEnter={() => setIsOpenCamps(true)} onMouseLeave={() => setIsOpenCamps(false)}> 
                    <a className="navbar-fields-normal-a" href="camps">Camps</a>
                    {isOpenCamps && (
                        <div className="dropdown-menu-camps"> 
                            <a href="/camps/camp1">Rep Prep Chilliwack</a>
                            <a href="/camps/camp2">Female Prep</a>
                            <a href="/camps/camp3">Scott Jones</a>
                        </div>
                    )}
                </div>
                <div className='navbar-item' onMouseEnter={() => setIsOpenTournaments(true)} onMouseLeave={() => setIsOpenTournaments(false)}> 
                    <a className="navbar-fields-normal-a" href="tournaments">Tournaments</a>
                    {isOpenTournaments && (
                        <div className="dropdown-menu-tournaments"> 
                            <a href="/tournaments/kick-off">Spring Kick Off Chilliwack</a>
                        </div>
                    )}
                </div>
                <div className='navbar-item'><a className="navbar-fields-normal-a" href="alumni">Alumni</a></div>
                <div className='navbar-item-contact'><a className="navbar-fields-contact-a" href="contact">Contact</a></div>
            </div>
        </div>
    );
}
