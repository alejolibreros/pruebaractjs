import React from "react";
import { Carousel } from "react-bootstrap";

const DemoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src="/static/img/3.jpg"
          width={900}
          height={340}
          alt="Banner 1"
        />
        <Carousel.Caption>
          <p className="legend">Mejor adopta, ¡no compres!</p> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src="https://dawpetshop.com.co/wp-content/uploads/2019/11/Banner-3.png"
          width={900}
          height={340}
          alt="Banner 2"
        />
        <Carousel.Caption>
          <p className="legend">Dale un hogar a quien lo necesita</p> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default DemoCarousel;