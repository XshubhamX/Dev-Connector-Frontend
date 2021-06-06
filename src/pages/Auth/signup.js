import React, { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import FormData from "../../components/childComponents/loginFormComponent";
import { LinkContainer } from "react-router-bootstrap";
import { TempContext } from "../../context/TempContext";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const SEND_OTP_MUTATION = gql`
    mutation sendOtp($email: String!, $password: String!) {
      sendOtp(data: { email: $email, password: $password }) {
        databaseId
      }
    }
  `;

  const [sendOtp, { error, loading }] = useMutation(SEND_OTP_MUTATION);

  const tempContext = useContext(TempContext);

  const sendotpHandler = async (e) => {
    e.preventDefault();

    console.log(e.target.Password, e.target.Email);
    const { data } = await sendOtp({
      variables: {
        email: e.target.Email.value,
        password: e.target.Password.value,
      },
    });

    tempContext.set(
      e.target.Name.value,
      e.target.Username.value,
      data.sendOtp.databaseId
    );

    props.history.push("/otp");
  };

  return (
    <div className="container row bg-secondary">
      <div className="col-lg-12">
        <Form onSubmit={sendotpHandler}>
          <FormData />
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Do you want to Logout automatically after 1 hour"
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="primary">
              Signup
            </Button>
          </Form.Group>
          <Form.Group>
            <Link to="/login">
              <Button variant="btn btn-outline-primary" type="button">
                Login
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
