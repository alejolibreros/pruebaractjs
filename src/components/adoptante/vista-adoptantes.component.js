import React from "react";
import Home from "../../App";
import VerAdoptante from "./ver-adoptante.component";
import { Link, Route, Switch } from "react-router-dom";

function VistaAdoptantes() {
  return (
    <div>
      <center className="mt-3 mb-2">
        <h2 style={{ color: "white" }}>Lista de adoptantes</h2>
        &nbsp; &nbsp;
        <Link to="/dashboard" className="btn btn-primary">
          Regresar
        </Link>
      </center>
      &nbsp; &nbsp;
      {<VerAdoptante></VerAdoptante>}
      &nbsp; &nbsp;
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default VistaAdoptantes;
