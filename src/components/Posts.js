import React, {useEffect, useState} from 'react';
import {Post} from "./Post";

export const Posts = () => {

    const [postList, setPostlist] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => posts.filter((item, i) => i < 10))
            .then(posts => setPostlist(posts))
    }, [])

    return (
        <div>
            {postList.map(value => <Post key={value.id} id={value.id} body={value.body}/>)}
        </div>
    );
};
