import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {updateCar} from "../../store";
import {updateValidator} from "../../validators/update.validator";

export const UpdateCarForm = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm({
        resolver: joiResolver(updateValidator),
        mode: 'onTouched'
    });
    const dispatch = useDispatch();

    const update = (data) => {
        dispatch(updateCar(data))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(update)}>
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
                <div className="input">
                    <div className="label">Year: </div>
                    <div><input type="text" {...register('year')}/></div>
                    <div>{errors.year && <span>{errors.year.message}</span>}</div>
                </div>
                <div className="input">
                    <div className="label">ID: </div>
                    <div><input type="number" {...register('id')}/></div>
                    <div>{errors.id && <span>{errors.id.message}</span>}</div>
                </div>
                <button>Update</button>
                <hr/>
            </form>
        </div>
    );
};

