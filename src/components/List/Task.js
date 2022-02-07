import React from 'react';

import './task.css';
import {useDispatch} from "react-redux";
import {changeStatus, deleteTask} from "../../store";

export const Task = ({task:{id,name,status}}) => {
    const dispatch = useDispatch();

    return (
        <div className={'task'}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? 'change' : ''}>{name}</div>
            <button onClick={() => dispatch(deleteTask({id}))}>Delete</button>
        </div>
    );
};
