import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "./User";

export const Users = () => {
    const {users} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            <h1>Users: </h1>
            <div className="users">
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};
