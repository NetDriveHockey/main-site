import React from "react";
import "./AgeGroupForm.css";

import { TiDeleteOutline } from "react-icons/ti";

function AgeGroupForm({ onSubmit, onClose }) {
    
    function handleRadioChange(e) {
        onSubmit(e.target.value);
    }

    return (
        <div className="ag-form-container">
            <div className="ag-form">
                <TiDeleteOutline className="ag-close-button" onClick={onClose} />
                <h2 className="ag-form-title">Select Age Group</h2>
                <div className="ag-radio-buttons">
                    <input type="radio" id="u11" name="ageGroup" value="U11" onChange={handleRadioChange} /><label htmlFor="u11">U11 - 2013/2014 birth year</label>
                    <input type="radio" id="u13" name="ageGroup" value="U13" onChange={handleRadioChange} /><label htmlFor="u13">U13 - 2011/2012 birth year</label>
                    <input type="radio" id="u15" name="ageGroup" value="U15" onChange={handleRadioChange} /><label htmlFor="u15">U15 - 2009/2010 birth year</label>
                    <input type="radio" id="u18" name="ageGroup" value="U18" onChange={handleRadioChange} /><label htmlFor="u18">U18 - 2006/2007/2008 birth year</label>
                </div>
            </div>
        </div>
    );
}

export default AgeGroupForm;
