import React from 'react';
import BlogPost from './components/BlogPost';
import CommentPost from './components/CommentPost';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">BlogPost</Link>
            </li>
            <li>
              <Link to="/comment">CommentPost</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/comment">
            <CommentPost />
          </Route>
          <Route path="/">
            <BlogPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;