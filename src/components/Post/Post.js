import React, { useState, useEffect } from 'react';
import Detail from '../Detail/Detail';

const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div>
            <h1>No of Post: {post.length}</h1>
            {
                post.map(post => <Detail post = {post}></Detail>)  
            }  
        </div>
    );
};

export default Post;