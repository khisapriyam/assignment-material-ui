import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Post from './components/Post/Post';
import NoMatch from './components/NoMatch/NoMatch';
import CommentDetail from './components/CommentDetail/CommentDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/post">
            <Post></Post>
          </Route>
          <Route path="/comments/:commentId">
            <CommentDetail></CommentDetail>
          </Route>
          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
