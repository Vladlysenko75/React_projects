import React from 'react';

export const EpisodeHeroes = ({character}) => {
    const {image, name, status, species, gender, origin, location} = character;

    return (
        <div className='character'>
            <div><img src={image} alt="Portrait"/></div>
            <div><h3>{name}</h3></div>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <div>Origin: {origin.name}</div>
            <div>Location:{location.name}</div>
        </div>
    );
};
