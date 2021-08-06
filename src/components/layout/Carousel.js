import React from "react";
import { Carousel } from "react-bootstrap";

const DemoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src="/static/img/3.jpg"
          // src="https://cdn.pixabay.com/photo/2015/10/12/14/57/dogs-984015_960_720.jpg"
          width={900}
          height={300}
          alt="Banner 1"
        />
        <Carousel.Caption>
          <p className="legend">Mejor adopta, ¡no compres!</p> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          // src="/static/img/1.jpg"
          src="https://dawpetshop.com.co/wp-content/uploads/2019/11/Banner-3.png"
          width={900}
          height={300}
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