import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import FormData from "../components/childComponents/loginFormComponent";
import "./login.css";
const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const changeModeHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="row bg-light">
      <div className="col-lg-12">
        <Form>
          <FormData loginState={isLogin} />
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Do you want to Logout automatically after 1 hour"
            />
          </Form.Group>
          <Form.row>
            <Form.Group>
              <Button variant="primary" type="submit">
                {isLogin ? `Login` : `Signup`}
              </Button>
            </Form.Group>
            <Form.Group>
              <Button
                variant="btn btn-outline-primary"
                type="submit"
                onClick={changeModeHandler}
              >
                {isLogin ? `Signup` : `Login`}
              </Button>
            </Form.Group>
          </Form.row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
