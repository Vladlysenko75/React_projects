import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../store";

export const Car = ({car}) => {
    const {id, year, model, price} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCar(id))}>Delete Car</button>
            <hr/>
        </div>
    );
};
