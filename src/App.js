import React, { useState, useCallback } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
import Otp from "./pages/Auth/otp";
import Layout from "./components/layout";
import Home from "./pages/home";
import { PostContext } from "./context/ReposContext";
import { AuthContext } from "./context/AuthContext";
import { TempContext } from "./context/TempContext";

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [databaseId, setDatabaseId] = useState("");

  const setPostData = useCallback((allPosts) => {
    setPosts(allPosts);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.removeItem(token);
  };

  const set = (temp_name, temp_user_name, d_id) => {
    setName(temp_name);
    setUserName(temp_user_name);
    setDatabaseId(d_id);
  };

  let token = localStorage.getItem("token");

  let routes;
  console.log(token);
  if (token) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/feed" component={Posts} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/otp" component={Otp} />
        <Redirect to="/" />
      </Switch>
    );
  }

  console.log(routes);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
      }}
    >
      <TempContext.Provider
        value={{
          name,
          userName,
          databaseId,
          set,
        }}
      >
        <PostContext.Provider
          value={{
            posts,
            setPosts: setPostData,
          }}
        >
          {token ? <Layout>{routes}</Layout> : routes}
        </PostContext.Provider>
      </TempContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
