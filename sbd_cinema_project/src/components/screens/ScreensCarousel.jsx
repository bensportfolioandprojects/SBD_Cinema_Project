import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const ScreensCarousel = () => {
return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.celluloidjunkie.com/wp-content/uploads/2019/10/22013848/imax-general-image.jpg" height={600}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>IMAX Screens</h3>
      <p>All of our screens are IMAX enabled.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.mos.cms.futurecdn.net/4f8444ebaa6fc2020c1eac94ad6ce663.jpg"
      height={600}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Dolby Surround Sound</h3>
      <p>All of our screening rooms are fully equiped with Dolby 7.1 Surround Sound.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cozylifefurniture.com/wp-content/uploads/2020/02/black-leather-power-recliner-theater-chairs.jpg"
      height={600}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Reclining Seats</h3>
      <p>All seats are fully reclinable to ensure full comfort.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

export default ScreensCarousel;