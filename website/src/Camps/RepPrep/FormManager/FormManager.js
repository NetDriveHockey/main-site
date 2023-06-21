import React, { useState } from 'react';
import AgeGroupForm from './AgeGroupForm/AgeGroupForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

function FormManager({ onClose, onSubmitResult }) {
    const [ageGroup, setAgeGroup] = useState(null);

    const handleAgeGroupSubmit = (value) => {
        setAgeGroup(value);
    };

    const handleRegistrationSubmit = (data) => {
        // Handle registration submission here
        
        console.log(data);

        fetch('https://us-central1-netdrive-218b0.cloudfunctions.net/app/camp-register', {
            method: 'POST',
            body: JSON.stringify({ data, sheetName: ageGroup }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Registration was successful');
            return response.json();
        })
        .then(data => {
            if (data.success) {
                console.log('Registration was successful');
                onSubmitResult(true, 'Registration was successful');
                onClose();
            } else {
                onSubmitResult(false, 'There was a problem with the registration');
                onClose();
            }
        })
        .catch(e => {
            console.error('There was an error during the fetch operation: ', e);
            onSubmitResult(false, 'There was an error during the fetch operation');
            onClose();
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
