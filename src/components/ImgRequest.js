import React, {useEffect, useState} from 'react';

import {imgRequestService} from "../services/imgService";

export const ImgRequest = () => {
    const [imgStorage, setImgStorage] = useState('');

    useEffect( () => {
        imgRequestService.cat().then(cat => setImgStorage(cat.url))
    },[])

    return (
        <div>
            <div className="categories">
                <button>Cat</button>
                <button>Car</button>
                <button>Dog</button>
                <button>Girl</button>
                <button>NoteBook</button>
            </div>
            <div className="image">
                <img src={imgStorage} alt="animal"/>
                <button>Update</button>
            </div>
        </div>
    );
};
