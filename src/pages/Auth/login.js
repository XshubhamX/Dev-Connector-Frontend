import React, { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import FormData from "../../components/childComponents/loginFormComponent";

const Login = (props) => {
  const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          id
          name
          email
        }
        token
        expirationTime
      }
    }
  `;

  let [login, { error, loading }] = useMutation(LOGIN_MUTATION);
  const text = "Login";
  const authContext = useContext(AuthContext);

  const signinHandler = async (e) => {
    e.preventDefault();

    const { data } = await login({
      variables: {
        email: e.target.Email.value,
        password: e.target.Password.value,
      },
    });

    authContext.login(data.login.token);

    props.history.push("/feed");
  };

  return (
    <div className="container row bg-secondary">
      <div className="col-lg-12">
        <Form onSubmit={signinHandler}>
          <FormData loginState />
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Do you want to Logout automatically after 1 hour"
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit">
              {loading ? <Spinner animation="grow" /> : text}
            </Button>
          </Form.Group>
          <Form.Group>
            <Link to="/signup">
              <Button variant="btn btn-outline-primary" type="button">
                Register
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
