import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

export default class EditarMascota extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeMascotaNombre = this.onChangeMascotaNombre.bind(this);
    this.onChangeMascotaDescripcion =
      this.onChangeMascotaDescripcion.bind(this);
    this.onChangeMascotaFoto = this.onChangeMascotaFoto.bind(this);
    this.onChangeMascotaSexo = this.onChangeMascotaSexo.bind(this);
    this.onChangeMascotaTamanho = this.onChangeMascotaTamanho.bind(this);
    this.onChangeMascotaEdad = this.onChangeMascotaEdad.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.cancelarEdicion = this.cancelarEdicion.bind(this);

    // Setting up state
    this.state = {
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/mascotas/editar-mascota/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          descripcion: res.data.descripcion,
          foto: res.data.foto,
          sexo: res.data.sexo,
          tamanho: res.data.tamanho,
          edad: res.data.edad,
          estado: res.data.estado,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeMascotaNombre(e) {
    this.setState({ name: e.target.value });
  }

  onChangeMascotaDescripcion(e) {
    this.setState({ descripcion: e.target.value });
  }

  onChangeMascotaFoto(e) {
    this.setState({ foto: e.target.value });
  }

  onChangeMascotaSexo(e) {
    this.setState({ sexo: e.target.value });
  }

  onChangeMascotaTamanho(e) {
    this.setState({ tamanho: e.target.value });
  }

  onChangeMascotaEdad(e) {
    this.setState({ edad: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      descripcion: this.state.descripcion,
      foto: this.state.foto,
      sexo: this.state.sexo,
      tamanho: this.state.tamanho,
      edad: this.state.edad,
      estado: this.state.estado,
    };
    /* console.log(`Pet successfully updated!`);
    console.log(studentObject); */

    axios
      .put(
        "http://localhost:4000/mascotas/actualizar-mascota/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log("Mascota actualizada exitosamente !");
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
    });

    this.cancelarEdicion();
  }

  cancelarEdicion() {
    this.props.history.push("/admin");
  }

  render() {
    return (
      <>
        <Container>
          <center className="mt-3 mb-2">
            <h2>Actualizar datos</h2>
          </center>
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="Name" className="">
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={this.state.name}
                    onChange={this.onChangeMascotaNombre}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Sexo">
                  <Form.Control
                    as="select"
                    value={this.state.sexo}
                    onChange={this.onChangeMascotaSexo}
                  >
                    <option>Sexo</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Group controlId="Edad">
                  <Form.Control
                    type="number"
                    placeholder="Edad"
                    value={this.state.edad}
                    onChange={this.onChangeMascotaEdad}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Tamanho">
                  <Form.Control
                    as="select"
                    value={this.state.tamanho}
                    onChange={this.onChangeMascotaTamanho}
                  >
                    <option>Tamaño</option>
                    <option value="Grande">Grande</option>
                    <option value="Medio">Medio</option>
                    <option value="Pequeño">Pequeño</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="Foto" className="mt-3">
              <Form.Control
                type="text"
                placeholder="Fotografía"
                value={this.state.foto}
                onChange={this.onChangeMascotaFoto}
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group controlId="Descripcion" className="mt-3">
              <Form.Control
                as="textarea"
                placeholder="Descripción..."
                value={this.state.descripcion}
                onChange={this.onChangeMascotaDescripcion}
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center mt-3">
              <Button variant="success" block="block" type="submit">
                Actualizar
              </Button>
              <Button
                variant="danger"
                block="block"
                onClick={this.cancelarEdicion}
              >
                Cancelar
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}