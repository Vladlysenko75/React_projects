import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {jsonActionService} from "../../../services/jsonAction.service";

export const SinglePost = () => {
    const params = useParams();
    const [post,setPost] = useState({});
    const {state} = useLocation();

    console.log(params)



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
