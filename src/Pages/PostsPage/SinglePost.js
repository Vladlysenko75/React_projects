import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {jsonActionService} from "../../services/jsonAction.service";

export const SinglePost = () => {
    const params = useParams();
    const [post,setPost] = useState({});
    const {state} = useLocation();

    useEffect( () => {
        if (state) {
            setPost(state)
            return
        }

        jsonActionService.getPostById(params.id).then(value => setPost(value))
    },[state, params.id])

    return (
        <div>
            {post && (
                <div>
                    <div>UserId: {post.userId}</div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};
