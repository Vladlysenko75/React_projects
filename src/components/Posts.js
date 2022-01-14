import React, {useEffect, useState} from 'react';

import {Post} from "./Post";

export const Posts = ({postId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(posts => setPosts(posts.filter(post => post.userId === postId)))
    }, [postId])

    return (
        <div>
            {posts.map(value => <Post
                key={value.id}
                userId={value.userId}
                id={value.id}
                title={value.title}
                body={value.body}
            />)}
        </div>
    );
};
