import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {getAllCars} from "../store";

export const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    return (
        <div>
            <div className="navigation">

            </div>

            {status === 'pending...' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1> }
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};
