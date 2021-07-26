import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";

export default class FormularioAdoptaModal extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeAdoptaNombre = this.onChangeAdoptaNombre.bind(this);
    this.onChangeAdoptaTelefono = this.onChangeAdoptaTelefono.bind(this);
    this.onChangeAdoptaCorreo = this.onChangeAdoptaCorreo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // Setting up state
    this.state = {
      name: "",
      telefono: "",
      correo: "",
      mascota:"",
      isOpen: false,
    };
  }

  onChangeAdoptaNombre(e) {
    this.setState({ name: e.target.value });
  }

  onChangeAdoptaTelefono(e) {
    this.setState({ telefono: e.target.value });
  }

  onChangeAdoptaCorreo(e) {
    this.setState({ correo: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const adoptaObject = {
      name: this.state.name,
      telefono: this.state.telefono,
      correo: this.state.correo,
      mascota: this.props.nameMascota,
    };
    
    console.log(adoptaObject);

    axios
      .post("http://localhost:4000/adopta/crear-adoptante", adoptaObject)
      .then((res) => console.log(res.data)); 

    this.setState({
      name: "",
      telefono: "",
      correo: "",
      mascota: "",
    });
    this.closeModal()
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({
      name: "",
      telefono: "",
      correo: "",
      mascota: "",
      isOpen: false,
    });
  }

  render() {
    return (
      <>
        <div className="d-flex  justify-content-center">
          <Button variant="primary" onClick={this.openModal}>
            Adoptar
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
            <Modal.Title>Formulario de Adopción</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="Nombre" className="mt-3">
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={this.state.name}
                  onChange={this.onChangeAdoptaNombre}
                  autoComplete="off"
                  required
                />
              </Form.Group>

              <Form.Group controlId="Telefono" className="mt-3">
                <Form.Control
                  type="number"
                  placeholder="Teléfono"
                  value={this.state.telefono}
                  onChange={this.onChangeAdoptaTelefono}
                  autoComplete="off"
                  required
                />
              </Form.Group>

              <Form.Group controlId="Correo" className="mt-3">
                <Form.Control
                  type="email"
                  placeholder="@ Correo electrónico"
                  value={this.state.correo}
                  onChange={this.onChangeAdoptaCorreo}
                  autoComplete="off"
                  required
                />
              </Form.Group>

              <Form.Group className="d-flex justify-content-end mt-3">
                <Button variant="success" block="block" type="submit">
                  Enviar
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
