import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="/static/img/3.jpg" alt="Banner 1" />
          <p className="legend">Mejor adopta, no compres!</p>
        </div>
        <div>
          <img src="/static/img/1.jpg" alt="Banner 2" />
          <p className="legend">Dale un hogar a quien lo necesita</p>
        </div>
      </Carousel>
    );
  }
}
