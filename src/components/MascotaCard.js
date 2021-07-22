import React, { Component } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default class MascotaCard extends Component {
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
          <Card.Img
            variant="top"
            width={170}
            height={150}
            alt="171x180"
            src={this.props.obj.foto}
          />
          <Card.Body>
            <Card.Text>
              {this.props.obj.descripcion}, tiene {this.props.obj.edad} años, es{" "}
              {this.props.obj.sexo}, de tamaño {this.props.obj.tamanho}.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button
              href={"/editar-mascota/" + this.props.obj._id}
              variant="success"
            >
              Editar
            </Button>
            <Button onClick={this.eliminarMascota} variant="danger">
              Eliminar
            </Button>
          </Card.Footer>
        </Card>
      </>
    );
  }
}
