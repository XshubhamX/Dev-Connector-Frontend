import React from "react";
import { Button, Modal } from "react-bootstrap";

const Modals = (props) => {
  console.log(props.body);
  return (
    <Modal.Dialog>
      {props.title ? (
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
      ) : null}
      {props.body ? (
        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>
      ) : null}

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        {props.update ? <Button variant="primary">Save changes</Button> : null}
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Modals;
