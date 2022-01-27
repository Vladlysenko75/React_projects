import React, {useEffect, useState} from 'react';
import {imgRequest} from "../services/imgService";


export const ImgRequest = () => {
    const [imgStorage, setImgStorage] = useState('');
    console.log(imgStorage)
    useEffect( () => {
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
