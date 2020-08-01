import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import './homePage.css'

const LatestNewsSection = () => {
  return (
    <div className="container mt-3">
      <div className="row mt-5">
        <div className="col-lg-12 col-sm-12 mt-3 mb-2 text-center">
          <h1 className="latest-news-title">Check Our Latest News</h1>
          <p className="latest-news-text">Deserunt dolore voluptatem assumenda quae possimus sunt dignissimos<br/> tempora officia. Lorem ipsum dolor sit amet consectetur adipisicing dolore.</p>
        </div>
      </div>
      <div className="card-deck">
        <div className="card">
          <img
            src={require("../../images/blog-1.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body px-4">
            <Link to='/' className="card-link-title card-title">How to Run a Successful Business Meeting</Link>
            <p className="card-text mt-2">
            Investig ationes demons trave runt lec tores legere liusry quod ii legunt saepius claritas Investig ationes.
            </p>
            <p className="card-text">
              <span className="text-muted">Aug 12, 2019 <span className="ml-3">In <span className="text-success">Industry</span></span></span>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../../images/blog-2.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body px-4">
            <Link to='/' className="card-link-title card-title">Gold Prices Soar, but Many People don’t Believe it</Link>
            <p className="card-text mt-2">
            Investig ationes demons trave runt lec tores legere liusry quod ii legunt saepius claritas Investig ationes.
            </p>
            <p className="card-text">
              <span className="text-muted">Aug 12, 2019 <span className="ml-3">In <span className="text-success">Industry</span></span></span>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../../images/blog-3.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body px-4">
            <Link to='/' className="card-link-title card-title">Global Automative Market Grows to $600 Billion</Link>
            <p className="card-text mt-2">
            Investig ationes demons trave runt lec tores legere liusry quod ii legunt saepius claritas Investig ationes.
            </p>
            <p className="card-text">
              <span className="text-muted">Aug 12, 2019 <span className="ml-3">In <span className="text-success">Industry</span></span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

LatestNewsSection.propTypes = {}

export default LatestNewsSection
