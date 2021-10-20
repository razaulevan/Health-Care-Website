import React from 'react';
import './Specialist.css';

const Specialist = (props) => {


    const { img, name, email, phone } = props.children[3];

    return (
        <div className="doctors">

            <div><img src={img} alt="" /></div>

            <div className="text-center"><h1> Dr. {name} </h1>
                <h1>Contact:</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1></div>
        </div>

    );
};

export default Specialist;