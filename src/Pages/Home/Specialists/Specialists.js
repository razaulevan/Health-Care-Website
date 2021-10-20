import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/Specialist';
import './Specialists.css';

const Specialists = () => {
    const [specialists, setSpecialists] = useState([])
    useEffect(() => {
        fetch('pddoctor.json')
            .then(res => res.json())
            .then(data => setSpecialists(data));
    }, [])
    return (
        <div id="specialists" className="container py-5 mx-auto" >
            <h1 className="text-center mt-3 mb-3">Specialists Doctors</h1>
            <div className="specialists">
                {
                    specialists.map(specialist => <Specialist>
                        key={specialist.id}
                        specialist={specialist}
                    </Specialist>)
                }
            </div>

        </div>
    );
};

export default Specialists;