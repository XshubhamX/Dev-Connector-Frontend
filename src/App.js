import React, { useState, useCallback } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Layout from "./components/layout";
import Notification from "./components/shared/notificationTab";
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
      <Layout>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 posts">{routes}</div>
            <div class="col-sm-4">
              <Notification />
            </div>
          </div>
        </div>
      </Layout>
    </PostContext.Provider>
  );
};

export default App;
