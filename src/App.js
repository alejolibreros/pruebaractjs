import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/estilo.css";

import NavbarComponent from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import VistaAdoptantes from "./components/adoptante/vista-adoptantes.component";
import Dashboard from "./components/dashboard/Dashboard";

// Verificar el token para mantener al usuario conectado
if (localStorage.jwtToken) {
  // Establecer la autenticación del encabezado del token de autenticación
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decodificar token y obtener información de usuario y vencimiento
  const decoded = jwt_decode(token);
  // Establecer usuario y isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Compruebe si hay token caducado
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Cerrar sesión de usuario
    store.dispatch(logoutUser());
    // Redirigir para iniciar sesión 
    window.location.href = "./login";
  }
}

// Menú y Rutas
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavbarComponent />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/ver-adoptante"
                component={VistaAdoptantes}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
