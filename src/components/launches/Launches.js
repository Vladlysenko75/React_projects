import React, {useEffect, useState} from 'react';

import './Launches.css';

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
                        rockets.map(value => <div key={value.flight_number} className={'rocket'}>
                            <div className="info">
                                <h2>
                                    {value.mission_name}
                                </h2>
                                <p>
                                    {value.launch_year}
                                </p>
                            </div>

                            <img src={value.links.mission_patch} alt="patch"/>
                        </div>)
                    }
            </div>
        </div>
    );
};
