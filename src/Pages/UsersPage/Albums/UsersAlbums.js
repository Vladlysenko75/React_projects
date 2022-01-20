import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {jsonActionService} from "../../../services/jsonAction.service";
import {Album} from "./Album";

export const UsersAlbums = () => {
    const [albums,setAlbums] = useState([]);
    const params = useParams();

    useEffect( () => {
        jsonActionService.getUserAlbums(params.id).then( value => setAlbums(value));
    },[params.id])

    return (
        <div>
            <h2>Albums</h2>
            {albums.map( album => <Album key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};
