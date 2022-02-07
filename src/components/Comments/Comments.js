import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comment.slice";
import {Comment} from "./Comment";

export const Comments = () => {
    const {comments} = useSelector(state => state['commentSlice']);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllComments())
    },[dispatch])

    return (
        <div>
            <h1>Comments: </h1>
            <div className="comments">
                {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};
