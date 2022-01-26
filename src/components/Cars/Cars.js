import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";

export const Cars = ({carArray}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [carArray])

    return (
        <div>
            <h1>Cars:</h1>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};
