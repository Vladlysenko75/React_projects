import React from 'react';

import './Launches.css';

export const Launch = (props) => {
    let {name, year, patch} = props;
    return (
        <div className={'rocket'}>
            <div className="info">
                <h2>
                    {name}
                </h2>
                <p>
                    {year}
                </p>
            </div>
            <img src={patch} alt="patch"/>
        </div>)
};
