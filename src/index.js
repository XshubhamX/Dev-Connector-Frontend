import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import "./App.css";

localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDRkOWRjMDkzOTExNDJkNDY3YjZhNyIsInVzZXJOYW1lIjoiX3NodWJoYW0ueCIsImlhdCI6MTYxNTEyNDk1N30.EtNi6lWQg8Vb_K1rMGtc5W4DG9QtZzUGMC9CBC81QUo"
);

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
