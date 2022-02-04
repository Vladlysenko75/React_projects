import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux";

import {createCar, updateCar} from "../store";

export const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
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
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <label>ID: <input type="text" {...register('id')}/></label>
                <button onClick={handleSubmit(submit)}>Save</button>
                <button onClick={handleSubmit(update)}>Update</button>
                <hr/>
            </form>

        </div>
    );
};
