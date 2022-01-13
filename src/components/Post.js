import React from 'react';

export const Post = (props) => {
    let {id, body} = props;
    return (
        <div>
            {id}-{body}
        </div>
    );
};
