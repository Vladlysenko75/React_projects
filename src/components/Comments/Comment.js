import React from 'react';

export const Comment = ({comment}) => {
    const {body, name, id, email} = comment;
    return (
        <div>
            <h3>ID: {id}</h3>
            <div>Email: {email}</div>
            <div>Name: {name}</div>
            <div>Body: {body}</div>
        </div>
    );
};
