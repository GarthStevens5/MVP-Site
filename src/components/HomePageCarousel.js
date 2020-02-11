import React from 'react'

import CarouselMailBox from '../mailbox.png'
import CarouselMountains from '../mountains.png'
import Carousel from 'react-bootstrap/Carousel'

const HomePageCarousel = () => { 
  return(
    <div>
        <Carousel slide={false}
        className="carousel-fade">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={CarouselMailBox}
                alt="First slide"
            />
            <Carousel.Caption>
                <h1><b>Who's MVP?</b></h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={CarouselMountains}
            alt="Second slide"
            />
            <Carousel.Caption>
                <h1><b>Why We're Trusted</b></h1>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomePageCarousel