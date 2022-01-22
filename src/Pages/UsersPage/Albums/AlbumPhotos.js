import React, {useEffect, useState} from 'react';
import {jsonActionService} from "../../../services/jsonAction.service";
import {useParams} from "react-router-dom";
import {Photos} from "../Photos/Photos";

export const AlbumPhotos = () => {
    const [photos, setPhotos] = useState([])
    const {id} = useParams();

    useEffect( () => {
        jsonActionService.getAlbumsPhotos(id).then(value => setPhotos(value))
    },[id])

    return (
        <div>
            <h2>Photos:</h2>
            {photos.map( photo => <Photos key={photo.id} photo={photo}/>)}
        </div>
    );
};
