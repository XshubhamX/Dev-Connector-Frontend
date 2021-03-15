import React, { useState, useCallback } from "react";
import Comment from "../../static/svg/comment.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "moment";

const Post = (props) => {
  let [checked, setChecked] = useState(props.liked);
  const checkChangeHandler = useCallback(
    (e) => {
      setChecked(!checked);
      props.changed(e);
    },
    [checked, props]
  );
  return (
    <div className="card mb-3">
      <div className="card-body card-body___img">
        <Image className="user-avatar" src={props.image} roundedCircle />
        <Link to="/" className="username-link">
          <p className="card-title username">{props.userName}</p>
        </Link>
      </div>
      <img className="card-img-top" src={props.image} alt="Img" />
      <div className="card-body">
        <input
          type="checkbox"
          checked={checked}
          name={props.id}
          onChange={checkChangeHandler}
        />
        <img class="svg_page" src={Comment} alt="Comment" />
        <h6 className="card-title">{props.title}</h6>
        <p className="card-text">{props.desc}</p>
        {props.likes ? (
          <p className="card-text" checked="true">
            <small className="text-muted">{props.likes} likes</small>
          </p>
        ) : null}
        {props.comments ? (
          <p className="card-text">
            <small className="text-muted">{props.comments} comments</small>
          </p>
        ) : null}
        <p className="card-text">
          <small className="text-muted">
            {Moment.ISO_8601(props.createdAt)}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Post;
