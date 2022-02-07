import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet} from 'react-router-dom';

import {Car} from "./Car";
import {getAllCars} from "../../store";
import "./cars.css";

export const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    console.log(cars)

    return (
        <div>
            <div className="carNavigation">
                <NavLink to={'create'}>Add car</NavLink>
                <NavLink to={'update'}>Update car</NavLink>
            </div>
            <Outlet/>
            <h1>Cars: </h1>
            <div className="cars">
                {status === 'pending...' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {cars && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};
