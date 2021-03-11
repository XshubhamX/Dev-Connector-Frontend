import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import Post from "../components/childComponents/post";
import { PostContext } from "../context/ReposContext";

const GET_ALL_REPOS = gql`
  query {
    repos(skip: 10, limit: 10) {
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
  const postContext = useContext(PostContext);

  const { loading, error, data } = useQuery(GET_ALL_REPOS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    postContext.setPosts(data.repos);
  }

  return (
    <React.Fragment>
      {data.repos.map((x) => {
        return (
          <Post
            key={x.id}
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
