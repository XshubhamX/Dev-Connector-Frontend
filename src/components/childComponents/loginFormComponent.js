import React, { useState, useCallback } from "react";
import { Form, Col } from "react-bootstrap";

const FormComponent = (props) => {
  const [login, setLogin] = useState();

  useCallback(() => {
    setLogin(props.loginState);
  }, [props.loginState]);
  return (
    <React.Fragment>
      {login ? (
        <div>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="User Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridFullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control placeholder="Full Name" />
          </Form.Group>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Email" />
          </Form.Group>
        </div>
      ) : (
        <div>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
        </div>
      )}
    </React.Fragment>
  );
};

export default FormComponent;
