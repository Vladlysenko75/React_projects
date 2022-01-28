import React, {useEffect, useState} from 'react';

export const ImgRequest = () => {
    const [imgStorage, setImgStorage] = useState('');
    const [number, setNumber] = useState(1)
    const [category, setCategory] = useState('girl')

    const increment = (i) => {
        let newNumber = i + 1
        setNumber(newNumber)
    }

    useEffect(() => {
        fetch(`https://loremflickr.com/600/400/${category}`)
            .then(cat => setImgStorage(cat.url))
    }, [number, category])

    return (
        <div className='main'>
            <div className="categories">
                <h1>Categories:</h1>
                <button onClick={() => setCategory('cat')}>Cat</button>
                <button onClick={() => setCategory('car')}>Car</button>
                <button onClick={() => setCategory('dog')}>Dog</button>
                <button onClick={() => setCategory('girl')}>Girl</button>
                <button onClick={() => setCategory('notebook')}>NoteBook</button>
            </div>
            <div className="image">
                <img src={imgStorage} alt="animal"/>
                <button onClick={() => increment(number)}>Update</button>
            </div>
        </div>
    );
};
