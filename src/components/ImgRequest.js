import React, {useEffect, useState} from 'react';
import {imgRequest} from "../services/axios.service";

export const ImgRequest = () => {
    const [imgStorage, setImgStorage] = useState('');
    console.log(imgStorage)
    useEffect( () => {
        imgRequest.cat.then(cat => setImgStorage(cat))
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
                <img src="" alt=""/>
                <button>Update</button>
            </div>
        </div>
    );
};
