import React, { useState } from 'react';
import AgeGroupForm from './AgeGroupForm/AgeGroupForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

function FormManager({ onClose }) {
    const [ageGroup, setAgeGroup] = useState(null);

    const handleAgeGroupSubmit = (value) => {
        setAgeGroup(value);
    };

    const handleRegistrationSubmit = (data) => {
        // Handle registration submission here
        onClose(); // Close the form after successful registration

        fetch('http://localhost:3334/submit-form', {
            method: 'POST',
            body: JSON.stringify({ data, sheetName: ageGroup }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Registration was successful!");
            } else {
                alert("There was a problem with the registration.");
            }
        });
    };

    const handleBack = () => {
        // Reset the state of ageGroup
        setAgeGroup(null);
    };

    return (
        <div>
            {!ageGroup ? (
                <AgeGroupForm onSubmit={handleAgeGroupSubmit} onClose={onClose} />
            ) : (
                <RegistrationForm ageGroup={ageGroup} onSubmit={handleRegistrationSubmit} onBack={handleBack} onClose={onClose} />
            )}
        </div>
    );
}

export default FormManager;
