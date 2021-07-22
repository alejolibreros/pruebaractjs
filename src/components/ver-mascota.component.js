import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import MascotaCard from "./MascotaCard";

export default class VerMascota extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mascotas: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/mascotas/ver-mascota")
      .then((res) => {
        this.setState({
          mascotas: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataCard() {
    return this.state.mascotas.map((res, i) => {
      return <MascotaCard obj={res} key={i} />;
    });
  }

  render() {
    return (
      <>
        <Row
          xs={1}
          md={2}
          className="g-4 justify-content-center mb-2"
          style={{marginRight: 0}}
        >
          {this.DataCard()}
        </Row>
      </>
    );
  }
}
