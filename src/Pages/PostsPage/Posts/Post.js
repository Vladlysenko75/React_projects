import React from 'react';
import {Link} from 'react-router-dom';

export const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className='post'>
            <div className="postInfo">
                {id}). {title}
            </div>
            <Link state={post} to={id.toString()}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};
