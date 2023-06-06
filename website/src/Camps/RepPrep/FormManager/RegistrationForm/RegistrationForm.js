import React, { useState } from "react";
import "./RegistrationForm.css";

import { TiDeleteOutline, TiArrowLeftOutline } from "react-icons/ti";

function RegistrationForm({ ageGroup, onSubmit, onBack, onClose }) {

    const [name, setName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [winterTeam, setWinterTeam] = useState("");
    const [position, setPosition] = useState("");
    const [parentName, setParentName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            name,
            birthYear,
            winterTeam,
            position,
            parentName,
            email,
            phoneNumber
        });
    }
      
    return (
        <div className="registration-form-container">
            <div className="registration-form">
                <TiDeleteOutline className="close-button" onClick={onClose} />
                <TiArrowLeftOutline className="back-button" onClick={onBack} />
                <h2 className="form-title">{ageGroup} Camp Registration </h2>
                <form onSubmit={handleSubmit}>
                
                    <div className="form-group">
                        <label className="input-label">Players Name:</label>
                        <input className="input-field" type="text" name="name" onChange={e => setName(e.target.value)}required />
                    </div>
                    
                    { ageGroup === "U11" ? (
                        <>
                            <div className="r-radio-buttons">
                                <label className="input-label">Birth Year</label>
                                <div className="radio-container">
                                    <input type="radio" id="2013" name="ageGroup" value="2013" checked={birthYear === "2013"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2013">2013</label>
                                    <input type="radio" id="2014" name="ageGroup" value="2014" checked={birthYear === "2014"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2014">2014</label>
                                </div>
                            </div>

                            <div className="r-radio-buttons">
                                <label className="input-label">2022-2023 Winter Team</label>
                                <div className="radio-container">
                                    <input type="radio" id="H4" name="hockeylevel" value="H4" checked={winterTeam === "H4"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="H4">Hockey 4</label>
                                    <input type="radio" id="AtomC" name="hockeylevel" value="AtomC" checked={winterTeam === "AtomC"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="AtomC">Atom C</label>
                                    <input type="radio" id="AtomA3" name="hockeylevel" value="AtomA3" checked={winterTeam === "AtomA3"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="AtomA3">Atom A3</label>
                                    <input type="radio" id="AtomA2" name="hockeylevel" value="AtomA2" checked={winterTeam === "AtomA2"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="AtomA2">Atom A2</label>
                                    <input type="radio" id="AtomA1" name="hockeylevel" value="AtomA1" checked={winterTeam === "AtomA1"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="AtomA1">Atom A1</label>
                                </div>
                            </div>
                        </>
                        ) : ageGroup === "U13" ? (
                        <>
                            <div className="r-radio-buttons">
                                <label className="input-label">Birth Year</label>
                                <div className="radio-container">
                                    <input type="radio" id="2011" name="ageGroup" value="2011" checked={birthYear === "2011"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2011">2011</label>
                                    <input type="radio" id="2012" name="ageGroup" value="2012" checked={birthYear === "2012"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2012">2012</label>
                                </div>
                            </div>

                            <div className="r-radio-buttons">
                                <label className="input-label">2022-2023 Winter Team</label>
                                <div className="radio-container">
                                    <input type="radio" id="HouseLeagueC" name="hockeylevel" value="HouseLeagueC" checked={winterTeam === "HouseLeagueC"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="HouseLeagueC">House League C</label>
                                    <input type="radio" id="A3" name="hockeylevel" value="A3" checked={winterTeam === "A3"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A3">A3</label>
                                    <input type="radio" id="A2" name="hockeylevel" value="A2" checked={winterTeam === "A2"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A2">A2</label>
                                    <input type="radio" id="A1" name="hockeylevel" value="A1" checked={winterTeam === "A1"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A1">A1</label>
                                </div>
                            </div>
                        </>
                        ) : ageGroup === "U15" ? (
                        <>
                            <div className="r-radio-buttons">
                                <label className="input-label">Birth Year</label>
                                <div className="radio-container">
                                    <input type="radio" id="2010" name="ageGroup" value="2010" checked={birthYear === "2010"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2010">2010</label>
                                    <input type="radio" id="2009" name="ageGroup" value="2009" checked={birthYear === "2009"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2009">2009</label>
                                </div>
                            </div>

                            <div className="r-radio-buttons">
                                <label className="input-label">2022-2023 Winter Team</label>
                                <div className="radio-container">
                                    <input type="radio" id="HouseLeagueC" name="hockeylevel" value="HouseLeagueC" checked={winterTeam === "HouseLeagueC"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="HouseLeagueC">House League C</label>
                                    <input type="radio" id="A3" name="hockeylevel" value="A3" checked={winterTeam === "A3"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A3">A3</label>
                                    <input type="radio" id="A2" name="hockeylevel" value="A2" checked={winterTeam === "A2"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A2">A2</label>
                                    <input type="radio" id="A1" name="hockeylevel" value="A1" checked={winterTeam === "A1"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A1">A1</label>
                                </div>
                            </div>
                        </>    
                        ) :  (
                        <>
                            <div className="r-radio-buttons">
                                <label className="input-label">Birth Year</label>
                                <div className="radio-container">
                                    <input type="radio" id="2006" name="ageGroup" value="2006" checked={birthYear === "2006"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2006">2006</label>
                                    <input type="radio" id="2007" name="ageGroup" value="2007" checked={birthYear === "2007"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2007">2007</label>
                                    <input type="radio" id="2008" name="ageGroup" value="2008" checked={birthYear === "2008"} onChange={e => setBirthYear(e.target.value)}/><label htmlFor="2008">2008</label>
                                </div>
                            </div>

                            <div className="r-radio-buttons">
                                <label className="input-label">2022-2023 Winter Team</label>
                                <div className="radio-container">
                                    <input type="radio" id="HouseLeagueC" name="hockeylevel" value="HouseLeagueC" checked={winterTeam === "HouseLeagueC"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="HouseLeagueC">House League C</label>
                                    <input type="radio" id="A3" name="hockeylevel" value="A3" checked={winterTeam === "A3"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A3">A3</label>
                                    <input type="radio" id="A2" name="hockeylevel" value="A2" checked={winterTeam === "A2"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A2">A2</label>
                                    <input type="radio" id="A1" name="hockeylevel" value="A1" checked={winterTeam === "A1"} onChange={e => setWinterTeam(e.target.value)}/><label htmlFor="A1">A1</label>
                                </div>
                            </div>
                        </>
                        ) 
                    }
                    <div className="r-radio-buttons">
                        <label className="input-label">Position</label>
                        <div className="radio-container">
                            <input type="radio" id="G" name="position" value="G" checked={position === "G"} onChange={e => setPosition(e.target.value)}/><label htmlFor="G">Goalie</label>
                            <input type="radio" id="F" name="position" value="F" checked={position === "F"} onChange={e => setPosition(e.target.value)}/><label htmlFor="F">Forward</label>
                            <input type="radio" id="D" name="position" value="D" checked={position === "D"} onChange={e => setPosition(e.target.value)}/><label htmlFor="D">Defence</label>
                            <input type="radio" id="F/D" name="position" value="F/D" checked={position === "F/D"} onChange={e => setPosition(e.target.value)}/><label htmlFor="F/D">Forward/Defence</label>
                        </div>
                        
                    </div>

                    <div className="form-group">
                        <label className="input-label">Parents Name:</label>
                        <input className="input-field" type="text" name="name" onChange={e => setParentName(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label className="input-label">Email:</label>
                        <input  className="input-field" type="email" name="email" onChange={e => setEmail(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label className="input-label">Phone Number:</label>
                        <input className="input-field" type="text" name="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} required />
                    </div>

                    <div className="submit-button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
