import React from 'react';
import {carService} from "../../services/car.service";

export const Car = ({car}) => {

    const deleteCar = (id) => {
        carService.deleteById(id)
    }

    const {price, id, model, year} = car;

    return (
        <div className='car'>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <hr/>
        </div>
    );
};
