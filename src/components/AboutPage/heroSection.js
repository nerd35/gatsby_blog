import React from 'react';
import PropTypes from 'prop-types';
import './about.css'
 
const Herosection = () =>  (
    <div className="container-fluid hero-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 col-lg-12 mt-5 ">
          <h1 className="mt-5 about-title ">About us</h1>
          <h1 className="breadcrumb1"><span className="about-home-link">Home</span> <span className="about-breadcrumb"> {`>`} About Us</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
 
Herosection.propTypes = {};
 
export default Herosection;