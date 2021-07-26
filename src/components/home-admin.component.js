import React, { Component } from "react";
import FormularioMascotaModal from "./FormularioMascotaModal";
import VerMascota from "./ver-mascota.component";
import { Link} from "react-router-dom";

export default class HomeAdmin extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <center className="mt-2">
          <h2 style={{ color: "white" }}>¡Hola Administrador!</h2>
        </center>
        <FormularioMascotaModal></FormularioMascotaModal>
        <Link to="/ver-adoptante" className="btn btn-primary" style={{float: "right"}}>Ver adoptantes</Link> 
        <VerMascota></VerMascota>
      </div>
    );
  }
}
