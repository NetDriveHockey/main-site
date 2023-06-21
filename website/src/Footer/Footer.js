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
                    <div className="footer-link-item"><a href="instructors">Instructors</a></div>
                    <div className="footer-link-item"><a href="camps">Camps</a></div>
                    <div className="footer-link-item"><a href="tournaments">Tournaments</a></div>
                    <div className="footer-link-item"><a href="alumni">Alumni</a></div>
                    <div className="footer-link-item"><a href="contact">Contact</a></div>
                </div>
            
                <p>© 2023 NetDriveHockey</p>
                <div className="footer-links">
                    <a href="https://instagram.com/netdrivehockey.ca?igshid=MWQ1ZGUxMzBkMA==" target="_blank" rel="noreferrer">
                        <FaInstagram className='faInstagram'/>
                    </a>
                    <a href="https://twitter.com/netdrivehockey1" target="_blank" rel="noreferrer">
                        <FaTwitter className='faTwitter'/>
                    </a>
                </div>
                
            </div>
        </div>
    );
}