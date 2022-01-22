import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {jsonActionService} from "../../../services/jsonAction.service";
import {Comments} from "./Comments";


export const CommentsSet = () => {
    const [comments, setComments] = useState([])
    const {id} = useParams();

    useEffect(() => {
        jsonActionService.getCommentsById(id).then(value => setComments(value))
    },[id])
    return (
        <div>
            <h2>Comments:</h2>
            {comments.map(value => <Comments key={value.id} comment={value}/>)}
        </div>
    );
};
