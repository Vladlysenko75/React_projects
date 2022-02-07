import React from 'react';

export const User = ({user}) => {
    const {id, name, username, email, phone} = user;
    return (
        <div>
            <h3>ID: {id}</h3>
            <div>Email: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
        </div>
    );
};
