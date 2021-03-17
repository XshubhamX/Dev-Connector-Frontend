import React, { useState, useCallback } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Login from "./pages/login";
import Layout from "./components/layout";
import { PostContext } from "./context/ReposContext";

const App = (props) => {
  const [posts, setPosts] = useState([]);

  const setPostData = useCallback((allPosts) => {
    setPosts(allPosts);
  }, []);
  let token = localStorage.getItem("token");
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route for="/posts" component={Posts} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route for="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts: setPostData,
      }}
    >
      {token ? <Layout>{routes}</Layout> : routes}
    </PostContext.Provider>
  );
};

export default App;
