import React from 'react';
import { Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Detail = (props) => {
    const classes = useStyles();
    //receiving data as props from Post.js
    const { id, title } = props.post; //destructuring
    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={postStyle}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h2>ID: {id}</h2>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <p>Name: {title}</p>
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to={`/comments/${id}`}>
                        <Button variant="contained" color="primary">
                            Read Details of {id}
                        </Button>
                    </Link>
                </CardContent> 
            </Card>
        </div>
    );
};

export default Detail;