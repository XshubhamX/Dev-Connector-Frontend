import React, { useState, useCallback } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Layout from "./components/layout";
import { PostContext } from "./context/ReposContext";

const App = (props) => {
  const [posts, setPosts] = useState([]);

  const setPostData = useCallback((allPosts) => {
    setPosts(allPosts);
  }, []);
  let routes = (
    <Switch>
      <Route for="/" component={Posts} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts: setPostData,
      }}
    >
      <Layout>{routes}</Layout>
    </PostContext.Provider>
  );
};

export default App;
