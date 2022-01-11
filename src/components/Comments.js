import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment";

export const Comments = () => {
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => setCommentsList(comments))
    }, []);

    return (
        <div className="users">
            {commentsList.map(value => <Comment key={value.id} id={value.id} body={value.body}
                                          email={value.email} name={value.name}/>)}
        </div>
    );
};