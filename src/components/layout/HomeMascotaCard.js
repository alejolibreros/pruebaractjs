import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormularioAdoptaModal from "./FormularioAdoptaModal";

export default class HomeMascotaCard extends Component {
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
            <FormularioAdoptaModal nameMascota={this.props.obj.name}/>
          </Card.Footer>
        </Card>
      </>
    );
  }
}
