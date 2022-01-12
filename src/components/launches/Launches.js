import React, {useEffect, useState} from 'react';

export default function Launches() {
    const {rockets, setRockets} = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(rocket => setRockets(rocket))
    },[] )

    return (
        <div>
            <div className="rocket">
                <div className="info">
                    {
                        rockets.map(value => <h2 key={value.id}>

                        </h2>)
                    }
                    <p>
                    </p>
                </div>
                <div className="patch">
                </div>
            </div>
        </div>
    );
}
