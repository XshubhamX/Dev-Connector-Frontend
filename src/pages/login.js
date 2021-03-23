import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import FormData from "../components/childComponents/loginFormComponent";
import "./login.css";
const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const SIGNIN_MUTATION = gql`
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

  const [login, payload] = useMutation(SIGNIN_MUTATION);

  const changeModeHandler = () => {
    setIsLogin(!isLogin);
  };

  const signinHandler = (e) => {
    e.preventDefault();

    login({
      variables: {
        email: e.target.Email.value,
        password: e.target.Password.value,
      },
    });

    console.log(payload);
  };

  return (
    <div className="container row bg-secondary">
      <div className="col-lg-12">
        <Form onSubmit={signinHandler}>
          <FormData loginState={isLogin} />
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Do you want to Logout automatically after 1 hour"
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit">
              {isLogin ? `Login` : `Signup`}
            </Button>
          </Form.Group>
          <Form.Group>
            <Button
              variant="btn btn-outline-primary"
              type="button"
              onClick={changeModeHandler}
            >
              {isLogin ? `Signup` : `Login`}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
