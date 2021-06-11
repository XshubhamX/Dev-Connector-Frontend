import React from "react";
import { Form, Col, InputGroup } from "react-bootstrap";

const FormComponent = (props) => {
  let data;

  if (props.otpPage) {
    data = (
      <>
        <Form.Group controlId="Otp">
          <Form.Label>Otp</Form.Label>
          <Form.Control type="text" placeholder="Otp" />
        </Form.Group>
      </>
    );
  } else if (props.loginState) {
    data = (
      <>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </>
    );
  } else {
    data = (
      <>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </>
    );
  }
  return <Form class="ml-auto">{data}</Form>;
};

export default FormComponent;
