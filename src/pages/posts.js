import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";

const GET_USERS = gql`
  query {
    users {
      email
    }
  }
`;

const Posts = (props) => {
  const { loading, error, data } = useQuery(GET_USERS);

  console.log(data);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Posts;
