import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import './Layout.css'

export const Layout = () => {
    return (
        <div>
            <div className='header'>
                <div><Link to={'/'}>Rick and Morty!</Link></div>
                <div><Link to={'/episodes/page/1'}>Go to first Page</Link></div>
            </div>
            <Outlet/>
        </div>
    );
};
