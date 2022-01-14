import React, {useEffect, useState} from 'react';

export const UserFull = ({userId}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => setUser(user))
    }, [userId])

    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};


