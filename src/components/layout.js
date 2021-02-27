import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import ChatSvg from "../static/svgs/chat";

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>CONNECT</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            className="ml-auto"
            title="Select Category"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Repository</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">User</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-1" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default layout;
