import React, {useEffect, useState} from 'react';



export const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(post => setPosts(post))
    }, [userId])


    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    );
};
