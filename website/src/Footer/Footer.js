import {React} from 'react';
import './Footer.css';

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links" >
                    <div className="footer-link-item">Home</div>
                    <div className="footer-link-item">Instructors</div>
                    <div className="footer-link-item">Camps</div>
                    <div className="footer-link-item">Tournaments</div>
                    <div className="footer-link-item">Alumni</div>
                    <div className="footer-link-item">Contact</div>
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