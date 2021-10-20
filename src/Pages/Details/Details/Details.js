import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { description } = useParams();
    return (
        <div>
            <h1 className="welcome">WELCOME TO RK-HOSPITAL</h1>
            <img src="https://www.healthcarefinancenews.com/sites/healthcarefinancenews.com/files/styles/companion_top/public/CTOutpatientClinicfromwebsite.jpg?itok=D2FQF5RG" alt="" />
            <h3>{description}</h3>
        </div>
    );
};

export default Details;