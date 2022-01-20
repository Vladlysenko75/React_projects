import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {jsonActionService} from "../../services/jsonAction.service";
import {User} from "./User";
import './Users.css'

export const UsersPage = () => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        jsonActionService.getAllUsers().then(value => setUsers(value))
    }, [])
    return (
        <div className='allUsers'>
            <div className="users">
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className="user">
                <Outlet/>
            </div>
        </div>
    );
};
