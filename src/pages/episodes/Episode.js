import React from 'react';
import {Link} from 'react-router-dom';

export const Episode = ({oneEpisode}) => {
    const {id, name, episode, air_date} = oneEpisode;
    return (
        <div className='episode'>
            <h3>{name}</h3>
            <div>Episode: {episode}</div>
            <div>Air date: {air_date}</div>
            <Link to={`/episode/${id}`} state={oneEpisode}>
                <button>Episode Details</button>
            </Link>
        </div>
    );
};
