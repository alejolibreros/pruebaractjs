// src/App.js
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import HomeAdmin from "./components/home-admin.component";
import EditarMascota from "./components/editar-mascota.component";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/estilo.css";

import logoFoto from "./assets/img/logo.jpg";
import HomeVista from "./components/home-vista.component";
import VistaAdoptantes from "./components/vista-adoptantes.component";

// Menú y Rutas
export default function App() {
  return (
    <div>
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
            <Nav.Link href="/admin">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={HomeVista} />
        <Route path="/editar-mascota/:id" component={EditarMascota} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={HomeAdmin} />
        <Route path="/ver-adoptante" component={VistaAdoptantes} />
      </Switch>
    </div>
  );
}
