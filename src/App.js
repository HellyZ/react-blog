import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.scss";

import Create from "./pages/create";
import Home from "./pages/home";
import PostPage from "./pages/post";
import NoMatch from "./pages/no-match";
import PostsListPage from "./pages/posts";

function App() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/posts">All Posts</Link>
        </div>
        <div className="nav-right">
          <Link to="/create" className="createBtn">
            Create
          </Link>
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/404" component={NoMatch} />
          <Route path="/posts/:slug" component={PostPage} />
          <Route path="/posts" component={PostsListPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
