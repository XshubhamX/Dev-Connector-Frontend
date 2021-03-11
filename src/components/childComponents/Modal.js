import React from "react";
import { Button, Modal } from "react-bootstrap";

const Modals = (props) => {
  <Modal.Dialog>
    {props.title ? (
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
    ) : null}
    {props.body ? (
      <Modal.Body>
        <p>M</p>
      </Modal.Body>
    ) : null}

    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      {props.update ? <Button variant="primary">Save changes</Button> : null}
    </Modal.Footer>
  </Modal.Dialog>;
};

export default Modals;
