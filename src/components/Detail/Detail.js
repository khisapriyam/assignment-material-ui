import React from 'react';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    //receiving data as props from Post.js
    const{id, title} = props.post; //destructuring
    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style ={postStyle}>
            <h2>ID: {id}</h2>
            <p>Title: {title}</p>
            <Link to={`/comment/${id}`}>
                <button>Read Details of {id}</button>
            </Link>
            
        </div>
    );
};

export default Detail;