import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { getOneMascota } from "../services";

export default class EditarMascotaModal extends Component {
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
      isOpen: this.props.estado,
      errorNombre: "",
      errorDescripcion: "",
    };

    this.loadMascotas = this.loadMascotas.bind(this);
  }

  async loadMascotas() {
    const res = await getOneMascota(this.props.mascotaId);

    this.setState({
      name: res.data.name,
      descripcion: res.data.descripcion,
      foto: res.data.foto,
      sexo: res.data.sexo,
      tamanho: res.data.tamanho,
      edad: res.data.edad,
      estado: res.data.estado,
    });
  }

  componentDidMount() {
    this.loadMascotas();
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
      const idMascota = this.props.mascotaId;

      mascotaObject.append("name", this.state.name);
      mascotaObject.append("descripcion", this.state.descripcion);
      mascotaObject.append("foto", this.fileInput.current.files[0]);
      mascotaObject.append("sexo", this.state.sexo);
      mascotaObject.append("tamanho", this.state.tamanho);
      mascotaObject.append("edad", this.state.edad);
      mascotaObject.append("estado", this.state.estado);

      this.props.actualizarMascota(idMascota, mascotaObject);

      this.fileInput.current.value = "";
      this.setState({
        name: "",
        descripcion: "",
        foto: "",
        sexo: "",
        tamanho: "",
        edad: "",
        estado: "No Adoptado",
        errorNombre: "",
        errorDescripcion: "",
      });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
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
                  placeholder="Edad (años)"
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
            <Form.Control type="file" ref={this.fileInput} />
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
              Editar
            </Button>
            <Button
              variant="danger"
              block="block"
              onClick={this.props.handleClose}
            >
              Cancelar
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}
