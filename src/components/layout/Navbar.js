import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logoFoto from '../../assets/img/logo.jpg'

class NavbarComponent extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <img src={logoFoto} alt="Logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/login">Administrador</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavbarComponent;
