import React, { useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { db } from "../components/shared/db";
import Post from "../components/childComponents/post";

const GET_ALL_REPOS = gql`
  query {
    repos {
      developer {
        userName
      }
      id
      title
      desc
      likes
      totalComments
      createdAt
    }
  }
`;
const Posts = (props) => {
  const { loading, error, data } = useQuery(GET_ALL_REPOS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <React.Fragment>
      {data.repos.map((x) => {
        return (
          <Post
            userName={x.developer.userName}
            title={x.title}
            desc={x.desc}
            likes={x.likes}
            comments={x.comments}
            createdAt={x.createdAt}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Posts;
