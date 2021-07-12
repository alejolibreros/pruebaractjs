// src/App.js

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import Category from "./Category";
// import Products from "./Products";
import Login from './Login';
import PrivateRoute from "./PrivateRoute";

const Home = () => (
  <div>
    <h6>Home</h6> 
    &nbsp;
    <center>
    <p>Somos un proyecto social para dar hogar a gatos y perros que no lo tienen. Tu puedes cambiar una vida, anímate.
      </p> 
    
    <h3>Dale hogar a estos amigos:</h3>  </center>
  </div>
);

const Admin = () => (
  <div>
    <h2>Hola admin!</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        
        <Route path="/login"><Login /></Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};