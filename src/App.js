// src/App.js
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Login from "./Login";
import Formulario from "./Formulario";
import Editar from "./Editar";
import HomeAdmin from "./components/home-admin.component";
import EditarMascota from "./components/editar-mascota.component";
import PrivateRoute from "./PrivateRoute";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/estilo.css";

import logoFoto from "./assets/img/logo.jpg";
import HomeVista from "./components/home-vista.component";

/* Vista Home  */
/* const Home = () => (
  <React.Fragment>
    <DemoCarousel />

    <div>
      &nbsp;
      <center>
        <p>
          Somos un proyecto social para dar hogar a gatos y perros que no lo
          tienen. Tú puedes cambiar una vida, anímate.
        </p>
        <h3 style={{ color: "white" }}>Dale hogar a estos amigos:</h3>{" "}
      </center>
      <div className="contenedor">
        <div className="columna">
          <div className="perrito">
            <img src="https://picsum.photos/id/237/400/300" alt="foto" />
          </div>
          &nbsp; &nbsp;
          <center>
            <p>Hola me llamo Fluffy, soy raza pequeña.</p>
            &nbsp; &nbsp;
            <Link to="/Formulario" className="btn btn-primary">
              Adoptar
            </Link>
          </center>
        </div>
        <div className="columna">
          <div className="perrito">
            <img src="https://picsum.photos/id/1062/400/300" alt="foto" />
          </div>
          &nbsp; &nbsp;
          <center>
            <p>Hola me llamo Fluffy, soy raza pequeña.</p>
            &nbsp; &nbsp;
            <Link to="/Formulario" className="btn btn-primary">
              Adoptar
            </Link>
          </center>
        </div>
        <div className="columna">
          <div className="perrito">
            <img src="https://picsum.photos/id/659/400/300" alt="foto" />
          </div>
          &nbsp; &nbsp;
          <center>
            <p>Hola me llamo Fluffy, soy raza pequeña.</p>
            &nbsp; &nbsp;
            <Link to="/Formulario" className="btn btn-primary">
              Adoptar
            </Link>
          </center>
        </div>
      </div>
      &nbsp; &nbsp;
      <center>
        <h3 style={{ color: "white" }}>Contáctanos</h3>{" "}
      </center>
      &nbsp; &nbsp;
      <div className="contenedor">
        <div className="columna31">
          &nbsp; &nbsp;
          <div className="logo2"></div>
          &nbsp; &nbsp;
          <center>
            <h3 style={{ color: "white" }}>Datos de contacto</h3>
            &nbsp; &nbsp;
            <p style={{ color: "white" }}>Celular: 318 596 59 62</p>
            &nbsp; &nbsp;
            <p style={{ color: "white" }}>Dirección: Calle 2 #3-56</p>
            &nbsp; &nbsp;
            <p style={{ color: "white" }}>
              Email: info@adoptauncallejerito.com
            </p>
            &nbsp; &nbsp;
          </center>
          &nbsp; &nbsp;
        </div>
        <div className="columna32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31806.554586731294!2d-75.72667145591922!3d4.801054053184397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388748eb56c1fd%3A0x95b39410f9f1dfbc!2sPereira%2C%20Risaralda!5e0!3m2!1ses-419!2sco!4v1626285175835!5m2!1ses-419!2sco"
            title="Mapa"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  </React.Fragment>
);
 */
/* Menú y Rutas */

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
        <Route path="/Formulario" component={Formulario} />
        <Route path="/Editar" component={Editar} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={HomeAdmin} />
      </Switch>
    </div>
  );
}
