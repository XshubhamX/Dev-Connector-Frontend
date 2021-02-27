import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Layout from "./components/layout";

const App = (props) => {
  let routes = (
    <Switch>
      <Route for="/" component={Posts} />
      <Redirect to="/" />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
