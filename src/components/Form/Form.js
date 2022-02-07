import React from 'react';
import {useDispatch} from "react-redux";

export const Form = () => {
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'form'}/>
                <button>Add</button>
            </form>
        </div>
    );
};
