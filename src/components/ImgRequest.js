import React, {useEffect, useState} from 'react';
import {imgRequest} from "../services/imgService";


export const ImgRequest = () => {
    const [imgStorage, setImgStorage] = useState('');

    useEffect(() => {
        imgRequest.cat().then(cat => setImgStorage(cat)).catch(error => console.log(error))
    }, [])

    return (
        <div>
        <img src={'https://loremflickr.com/320/240/cat'} alt=""/>
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
