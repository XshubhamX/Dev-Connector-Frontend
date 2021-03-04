import React from "react";

const Post = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.userName}</h5>
      </div>
      <img className="card-img-top" src={props.photo} alt="Img" />
      <div className="card-body">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">
          <small className="text-muted">{props.time}</small>
        </p>
      </div>
    </div>
  );
};

export default Post;
