import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import FormData from "../../components/childComponents/loginFormComponent";

const Otp = (props) => {
  const SIGNUP_MUTATION = gql`
    mutation signup(
      $email: String!
      $password: String!
      $databaseId: String
      $otp: String
    ) {
      login(
        userData: { email: $email, password: $password }
        databaseId: $databaseId
        otp: $otp
      ) {
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

  const [signup, { error, loading }] = useMutation(SIGNUP_MUTATION);

  const signupHandler = async () => {
    return;
  };

  return (
    <div className="container row bg-secondary">
      <div className="col-lg-12">
        <Form onSubmit={signupHandler}>
          <FormData otpPage />
          <Form.Group>
            <Button variant="primary" type="submit">
              Confirm
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Otp;
