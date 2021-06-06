import React, { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import FormData from "../../components/childComponents/loginFormComponent";
import { AuthContext } from "../../context/AuthContext";
import { TempContext } from "../../context/TempContext";

const Otp = (props) => {
  const SIGNUP_MUTATION = gql`
    mutation signUp(
      $name: String!
      $userName: String!
      $databaseId: String!
      $otp: String!
    ) {
      signUp(
        userData: { name: $name, userName: $userName }
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

  const [signUp, { error, loading }] = useMutation(SIGNUP_MUTATION);

  const tempContext = useContext(TempContext);
  const authContext = useContext(AuthContext);

  const signupHandler = async (e) => {
    e.preventDefault();

    const { data } = await signUp({
      variables: {
        name: tempContext.name,
        userName: tempContext.userName,
        databaseId: tempContext.databaseId,
        otp: e.target.Otp.value,
      },
    });

    authContext.login(data.signUp.token);

    props.history.push("/feed");
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
