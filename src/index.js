import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import "./App.css";

localStorage.removeItem("token");

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer " + localStorage.getItem("token") || "",
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
