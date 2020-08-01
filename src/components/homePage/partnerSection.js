import React from "react"
import PropTypes from "prop-types"

const PartnerSection = () => {
  return (
    <div className="container-fluid border-bottom">
      <div className="container">
        <div className="row text-center mt-3">
          <div className="col-lg-2 mt-5">
            <img src={require("../../images/cl14.png")} />
          </div>
          <div className="col-lg-2 mt-5">
            <img src={require("../../images/cl15.png")} />
          </div>
          <div className="col-lg-2 mt-5">
            <img src={require("../../images/cl16.png")} />
          </div>
          <div className="col-lg-2 mt-5">
            <img src={require("../../images/cl17.png")} />
          </div>
          <div className="col-lg-2 mt-5">
            <img src={require("../../images/cl18.png")} />
          </div>
        </div>
      </div>
    </div>
  )
}

PartnerSection.propTypes = {}

export default PartnerSection
