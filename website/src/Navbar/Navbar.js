import React from 'react';
import './Navbar.css';

import logo from './NetDriveLogo.jpeg';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-title"><img className="navbar-title-logo" src={logo} alt="NetDriveHockey Logo"></img>NetDriveHockey</div>
            <div className="navbar-fields">
                <div className='navbar-item'>Home</div>
                <div className='navbar-item'>Instructors</div>
                <div className='navbar-item'>Camps</div>
                <div className='navbar-item'>Tournaments</div>
                <div className='navbar-item'>Alumni</div>
                <div className='navbar-item-contact'>Contact</div>
            </div>
        </div>
    );
}
