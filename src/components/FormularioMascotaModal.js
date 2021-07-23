import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";

export default class FormularioMascotaModal extends Component {
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
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // Setting up state
    this.state = {
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
      isOpen: false,
    };
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

    const mascotaObject = {
      name: this.state.name,
      descripcion: this.state.descripcion,
      foto: this.state.foto,
      sexo: this.state.sexo,
      tamanho: this.state.tamanho,
      edad: this.state.edad,
      estado: this.state.estado,
    };
    console.log(`Mascota creada!`);
    console.log(mascotaObject);

    axios
      .post("http://localhost:4000/mascotas/crear-mascota", mascotaObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
    });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
      isOpen: false,
    });
  }

  render() {
    return (
      <>
        <div className="d-flex  justify-content-end mb-3">
          <Button variant="primary" onClick={this.openModal}>
            Agregar Mascota
          </Button>
        </div>

        <Modal
          show={this.state.isOpen}
          onHide={this.closeModal}
          size="lg"
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="justify-content-center">
            <Modal.Title>AGREGAR MASCOTA</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
                      placeholder="Edad (Años)"
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
              <Form.Group className="d-flex justify-content-end mt-3">
                <Button variant="success" block="block" type="submit">
                  Agregar
                </Button>
                <Button
                  variant="danger"
                  block="block"
                  onClick={this.closeModal}
                >
                  Cancelar
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
