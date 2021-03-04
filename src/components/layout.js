import React from "react";
import { Nav, Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";

import Chat from "../chat.svg";
import Profile from "../profile.svg";
import Home from "../home.svg";

import { LinkContainer } from "react-router-bootstrap";

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
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <img className="svg" src={Home} alt="Home" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/:uid/messages">
              <Nav.Link>
                <img className="svg" src={Chat} alt="Messages" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/:uid/profile">
              <Nav.Link>
                <img className="svg" src={Profile} alt="Profile" />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </React.Fragment>
  );
};

export default layout;
