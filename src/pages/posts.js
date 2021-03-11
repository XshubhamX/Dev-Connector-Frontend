import React, { useContext, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Post from "../components/childComponents/post";
import { PostContext } from "../context/ReposContext";
import Pagination from "../components/childComponents/pagination";
import Spinner from "react-bootstrap/Spinner";
import Modal from "../components/childComponents/Modal";

const Posts = (props) => {
  const [skips, setSkips] = useState(0);

  const skipsInQueryHandler = (e) => {
    if (e.target.value !== skips) {
      if (e.target.value === 1) {
        setSkips(0);
      } else {
        setSkips(e.target.value * 10 - 10);
      }
    }
  };
  const GET_ALL_REPOS = gql`
  query {
    repos(skip: ${skips}, limit: 10) {
      developer {
        userName
      }
      id
      title
      desc
      likes
      totalComments
      createdAt
      liked
    }
  }
`;
  const postContext = useContext(PostContext);

  const { loading, error, data } = useQuery(GET_ALL_REPOS);

  if (loading)
    return (
      <React.Fragment>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </React.Fragment>
    );
  if (error) {
    console.log(error);
    return (
      <React.Fragment>
        <Modal title="Error" body="You are all caught up" />
        <Pagination clicked={skipsInQueryHandler} />
      </React.Fragment>
    );
  }
  if (data) {
    console.log(data);
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
            liked={x.liked}
          />
        );
      })}
      <Pagination clicked={skipsInQueryHandler} />
    </React.Fragment>
  );
};

export default Posts;
