import React, { useContext, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Post from "../components/childComponents/post";
import { PostContext } from "../context/ReposContext";
import Pagination from "../components/childComponents/pagination";
import Spinner from "react-bootstrap/Spinner";
import Modal from "../components/childComponents/Modal";

const Posts = (props) => {
  const [skips, setSkips] = useState(0);
  const GET_ALL_REPOS = gql`
  query {
    repos(skip: ${skips}, limit: 5) {
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
      image
    }
  }
`;

  const LIKE_POST = gql`
    mutation like($repoId: String!) {
      like(repoId: $repoId) {
        number
      }
    }
  `;

  const postContext = useContext(PostContext);

  const { loading, error, data } = useQuery(GET_ALL_REPOS);

  const [like, payload] = useMutation(LIKE_POST);

  const skipsInQueryHandler = (e) => {
    if (e.target.value !== skips) {
      if (e.target.value === 1) {
        setSkips(0);
      } else {
        setSkips(e.target.value * 5 - 5);
      }
    }
  };

  const likeInMutationHandler = (e) => {
    let id = e.target.name;
    like({
      variables: {
        repoId: id.toString(),
      },
    });
  };

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

    return (
      <React.Fragment>
        {data.repos.map((x) => {
          return (
            <Post
              key={x.id}
              id={x.id}
              userName={x.developer.userName}
              title={x.title}
              desc={x.desc}
              image={x.image}
              likes={x.likes}
              comments={x.comments}
              createdAt={x.createdAt}
              liked={x.liked}
              changed={likeInMutationHandler}
            />
          );
        })}
        <Pagination clicked={skipsInQueryHandler} />
      </React.Fragment>
    );
  }
};

export default Posts;
