import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "./Post";
import {getAllPosts} from "../../store";

export const Posts = () => {
    const {posts} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllPosts())
    },[dispatch])

    return (
        <div>
            <h1>Posts: </h1>
            <div className="posts">
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};
