import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import AdoptanteCard from "./AdoptanteCard";

export default class VerAdoptante extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptantes: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/adopta/ver-adoptante")
      .then((res) => {
        this.setState({
          adoptantes: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
