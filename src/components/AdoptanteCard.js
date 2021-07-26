import React, { Component } from "react";
import axios from "axios";
import {Card } from "react-bootstrap";
import logoFoto from "../assets/img/logo2.jpg"

export default class AdoptanteCard extends Component {
  constructor(props) {
    super(props);
    this.eliminarMascota = this.eliminarMascota.bind(this);
  }

  eliminarMascota() {
    console.log("Eliminado");
    axios
      .put(
        "http://localhost:4000/mascotas/eliminar-mascota/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Actualización de estado exitosa!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Header>{this.props.obj.name}</Card.Header>
          
          <Card.Body>
            <Card.Text>
            <Card.Img
            variant="top"
            width={170}
            height={150}
            alt="171x180"
            src={logoFoto}
          />
            <b>teléfono:</b> {this.props.obj.telefono},<br/> <b>mail:</b> {this.props.obj.correo}, <br/>
            <b>mascota:</b>  {this.props.obj.mascota}.
             
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            
          </Card.Footer>
        </Card>
      </>
    );
  }
}

/*
name: {
  type: String,
},
telefono: {
  type: Number,
},
correo: {
  type: String,
},
mascota: {
  type: String,
},
*/