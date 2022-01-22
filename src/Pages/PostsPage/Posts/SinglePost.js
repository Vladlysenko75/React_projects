import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {jsonActionService} from "../../../services/jsonAction.service";

export const SinglePost = () => {
    const {id} = useParams();
    const [post,setPost] = useState({});
    const {state} = useLocation();

    useEffect( () => {
        if (state) {
            setPost(state)
            return
        }

        jsonActionService.getPostById(id).then(value => setPost(value))
    },[state, id])

    return (
        <div>
            {post && (
                <div className='singlePost'>
                    <h2>Post:</h2>
                    <div>UserId: {post.userId}</div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <Link to={'comments'}>
                        <button>Comments</button>
                    </Link>
                    <Outlet/>
                </div>
            )}
        </div>
    );
};
