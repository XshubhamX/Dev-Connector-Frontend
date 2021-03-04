import React, { useEffect, useRef } from "react";
import { db } from "../components/shared/db";
import Post from "../components/childComponents/post";

const Posts = (props) => {
  return (
    <React.Fragment>
      {db.map((x) => {
        return (
          <Post
            time={x.time}
            userName={x.userName}
            title={x.title}
            desc={x.desc}
            photo={x.photo}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Posts;
