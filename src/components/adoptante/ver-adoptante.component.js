import React, { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import AdoptanteCard from "./AdoptanteCard";
import { getAdoptantes } from "../services";

export default class VerAdoptante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptantes: [],
      isLoading: true,
    };
    this.loadAdoptantes = this.loadAdoptantes.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
  }

  setIsLoading() {
    this.setState({ isLoading: false });
  }

  async loadAdoptantes() {
    const response = await getAdoptantes();

    if (response.status === 200) {
      this.setState({
        adoptantes: response.data,
      });
    }
    this.setIsLoading();
  }

  componentDidMount() {
    this.loadAdoptantes();
  }

  DataCard() {
    return this.state.adoptantes.map((res, i) => {
      return <AdoptanteCard obj={res} key={i} />;
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="d-flex  justify-content-center mb-3">
            <Spinner animation="grow" />
          </div>
        )}

        {!this.state.isLoading && !this.state.adoptantes.length && (
          <center className="d-flex  justify-content-center mb-3">
            <h3 style={{ color: "white" }}>No hay adoptantes registrados...</h3>
          </center>
        )}

        {!this.state.isLoading && this.state.adoptantes.length && (
          <Row
            xs={1}
            md={2}
            className="g-4 justify-content-center mb-2"
            style={{ marginRight: 0 }}
          >
            {this.DataCard()}
          </Row>
        )}
      </>
    );
  }
}
