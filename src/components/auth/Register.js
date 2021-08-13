import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // Si ha iniciado sesión y el usuario navega a la página de inicio de sesión,
    // debe redirigirlo al dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="login-page">
          <div className="form">
            <div className="logologin" />

            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group className="mt-3">
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                  placeholder="Nombre"
                  autoComplete="off"
                  required
                />
                <Form.Text className="text-muted">{errors.name}</Form.Text>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                  placeholder="@ Correo electrónico"
                  autoComplete="off"
                  required
                />
                <Form.Text className="text-muted">{errors.email}</Form.Text>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                  placeholder="Contraseña"
                  autoComplete="off"
                  required
                />
                <Form.Text className="text-muted">{errors.password}</Form.Text>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                  placeholder="Confirmar contraseña"
                  autoComplete="off"
                  required
                />
                <Form.Text className="text-muted">{errors.password2}</Form.Text>
              </Form.Group>

              <Form.Group className="d-flex justify-content-center mt-3">
                <Button
                  variant="success"
                  block="block"
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent3"
                >
                  Registrarse
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
