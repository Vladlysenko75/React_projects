import React, {useEffect, useState} from 'react';

import './Launch';
import {Launch} from "./Launch";

export const Launches = () => {

    const [rockets, setRockets] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(rocket => {
                // console.log(rocket)
                setRockets(rocket.filter(rocket => rocket.launch_year !== '2020'))
            })
    }, [])

    return (
        <div>
            <div className="launches">
                {
                    rockets.map(value => <Launch key={value.flight_number} name={value.mission_name}
                                                 year={value.launch_year} patch={value.links.mission_patch}/>)
                }
            </div>
        </div>
    );
};
