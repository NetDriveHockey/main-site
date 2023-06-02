import {React} from 'react';
import './Footer.css';

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links" >
                    <div className="footer-link-item"><a href="/">Home</a></div>
                    <div className="footer-link-item"><a href="/">Instructors</a></div>
                    <div className="footer-link-item"><a href="/">Camps</a></div>
                    <div className="footer-link-item"><a href="/">Tournaments</a></div>
                    <div className="footer-link-item"><a href="/">Alumni</a></div>
                    <div className="footer-link-item"><a href="/">Contact</a></div>
                </div>
            
                <p>© 2023 NetDriveHockey</p>
                <div className="footer-links">
                    <FaInstagram className='faInstagram'/>
                    <FaTwitter className='faTwitter'/>
                </div>
                
            </div>
        </div>
    );
}