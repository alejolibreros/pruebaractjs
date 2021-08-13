import React, { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import DemoCarousel from "./Carousel";
import HomeMascotaCard from "./HomeMascotaCard";
import { getMascotas } from "../services";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mascotas: [],
      isLoading: true,
    };
    this.loadMascotas = this.loadMascotas.bind(this);
  }

  async loadMascotas() {
    const response = await getMascotas();

    if (response.status === 200) {
      this.setState({
        mascotas: response.data,
      });
    }

    this.setState({
      isLoading: false,
    });
  }

  componentDidMount() {
    this.loadMascotas();
  }

  DataCard() {
    return this.state.mascotas.map((res, i) => {
      return <HomeMascotaCard obj={res} key={i} />;
    });
  }

  render() {
    return (
      <>
        <DemoCarousel />
        <center className="mt-4">
          <p>
            Somos un proyecto social para dar hogar a gatos y perros que no lo
            tienen. Tú puedes cambiar una vida, anímate.
          </p>
          <h3 style={{ color: "white" }}>Dale hogar a estos amigos</h3>
        </center>

        {this.state.isLoading && (
          <div className="d-flex  justify-content-center mb-3 mt-5">
            <Spinner animation="grow" />
          </div>
        )}
        {!this.state.isLoading && !this.state.mascotas.length && (
          <center className="d-flex  justify-content-center mb-3">
            <h3 style={{ color: "white" }}>No hay mascotas registradas...</h3>
          </center>
        )}
        {!this.state.isLoading && this.state.mascotas.length && (
          <Row
            xs={1}
            md={2}
            className="g-4 justify-content-center mt-2"
            style={{ marginRight: 0 }}
          >
            {this.DataCard()}
          </Row>
        )}

        <center className="mt-4">
          <h3 style={{ color: "white" }}>Contáctanos</h3>{" "}
        </center>

        <div className="contenedor mt-4">
          <div className="columna31">
            <div className="logo2 mt-5"></div>
            &nbsp; &nbsp;
            <center>
              <h3 style={{ color: "white" }}>Datos de contacto</h3>
              &nbsp; &nbsp;
              <p style={{ color: "white" }}>Celular: 318 596 59 62</p>
              &nbsp; &nbsp;
              <p style={{ color: "white" }}>Dirección: Calle 2 #3-56</p>
              &nbsp; &nbsp;
              <p style={{ color: "white" }}>
                Email: info@adoptauncallejerito.com
              </p>
              &nbsp; &nbsp;
            </center>
            &nbsp; &nbsp;
          </div>
          <div className="columna32">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31806.554586731294!2d-75.72667145591922!3d4.801054053184397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388748eb56c1fd%3A0x95b39410f9f1dfbc!2sPereira%2C%20Risaralda!5e0!3m2!1ses-419!2sco!4v1626285175835!5m2!1ses-419!2sco"
              title="Mapa"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
