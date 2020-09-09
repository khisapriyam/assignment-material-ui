import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
            <Link style= {{textDecoration: 'none'}} to={`/comments/${id}`}>
                <Button variant="contained" color="primary">
                    Read Details of {id}
                </Button>
            </Link>
        </div>
    );
};

export default Detail;