import React from "react"
import PropTypes from "prop-types"
import "./homePage.css"

const HelpfulSection = () => {
  return (
    <div className="container-fluid border-bottom">
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-lg-12 text-center mt-5">
            <h1 className="helpful-title">
              Helpful Business, The Way It Should Be
            </h1>
            <p className="helpful-text">
              Deserunt dolore voluptatem assumenda quae possimus sunt
              dignissimos tempora officia. Lorem ipsum dolor sit amet <br />
              consectetur adipisicing dolore.
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5 text-center">
            <div>
              <img
                src={require("../../images/wallet.png")}
                style={{ width: 80 }}
              />
              <h1 className="helpful-section-title">WALLET</h1>
              <p className="helpful-section-text">
                Secure and decentralized wallet to manage all your
                crypto-assets/tokens
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5 text-center">
            <div>
              <img
                src={require("../../images/analytics.png")}
                style={{ width: 80 }}
              />
              <h1 className="helpful-section-title">EXCHANGE</h1>
              <p className="helpful-section-text">
                A fast and decentralized exchange to browse and trade
                crypto-assets/tokens
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5 text-center">
            <div>
              <img
                src={require("../../images/laptop-code.png")}
                style={{ width: 80 }}
              />
              <h1 className="helpful-section-title">TOKEN CREATOR</h1>
              <p className="helpful-section-text">
                A powerful tool to seamlessly issue and manage your own
                crypto-assets/tokens
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5 text-center">
            <div>
              <img
                src={require("../../images/chart-network.png")}
                style={{ width: 80 }}
              />
              <h1 className="helpful-section-title">BLOCKCHAIN INCENTIVES</h1>
              <p className="helpful-section-text">
                A suite of services to help you earn free Bantu blockchain
                tokens and other rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HelpfulSection.propTypes = {}

export default HelpfulSection
