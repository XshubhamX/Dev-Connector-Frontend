import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";

import Chat from "../static/svg/chat.svg";
import Profile from "../static/svg/profile.svg";
import Home from "../static/svg/home.svg";

import { LinkContainer } from "react-router-bootstrap";

const layout = (props) => {
  const token = localStorage.getItem("token");
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>CONNECT</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {token ? (
            <>
              <NavDropdown
                className="ml-auto"
                title="Select Category"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Repository
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">User</NavDropdown.Item>
              </NavDropdown>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-1"
                />
              </Form>
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link>
                    <img className="svg_nav" src={Home} alt="Home" />
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/:uid/messages">
                  <Nav.Link>
                    <img className="svg_nav" src={Chat} alt="Messages" />
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/:uid/profile">
                  <Nav.Link>
                    <img className="svg_nav" src={Profile} alt="Profile" />
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </>
          ) : (
            <Nav className="ml-auto">
              <LinkContainer to="/login">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Button variant="btn btn-outline-primary" type="button">
                  Register
                </Button>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>

      {props.children}
    </React.Fragment>
  );
};

export default layout;
