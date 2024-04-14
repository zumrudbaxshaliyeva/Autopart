import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../Image';
import "../../assets/css/carousel.css"
const MyCarousel = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src={Image.carousel_bg_1} text="First slide" />
        <Carousel.Caption>
          <h1 className='carousel-title'>
            <span className='carousel-title-diff'>Welcome to</span>
            Autoparts
          </h1>
          <h2 className='carousel-title2'>
            <span className='carousel-title-diff2'>THE BEST </span>
            CAR REPAIR SERVICE
          </h2>
          <p className='carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br></br>
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className='shop-btn'>Shop Now</a>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image.carousel_bg_2} text="Second slide" />
        <Carousel.Caption>
        <h1 className='carousel-title' >
            <span className='carousel-title-diff'>Welcome to</span>
            Autoparts
          </h1>
          <h2 className='carousel-title2'>exciting bundle get
            <span className='carousel-title-diff2'>30%</span>
            off
          </h2>
          <p className='carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br></br>
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className='shop-btn'>Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image.carousel_bg_3} text="Third slide" />
        <Carousel.Caption>
        <h1 className='carousel-title'>
            <span className='carousel-title-diff'>Welcome to</span>
            Autoparts
          </h1>
          <h2 className='carousel-title2'>New model
            <span className='carousel-title-diff2'>2019 </span>
          
          </h2>
          <p className='carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br></br>
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className='shop-btn'>Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel