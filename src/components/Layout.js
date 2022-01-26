import React from 'react';
import {Link} from 'react-router-dom';

import './Layout.css'

export const Layout = () => {
    return (
        <div className='header'>
            <div><Link to={'/'}>Rick and Morty!</Link></div>
            <div><Link to={'/pages'}>Pages</Link></div>
        </div>
    );
};
