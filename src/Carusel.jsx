import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import image3 from './image/PorcheTaycan.jpg';
import image4 from './image/Mercedes.jpg';
import image5 from './image/BMW.jpg'

function Carusel() {
  return (
    <Carousel>
      <Carousel.Item>
    <img src={image3} alt="First slide" style={{ width: '100%', height: 'auto' }} />
        <Carousel.Caption>
          <h3>Porsche Taycan</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={image4} alt="Second slide" style={{ width: '100%', height: 'auto' }} />
        <Carousel.Caption>
          <h3>Mercedes-Benz EQC</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={image5} alt="Third slide" style={{ width: '100%', height: 'auto' }} />
        <Carousel.Caption>
          <h3>BMW-i4</h3>
          <p>
    
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;