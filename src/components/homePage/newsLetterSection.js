import React from "react"
import PropTypes from "prop-types"
import "./homePage.css"

const NewsLetterSection = () => {
  return (
    <div className="py-5">
      <div className="container-fluid newsletter-section  py-5">
        <div className="container">
          <div className="row mx-auto text-center mt-5 mb-5">
            <div className="col-lg-12 col-sm-12 text-center">
              <h1 className="text-center newsletter-title mt-5 mb-0">
                Get Started Instantly!
              </h1>
              <h1 className="text-center newsletter-sub-title mt-2">
                Request a Call Back Now
              </h1>
            </div>
            <div className="bg-light mx-auto pr-5 mb-4 shadow">
              <form className="mt-3">
                <div class="form-row">
                  <div class="col-sm-8 px-5">
                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div class="col">
                    <button type="submit" class="btn btn-purple ">
                      Request now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

NewsLetterSection.propTypes = {}

export default NewsLetterSection
