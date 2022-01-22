import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {jsonActionService} from "../../../services/jsonAction.service";
import {UserPost} from "./UserPost";

export const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()

    useEffect( () => {
        jsonActionService.getPostsByUserId(id).then(value => setPosts(value))
    },[id])

    return (
        <div>
            <h2>Posts of User:</h2>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};
