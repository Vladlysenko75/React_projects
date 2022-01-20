import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {jsonActionService} from "../../../services/jsonAction.service";
import {UserPost} from "./UserPost";

export const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const params = useParams()
    console.log(params)

    useEffect( () => {
        jsonActionService.getPostsByUserId(params.id).then(value => setPosts(value))
    },[params.id])

    return (
        <div>
            <h2>Posts of User:</h2>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};
