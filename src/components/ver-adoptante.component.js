import React, { Component } from "react";
import { Row } from "react-bootstrap";
import AdoptanteCard from "./AdoptanteCard";
import { getAdoptantes } from './services'

export default class VerAdoptante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptantes: [],
    };
    this.loadAdoptantes = this.loadAdoptantes.bind(this);
  }

  async loadAdoptantes() {
    const response = await getAdoptantes();

    if (response.status === 200) {
      this.setState({
        adoptantes: response.data,
      });
    }
  }

  componentDidMount() {
    this.loadAdoptantes()
  }

  DataCard() {
    return this.state.adoptantes.map((res, i) => {
      return <AdoptanteCard obj={res} key={i} />;
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
