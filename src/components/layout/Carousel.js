import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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

// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// export default class DemoCarousel extends Component {
//   render() {
//     return (
//       <Carousel>
//         <div>
//           <img src="/static/img/3.jpg" alt="Banner 1" />
//           <p className="legend">Mejor adopta, no compres!</p>
//         </div>
//         <div>
//           <img src="/static/img/1.jpg" alt="Banner 2" />
//           <p className="legend">Dale un hogar a quien lo necesita</p>
//         </div>
//       </Carousel>
//     );
//   }
// }
