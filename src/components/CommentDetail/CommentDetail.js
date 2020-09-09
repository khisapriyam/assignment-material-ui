import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CommentDetail = () => {
    const {commentId} = useParams();
    const [comment, setComment] = useState({});
    const commentStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));

    }, []);
    
    return (
        <div >
            
            <div style ={commentStyle}>
                <h3>Comment of: {commentId}</h3>
                <h3>Name: {comment.name}</h3>
                <p>Email: {comment.email}</p>
                <p>Comments: {comment.body}</p>
                <p>Post ID: {comment.postId}</p>
                
            </div>
           
        </div>
    );
};

export default CommentDetail;