import React from 'react';

export const Post = ({post}) => {
    const {id, body, userId, title} = post
    return (
        <div>
            <h3>ID: {id}</h3>
            <div>Body: {body}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <hr/>
        </div>
    );
};
