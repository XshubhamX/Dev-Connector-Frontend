import React from "react";
import { Form, Col } from "react-bootstrap";

const FormComponent = (props) => {
  let data;

  if (props.loginState) {
    data = (
      <div>
        <Form.Row>
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
      </div>
    );
  } else {
    data = (
      <div>
        <Form.Row>
          <Form.Group as={Col} controlId="Username">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="email" placeholder="User Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="Fullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control placeholder="Full Name" />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" />
        </Form.Group>
      </div>
    );
  }
  return <React.Fragment>{data}</React.Fragment>;
};

export default FormComponent;
