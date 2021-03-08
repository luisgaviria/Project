import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

const Navbar1 = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand>
          <a href="https://www.bowst.com/" className="navbar-brand">
            <img
              width="100"
              height="60"
              className="d-inline-block align-top"
              src="https://www.bowst.com/wp-content/themes/bowst/public/img/logo.svg"
              alt="Bowst Application Design &amp; Development"
            ></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="navbar-brand-text"
              href="https://www.bowst.com/work/"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="navbar-brand-text"
              href="https://www.bowst.com/thinking/"
            >
              Clients
            </Nav.Link>
            <Nav.Link
              className="navbar-brand-text"
              href="https://www.bowst.com/about/"
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              className="navbar-brand-text"
              href="https://www.bowst.com/jobs/"
            >
              Resources
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navbar1;
