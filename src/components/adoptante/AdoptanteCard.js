import React, { Component } from "react";
import { Card } from "react-bootstrap";
import logoFoto from "../../assets/img/logo2.jpg";

export default class AdoptanteCard extends Component {
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
              <b>Teléfono:</b> {this.props.obj.telefono},<br /> <b>Mail:</b>{" "}
              {this.props.obj.correo}, <br />
              <b>Mascota:</b> {this.props.obj.mascota}.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center"></Card.Footer>
        </Card>
      </>
    );
  }
}
