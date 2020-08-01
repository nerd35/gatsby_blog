import React from "react"
import PropTypes from "prop-types"
import "./homePage.css"

const HelpfulSection = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center mt-5">
          <h1 className="helpful-title">
            Helpful Business, The Way It Should Be
          </h1>
          <p className="helpful-text">
            Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos
            tempora officia. Lorem ipsum dolor sit amet <br />
            consectetur adipisicing dolore.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5">
        <div>
        <i className="fas fa-wallet"></i>
        </div>
        </div>
      </div>
    </div>
  )
}

HelpfulSection.propTypes = {}

export default HelpfulSection
