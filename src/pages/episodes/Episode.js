import React from 'react';
import {Link} from 'react-router-dom';

export const Episode = ({oneEpisode}) => {
    const {name, episode, air_date} = oneEpisode;
    return (
        <div>
            <h3>{name}</h3>
            <div>Episode: {episode}</div>
            <div>Air date: {air_date}</div>
            <button><Link>

            </Link></button>
        </div>
    );
};
