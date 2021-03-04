import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Layout from "./components/layout";
import Notification from "./components/shared/notificationTab";

const App = (props) => {
  let routes = (
    <Switch>
      <Route for="/" component={Posts} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm-9">{routes}</div>
          <div class="col-sm-3" fixed="top">
            <Notification />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
