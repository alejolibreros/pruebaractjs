import React, { Component } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class FormularioMascotaModal extends Component {
  constructor(props) {
    super(props);

    // Configuración de funciones
    this.onChangeMascotaNombre = this.onChangeMascotaNombre.bind(this);
    this.onChangeMascotaDescripcion =
      this.onChangeMascotaDescripcion.bind(this);
    this.onChangeMascotaSexo = this.onChangeMascotaSexo.bind(this);
    this.onChangeMascotaTamanho = this.onChangeMascotaTamanho.bind(this);
    this.onChangeMascotaEdad = this.onChangeMascotaEdad.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this._onLogoutClick = this._onLogoutClick.bind(this);
    this.validate = this.validate.bind(this);

    this.fileInput = React.createRef();

    // Configuración de Estado
    this.state = {
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
      isOpen: false,
      errorNombre: "",
      errorDescripcion: "",
    };
  }

  onChangeMascotaNombre(e) {
    this.setState({ name: e.target.value });
  }

  onChangeMascotaDescripcion(e) {
    this.setState({ descripcion: e.target.value });
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

  validate() {
    this.setState({
      errorNombre: "",
      errorDescripcion: "",
    });

    let bandera = false;

    if (this.state.name.trim().length === 0) {
      this.setState({ errorNombre: "Campo obligatorio" });
      bandera = true;
    }
    if (this.state.descripcion.trim().length === 0) {
      this.setState({ errorDescripcion: "Campo obligatorio" });
      bandera = true;
    }

    return bandera;
  }

  _onSubmit(e) {
    e.preventDefault();
    if (!this.validate()) {
      const mascotaObject = new FormData();

      mascotaObject.append("name", this.state.name);
      mascotaObject.append("descripcion", this.state.descripcion);
      mascotaObject.append("foto", this.fileInput.current.files[0]);
      mascotaObject.append("sexo", this.state.sexo);
      mascotaObject.append("tamanho", this.state.tamanho);
      mascotaObject.append("edad", this.state.edad);
      mascotaObject.append("estado", this.state.estado);

      this.props.onSubmit(mascotaObject);

      this.fileInput.current.value = "";

      this.setState({
        name: "",
        descripcion: "",
        foto: "",
        sexo: "",
        tamanho: "",
        edad: "",
        estado: "No Adoptado",
        isOpen: false,
        errorNombre: "",
        errorDescripcion: "",
      });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.fileInput.current.value = "";
    this.setState({
      name: "",
      descripcion: "",
      foto: "",
      sexo: "",
      tamanho: "",
      edad: "",
      estado: "No Adoptado",
      isOpen: false,
      errorNombre: "",
      errorDescripcion: ""
    });
  }

  _onLogoutClick() {
    this.props.onLogoutClick();
  }

  render() {
    return (
      <>
        <div className="d-flex  justify-content-end mb-3">
          <Button variant="primary" onClick={this.openModal}>
            Agregar Mascota
          </Button>
          <Link to="/ver-adoptante">
            <Button variant="primary">Ver adoptantes</Button>
          </Link>
          <Button variant="danger" onClick={this._onLogoutClick}>
            Cerrar sesión
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
            <Form onSubmit={this._onSubmit}>
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
                    <p className="text-danger">{this.state.errorNombre}</p>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Sexo">
                    <Form.Control
                      as="select"
                      value={this.state.sexo}
                      onChange={this.onChangeMascotaSexo}
                      placeholder="select"
                      required
                    >
                      <option value="">Sexo</option>
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
                      min="0"
                      max="20"
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
                      placeholder="select"
                      required
                    >
                      <option value="">Tamaño</option>
                      <option value="Grande">Grande</option>
                      <option value="Medio">Medio</option>
                      <option value="Pequeño">Pequeño</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="Foto" className="mt-3">
                <Form.Control type="file" ref={this.fileInput} required />
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
                <p className="text-danger">{this.state.errorDescripcion}</p>
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
