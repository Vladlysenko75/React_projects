import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import './Layout.css'

export const Layout = () => {
    return (
        <div>
            <div className='header'>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/page/1'}>Show episodes</Link></div>
            </div>
            <Outlet/>
        </div>
    );
};
