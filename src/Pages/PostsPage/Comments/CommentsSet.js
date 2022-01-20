import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {jsonActionService} from "../../../services/jsonAction.service";
import {Comments} from "./Comments";


export const CommentsSet = () => {
    const [comments, setComments] = useState([])
    const params = useParams();
    console.log(comments)


    useEffect(() => {
        jsonActionService.getCommentsById(params.id).then(value => setComments(value))
    },[params.id])
    return (
        <div>
            <h2>Comments:</h2>
            {comments.map(value => <Comments key={value.id} comment={value}/>)}
        </div>
    );
};
