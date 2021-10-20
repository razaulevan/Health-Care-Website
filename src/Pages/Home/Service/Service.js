import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, description, img, department, Fees } = service;

    return (

        <div className="service pb-4">

            <div className="mb-5 "> <img src={img} alt="" /></div>
            <div className="font-div text-center"> <h1> {department}</h1>
                <h3>Operator: {name}</h3>
                <h3> Fees: {Fees} BDT</h3>
                <Link to={`/Details/${description}`}><button className="btn btn-primary">Details</button></Link>
            </div></div>
    );
};

export default Service;