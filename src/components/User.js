import React from 'react';

export const User = (props) => {
    let {id,name,username,foo} = props;
    return (
        <div>
            {id}-{name}-{username}
            <button onClick={() => foo(id)}>Get Details</button>
        </div>
    );
};