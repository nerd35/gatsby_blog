import React, { useState } from "react"
import PropTypes from "prop-types"
import "./homePage.css"
import Carousel from "react-bootstrap/Carousel"

const TestimonialSection = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div className=" container-fluid carousel-section">
      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="mt-5 mb-5 text-center">
            <img src={require("../../images/client6.jpg")} className="rounded-circle mt-5"/>
            <h1 className="carousel-title mb-0">Amanda Richards</h1>
            <p className="carousel-position-title">Customer Relations</p>
            <p className="carousel-position-text">Demons trave runt lectores legere lius quod ii legunt saepius clary tyitas Investig ationes demon trave rungt. Investig<br/> ationes trave lector ompanies that responsibility in our core business. We work systematically to integrate corporate<br/> responsibility in our core business.</p>
          </Carousel.Item>
          <Carousel.Item className="mt-5 mb-5 text-center">
            <img src={require("../../images/client6.jpg")} className="rounded-circle mt-5"/>
            <h1 className="carousel-title mb-0">Amanda Richards</h1>
            <p className="carousel-position-title">Customer Relations</p>
            <p className="carousel-position-text">Demons trave runt lectores legere lius quod ii legunt saepius clary tyitas Investig ationes demon trave rungt. Investig<br/> ationes trave lector ompanies that responsibility in our core business. We work systematically to integrate corporate<br/> responsibility in our core business.</p>
          </Carousel.Item>
          <Carousel.Item className="mt-5 mb-5 text-center">
            <img src={require("../../images/client6.jpg")} className="rounded-circle mt-5"/>
            <h1 className="carousel-title mb-0">Amanda Richards</h1>
            <p className="carousel-position-title">Customer Relations</p>
            <p className="carousel-position-text">Demons trave runt lectores legere lius quod ii legunt saepius clary tyitas Investig ationes demon trave rungt. Investig<br/> ationes trave lector ompanies that responsibility in our core business. We work systematically to integrate corporate<br/> responsibility in our core business.</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

TestimonialSection.propTypes = {}

export default TestimonialSection
