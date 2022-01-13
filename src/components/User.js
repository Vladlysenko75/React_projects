import React from 'react';

export const User = (props) => {
    let {id,name,username} = props;
    return (
        <div>
            {id}-{name}-{username}
        </div>
    );
};
