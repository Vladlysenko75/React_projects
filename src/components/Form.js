import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCar} from "../store";
import {carValidator} from "../validators/car.validator";

export const Form = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });
    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data)
        dispatch(createCar(data))
        reset()
    }

    const update = (data) => {
        dispatch(updateCar(data))
        reset()
    }

    return (
        <div>
            <form>
                <div className={'input'}>
                    <div className={'label'}>Model:</div>
                    <div><input type="text" {...register('model')}/></div>
                    <div>{errors.model && <span>{errors.model.message}</span>}</div>
                </div>
                <div className="input">
                    <div className="label">Price:</div>
                    <div><input type="text" {...register('price')}/></div>
                    <div>{errors.price && <span>{errors.price.message}</span>}</div>
                </div>
                <label>Year: <input type="text" {...register('year')}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <label>ID: <input type="number" {...register('id')}/></label>
                {errors.id && <span>{errors.id.message}</span>}
                <button onClick={handleSubmit(submit)}>Save</button>
                <button onClick={handleSubmit(update)}>Update</button>
                <hr/>
            </form>
        </div>
    );
};
