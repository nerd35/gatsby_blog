import React from "react"
import PropTypes from "prop-types"
import './homePage.css';
import { Link } from "gatsby"
import Header from '../header';

const HeroSection = () => {
  return (
    <div className="container-fluid header-bg">
      <Header />
    <div className='container'>
      <div className="row justify-content-between">
        <div className="col-lg-6 col-sm-12 mt-5">
          <h1 className="hero-title">Best Marketing Patform to Really <span className="hero-span">Grow your Business</span></h1>
          <p className="hero-text">Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos tempora officia. Lorem ipsum dolor sit amet consectetur adipisicing dolore.</p>
          <Link to='/' className="btn btn-primary btn-lg text-light">Explore More</Link>
        </div>
        <div className="col-lg-6 col-sm-12 mt-3">
          <img src={require("../../images/slider_1.png")} alt="slider" style={{width: 1000}} />
        </div>
      </div>
    </div>
    </div>
  )
}

HeroSection.propTypes = {}

export default HeroSection
