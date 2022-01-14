import React, {useEffect, useState} from 'react';

export const UserFull = ({userId, bar}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(user => setUser(user))
        }
    }, [userId])

    return (
        <div>
            <div>
                ID: {user.id}
                <br/>
                Name: {user.name}
                <br/>
                UserName: {user.username}
                <br/>
                Email: {user.email}
                <br/>
                Phone: {user.phone}
                <br/>
                Website: {user.website}
            </div>
            <button onClick={() => bar(user.id)}>Get Posts</button>
        </div>
    );
};


