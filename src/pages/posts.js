import React, { useEffect, useRef } from "react";
import { db } from "../components/shared/db";
import Post from "../components/childComponents/post";

const Posts = (props) => {
  const posts = useRef(db);

  useEffect(() => {
    posts.current = db.map((x) => {
      return (
        <Post
          time={x.time}
          userName={x.userName}
          title={x.title}
          desc={x.desc}
          photo={x.photo}
        />
      );
    });
  }, db);

  return <React.Fragment>{posts.current}</React.Fragment>;
};

export default Posts;
