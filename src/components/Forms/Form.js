import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";

export const Form = ({setCarArray}) => {
    const [formError, setFormError] = useState({});
    const {register, handleSubmit} = useForm();

    const submitNewCar = (car) => {
        carService.create(car)
            .then(() => setCarArray(car))
            .catch(error => {
            setFormError(error.response.data)
        })
    }

    const deleteCarByID = (car) => {
        carService.deleteById(car.carID)
            .then(() => setCarArray(car))
            .catch(error => {
            setFormError(error.response.data)
        })
    }

    const updateCarInfo = (car) => {
        carService.updateById(car.carID, car)
            .then(() => setCarArray(car))
            .catch(error => {
            setFormError(error.response.data)
        })
    }

    return (
        <div>
            <form>
                <div className="inputs">
                    <h2>Car inputs:</h2>
                    <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                    {formError.model && <span>{formError.model[0]}</span>}
                    <label>Price: <input type="number" defaultValue={''} {...register('price')}/></label>
                    {formError.price && <span>{formError.price[0]}</span>}
                    <label>Year: <input type="number" defaultValue={''} {...register('year')}/></label>
                    {formError.year && <span>{formError.year[0]}</span>}
                    <label>Car ID:<input type="number"  {...register('carID')}/></label>
                    {formError.detail && <span>{formError.detail}</span>}
                </div>
                <div className="buttons">
                    <h3>Car actions:</h3>
                    <div className="save">
                        <p>Note: to add new car fulfill inputs(Model, Price, Year) and press Save Car button.</p>
                        <button onClick={handleSubmit(submitNewCar)}>Save Car</button>
                    </div>
                    <div className="delete">
                        <p>Note: to delete car enter car ID and press Delete Car button or simply press Delete button in the cars list below.</p>
                        <button onClick={handleSubmit(deleteCarByID)}>Delete Car</button>
                    </div>
                    <div className="update">
                        <p>Note: to update car info enter car ID, which you want to update and fulfill inputs(Model, Price, Year) with new information and press Update button.</p>
                        <button onClick={handleSubmit(updateCarInfo)}>Update Car</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
