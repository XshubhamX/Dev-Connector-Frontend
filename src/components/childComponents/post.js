import React from "react";
import Comment from "../../static/svg/comment.svg";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "moment";

const Post = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body card-body___img">
        <Image
          className="user-avatar"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEEYrMorxyHoQ/profile-displayphoto-shrink_200_200/0/1592154989934?e=1620864000&v=beta&t=BMcCRHn7a3HROnr16nFptSE2uWzBrpS-FFqW-phvfyw"
          roundedCircle
        />
        <Link to="/" className="username-link">
          <p className="card-title username">{props.userName}</p>
        </Link>
      </div>
      <img
        className="card-img-top"
        src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="Img"
      />
      <div className="card-body">
        <Button variant="light" className="btn-sm">
          Like
        </Button>
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
          <small className="text-muted">
            {Moment.ISO_8601(props.createdAt)}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Post;
