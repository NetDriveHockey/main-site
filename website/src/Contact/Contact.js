import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Contact.css';

export default function ScottJones() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 769);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div>
            <Navbar />
            {isMobile ? <MobileContact /> : <DesktopContact />}
            <Footer />
        </div>
    );
}

function DesktopContact() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        // Implement your form submit logic here.
    };

    return (
        <div>
            <div>
                <h1 className="contact-header">Contact Us</h1>
                <hr className="contact-line"></hr>
                <h3 className="contact-subheader">Fill out the form below to send us an email</h3>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <label className="contact-label half-width">
                                First Name:
                                <input className="contact-input" type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} required/>
                            </label>
                            <label className="contact-label half-width">
                                Last Name:
                                <input className="contact-input" type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} required/>
                            </label>
                        </div>
                        <div className="row">
                            <label className="contact-label half-width">
                                Email:
                                <input className="contact-input" type="email" name="email" value={formState.email} onChange={handleInputChange} required/>
                            </label>
                            <label className="contact-label half-width">
                                Phone Number:
                                <input className="contact-input" type="tel" name="phone" value={formState.phone} onChange={handleInputChange} required/>
                            </label>
                        </div>
                        <label className="contact-label">
                            Message:
                            <textarea className="contact-textarea" name="message" value={formState.message} onChange={handleInputChange} required/>
                        </label>
                        <input className="contact-submit" type="submit" value="Submit" />
                    </form>
                </div>
                <h3 className="contact-header2">Additional Contacts</h3>
                <div className="contact-info-container">
                    <div className="info-card">
                        <h3 className="info-header">Address</h3>
                        <p className="info-text">42288 Knox Ave</p>
                        <p className="info-text"> Chilliwack, BC</p>
                        <p className="info-text">V2R 5E1</p>
                    </div>
                    <div>
                        <h3 className="info-header">Contact</h3>
                        <p className="info-text">Phone Clarke: (604) 217-6116</p>
                        <p className="info-text">Phone Jeff: (604) 897-6260</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileContact() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        // Implement your form submit logic here.
    };

    return (
        <div>
            <div>
                <h1 className="contact-header">Contact Us</h1>
                <hr className="contact-line"></hr>
                <h3 className="contact-subheader">Fill out the form below to send us an email</h3>
                <div className="contact-form-container-mobile">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <label className="contact-label half-width">
                                First Name:
                                <input className="contact-input" type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} required/>
                            </label>
                            <label className="contact-label half-width">
                                Last Name:
                                <input className="contact-input" type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} required/>
                            </label>
                        </div>
                        <div className="row">
                            <label className="contact-label half-width">
                                Email:
                                <input className="contact-input" type="email" name="email" value={formState.email} onChange={handleInputChange} required/>
                            </label>
                            <label className="contact-label half-width">
                                Phone Number:
                                <input className="contact-input" type="tel" name="phone" value={formState.phone} onChange={handleInputChange} required/>
                            </label>
                        </div>
                        <label className="contact-label">
                            Message:
                            <textarea className="contact-textarea" name="message" value={formState.message} onChange={handleInputChange} required/>
                        </label>
                        <input className="contact-submit" type="submit" value="Submit" />
                    </form>
                </div>
                <h3 className="contact-header2">Additional Contacts</h3>
                <div className="contact-info-container-mobile">
                    <div className="info-card-mobile">
                        <h3 className="info-header">Address</h3>
                        <p className="info-text">42288 Knox Ave</p>
                        <p className="info-text"> Chilliwack, BC</p>
                        <p className="info-text">V2R 5E1</p>
                    </div>
                    <div>
                        <h3 className="info-header">Contact</h3>
                        <p className="info-text">Phone Clarke: (604) 217-6116</p>
                        <p className="info-text">Phone Jeff: (604) 897-6260</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
