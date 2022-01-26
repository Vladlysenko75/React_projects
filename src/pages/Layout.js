import React from 'react';
import {Link} from 'react-router-dom'

export const Layout = () => {
    return (
        <div>
           <h2>LAYOUT</h2>
            <div><Link to={'/users'}>Go to Users</Link></div>
        </div>
    );
};
