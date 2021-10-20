import './Services.css'
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('specialists.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (

        <div id="services" className="py-5 mx-auto" >
            <h1 className="text-center mt-3">OUR MEDICAL DEPARTMENT</h1>

            <div >

                <div className="service-container mt-5">


                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Services;