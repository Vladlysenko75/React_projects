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
            <form onSubmit={handleSubmit(submitNewCar)}>
                <h2>Add car:</h2>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                {formError.model && <span>{formError.model[0]}</span>}
                <label>Price: <input type="number" defaultValue={''} {...register('price')}/></label>
                {formError.price && <span>{formError.price[0]}</span>}
                <label>Year: <input type="number" defaultValue={''} {...register('year')}/></label>
                {formError.year && <span>{formError.year[0]}</span>}
                <button>Save</button>
            </form>
            <form onSubmit={(handleSubmit(deleteCarByID))}>
                <h2>Delete Car By ID:</h2>
                <label>Car ID:<input type="number"  {...register('carID')}/></label>
                <button>Delete</button>
                {formError.detail && <span>{formError.detail}</span>}
            </form>
            <form onSubmit={handleSubmit(updateCarInfo)}>
                <h2>Update Car Details:</h2>
                <label>Car ID: <input type="text" defaultValue={''} {...register('carID')}/></label>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                <label>Price: <input type="number" defaultValue={''} {...register('price')}/></label>
                <label>Year: <input type="number" defaultValue={''} {...register('year')}/></label>
                <button>Update</button>
            </form>
        </div>
    );
};
