import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addTask} from "../../store";

export const Form = () => {
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.taskList);

    const submit = (e) => {
        e.preventDefault()
        dispatch(addTask({task: e.target.form.value}))
        e.target.reset()
    }

    return (
        <div className={'form'}>
            <div>
                <h1>Tasks: {tasks.length}</h1>
                <h1>Done: {tasks.filter(task => task.status === true).length}</h1>
            </div>
            <div>
                <form onSubmit={submit}>
                    <input type="text" name={'form'}/>
                    <button>Add</button>
                </form>
            </div>

        </div>
    );
};
