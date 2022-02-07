import React from 'react';
import {useSelector} from "react-redux";
import {Task} from "./Task";

export const List = () => {
    const {tasks} = useSelector(state => state.taskList);

    return (
        <div>
            {tasks && tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    );
};
