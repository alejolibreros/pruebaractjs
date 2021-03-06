import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // Redirige al usuario al panel de control cuando inicie sesión
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // dado que manejamos la redirección dentro de nuestro componente,
    // no necesitamos pasar this.props.history como parámetro
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login-page">
        <div className="form">
          <div className="logologin"></div>
          <Form noValidate onSubmit={this.onSubmit}>
            <Form.Group className="mt-3">
              <Form.Control
                id="email"
                type="email"
                placeholder="@ Correo electrónico"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                autoComplete="off"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
                required
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                id="password"
                type="password"
                placeholder="Contraseña"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
                required
              />
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </Form.Group>

            <Form.Group className="d-flex justify-content-center mt-3">
              <Button
                variant="success"
                block="block"
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent3"
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
