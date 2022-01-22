import React from 'react';

export const Car = ({car}) => {
    const {price, id, model, year} = car;
    return (
        <div className='car'>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </div>
    );
};
