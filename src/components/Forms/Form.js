import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";

export const Form = () => {
    const [formError, setFormError] = useState({});
    const {register, handleSubmit} = useForm();

    const submitNewCar = (car) => {
        console.log(car)
        carService.create(car).then(value => console.log(value)).catch(error => {
            setFormError(error.response.data)
        })
    }

    const deleteCarByID = (car) => {
        console.log(car)
        carService.deleteById(car.carID).catch(error => {
            setFormError(error.response.data)
        })
    }

    const updateCarInfo = (car) => {
        console.log(car)
        carService.updateById(car.carID, car).catch(error => {
            setFormError(error.response.data)
        })
    }
    return (
        <div>
            <form>
                <h2>Add car:</h2>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                {formError.model && <span>{formError.model[0]}</span>}
                <label>Price: <input type="number" defaultValue={''} {...register('price')}/></label>
                {formError.price && <span>{formError.price[0]}</span>}
                <label>Year: <input type="number" defaultValue={''} {...register('year')}/></label>
                {formError.year && <span>{formError.year[0]}</span>}
                <label>Car ID:<input type="number"  {...register('carID')}/></label>
                {formError.detail && <span>{formError.detail}</span>}
                <button onClick={handleSubmit(submitNewCar)}>Save Car</button>
                <button onClick={handleSubmit(deleteCarByID)}>Delete Car</button>
                <button onClick={handleSubmit(updateCarInfo)}>Update Car</button>
            </form>
        </div>
    );
};
