import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {jsonActionService} from "../../../services/jsonAction.service";

export const SingleUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({})
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        jsonActionService.getUserById(id).then(value => setUser(value));
    }, [id, state])

    return (
        <div>
            {user && (
                <div className='singleUser'>
                    <h2>User</h2>
                    <div>UserID: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>UserName: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Website: {user.website}</div>
                    <Link to={'posts'}><button>Posts</button></Link>
                    <Outlet/>
                </div>
            )}
        </div>
    );
};
