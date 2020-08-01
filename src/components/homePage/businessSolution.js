import React from "react"
import PropTypes from "prop-types"
import "./homePage.css"

const BusinessSolution = () => {
  return (
    <div className="container-fluid border-bottom">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12 col-sm-12 text-center">
            <h1 className="business-solution-title">
              Amazing Business Solution
              <br />
              Whatever Your Needs
            </h1>
            <p className="business-solution-text">
              Deserunt dolore voluptatem assumenda quae possimus sunt
              dignissimos tempora officia. Lorem <br />
              ipsum dolor sit amet consectetur adipisicing dolore
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-5">
            <h1 className="business-solution-section-title mt-5">
              Insurance And Finance
            </h1>
            <p className="business-solution-section-text">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veri
              <br /> tatis et quasi archi. Totam rem aperiam, eaque ipsa quae
              <br /> abillo. Totam rem aperiam, eaque ipsa quae ab illo
              <br /> inventore veritatis et quasi archi.
              <br />
              <br />
              On the other hand we denounce with righteous indignation
              <br /> and dislike men who are so beguiled.
            </p>
          </div>

          <div className="col-lg-6 col-sm-12 mt-2">
            <img src={require("../../images/service1.png")} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

BusinessSolution.propTypes = {}

export default BusinessSolution
