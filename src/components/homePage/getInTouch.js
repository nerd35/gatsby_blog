import { Link } from 'gatsby';
import React from "react"
import PropTypes from "prop-types"
import "./homePage.css"

const GetInTouch = () => {
  return (
    <div className="container-fluid bg-warning">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-3 mb-3">
            <img
              src={require("../../images/cta-img.png")}
              alt="img"
            />
          </div>
          <div className="col-lg-6 col-sm-12 mt-3 mb-3">
            <h1 className="get-in-touch-title mb-0">
              Top 35 Company Start up of the Year
            </h1>
            <h1 className="get-in-touch-sub-title">Start your projects now</h1>
            <Link to="/" className="btn btn-info btn-lg text-light border-0">Get In Touch</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

GetInTouch.propTypes = {}

export default GetInTouch
