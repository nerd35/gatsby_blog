import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./homePage.css"

const FooterSection = () => {
  return (
    <div className="container-fluid  bg-light1">
      <div className="container ">
        <div className="row  border-bottom">
          <div className="col-lg-3 mt-5  mb-5 col-sm-6">
            <img
              className="mt-3"
              src={require("../../images/bantu-orange-thumb.png")}
              alt="logo"
              style={{ width: "50px" }}
            />
            <p className="tel-no mb-0"> +123 4567 894778</p>
            <p className="tel-no mb-0">info@company.com</p>
            <p className="tel-no1">
              Melbourne, Australia, 95 <br />
              South Park Avenue
            </p>
          </div>
          <div className="col-lg-3 mt-5  mb-5 col-sm-6">
            <h1 className="link-title mt-3">Company</h1>
            <p className="mb-0">
              <Link to="/" className="links-text">
                About Us
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Contacts Us
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Testimonials
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Careers
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Our Team
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="col-lg-3 mt-5  mb-5 col-sm-6">
            <h1 className="link-title mt-3">Services</h1>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Business
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Marketing
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Management
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Accounting
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Training
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Consultation
              </Link>
            </p>
          </div>
          <div className="col-lg-3 mt-5 mb-5 col-sm-6">
            <h1 className="link-title mt-3">Useful Links</h1>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Blog
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Client Area
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Support
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                FAQ's
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Newsletter
              </Link>
            </p>
            <p className="mb-0">
              <Link to="/" className="links-text">
                Events
              </Link>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12 py-3">
            <h1 className="copyright-text">© 2020 Bantus. All rights reserved. Created by <span className="text-warning">Bantus</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

FooterSection.propTypes = {}

export default FooterSection
