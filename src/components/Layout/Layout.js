import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <div className={'layoutNavigation'}>
                <NavLink to={'/Cars'}>Cars</NavLink>
                <NavLink to={'/Users'}>Users</NavLink>
                <NavLink to={'/Posts'}>Posts</NavLink>
                <NavLink to={'/Comments'}>Comments</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};
