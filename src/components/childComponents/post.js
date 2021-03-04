import React from "react";
import Like from "../../static/svg/like.svg";
import Comment from "../../static/svg/comment.svg";

const Post = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.userName}</h5>
      </div>
      <img className="card-img-top" src={props.photo} alt="Img" />
      <div className="card-body">
        <img class="svg_page" src={Like} alt="Like" />
        <img class="svg_page" src={Comment} alt="Comment" />

        <h6 className="card-title">{props.title}</h6>
        <p className="card-text">{props.desc}</p>
        {props.likes ? (
          <p className="card-text">
            <small className="text-muted">{props.likes} likes</small>
          </p>
        ) : null}
        {props.comments ? (
          <p className="card-text">
            <small className="text-muted">{props.comments} comments</small>
          </p>
        ) : null}
        <p className="card-text">
          <small className="text-muted">{props.time}</small>
        </p>
      </div>
    </div>
  );
};

export default Post;
