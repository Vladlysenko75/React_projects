import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {jsonActionService} from "../../../services/jsonAction.service";
import {Post} from "./Post";
import './Posts.css';

export const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        jsonActionService.getAllPosts().then(value => setPosts(value))
    },[])

    return (
        <div className='allPosts'>
            <div className="posts">
                <h1>Posts:</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className="fullPost">
                <Outlet/>
            </div>
        </div>
    );
};
