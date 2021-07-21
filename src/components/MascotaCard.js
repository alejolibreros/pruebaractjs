import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default class MascotaCard extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    {/* <Card style={{ width: "18rem" }}> */}
    return (
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
            {this.props.obj.descripcion}, {this.props.obj.sexo},
            {this.props.obj.tamanho},{this.props.obj.edad}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success">Editar</Button>
          <Button variant="danger">Eliminar</Button>
        </Card.Footer>

        {/* <tr>
        <td>{this.props.obj.estado}</td>
        <td>
        <Link
        className="edit-link"
            to={"/edit-student/" + this.props.obj._id}
            >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
          Delete
          </Button>
          </td>
        </tr> */}
      </Card>
    );
  }
}
