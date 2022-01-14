import React, {useEffect, useState} from 'react';

import {User} from "./User";

export const Users = ({foo}) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsersList(users))
    }, []);


    return (
        <div className="users">
            {usersList.map(value => <User
                key={value.id}
                id={value.id}
                name={value.name}
                username={value.username}
                foo={foo}
            />)}
        </div>
    );
};
