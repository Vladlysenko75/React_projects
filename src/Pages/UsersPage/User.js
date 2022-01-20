import React from 'react';
import {Link} from 'react-router-dom'

export const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id}. {name}
            <Link to={id.toString()} state={user}>
                <button>User Details</button>
            </Link>
            <button>Albums</button>
        </div>
    );
};
