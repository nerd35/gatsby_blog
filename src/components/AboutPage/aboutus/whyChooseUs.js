import React from 'react';
import PropTypes from 'prop-types';
 
const WhyChooseUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center pt-5 why-choose-us-title">Why Choose Us</h1>
      <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 mb-3">
          <div className="row">
          <div className="col-lg-2 col-sm-2 bg-icons ">
          <img  src={require('../../../images/thumbs-up.png')} className="mb-2 pt-2" style={{width: '50px'}}/>
          </div>
          <div className=" col-lg-10 col-sm-10">
            <div>
              <h3 className="why-choose-us-reason-title px-2">Valuable Ideas</h3>
              <p className="why-choose-us-reason-text px-2">Investig ationes demons travg vunt lectores legere lyrus quod legunt saepius claritas est.</p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-sm-12 mb-3">
          <div className="row">
          <div className="col-lg-2 col-sm-2 bg-icons ">
          <img  src={require('../../../images/barchart.png')} className="mb-2 pt-2" style={{width: '50px'}}/>
          </div>
          <div className=" col-lg-10 col-sm-10">
            <div>
              <h3 className="why-choose-us-reason-title px-2">Industry Experience</h3>
              <p className="why-choose-us-reason-text px-2">Investig ationes demons travg vunt lectores legere lyrus quod legunt saepius claritas est.</p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-sm-12 mb-3">
          <div className="row">
          <div className="col-lg-2 col-sm-2 bg-icons ">
          <img  src={require('../../../images/cash.png')} className="mb-2 pt-2" style={{width: '50px'}}/>
          </div>
          <div className=" col-lg-10 col-sm-10">
            <div>
              <h3 className="why-choose-us-reason-title px-2">Budget Friendly</h3>
              <p className="why-choose-us-reason-text px-2">Investig ationes demons travg vunt lectores legere lyrus quod legunt saepius claritas est.</p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-sm-12 mb-3">
          <div className="row">
          <div className="col-lg-2 col-sm-2 bg-icons ">
          <img  src={require('../../../images/note.png')} className="mb-2 pt-2" style={{width: '50px'}}/>
          </div>
          <div className=" col-lg-10 col-sm-10">
            <div>
              <h3 className="why-choose-us-reason-title px-2">Investment Planning</h3>
              <p className="why-choose-us-reason-text px-2">Investig ationes demons travg vunt lectores legere lyrus quod legunt saepius claritas est.</p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-sm-12 mb-3">
          <div className="row">
          <div className="col-lg-2 col-sm-2 bg-icons ">
          <img  src={require('../../../images/upload.png')} className="mb-2 pt-2" style={{width: '50px'}}/>
          </div>
          <div className=" col-lg-10 col-sm-10">
            <div>
              <h3 className="why-choose-us-reason-title px-2">Business Growth</h3>
              <p className="why-choose-us-reason-text px-2">Investig ationes demons travg vunt lectores legere lyrus quod legunt saepius claritas est.</p>
            </div>
          </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-sm-12 mb-3">
          <div className="row">
          <div className="col-lg-2 col-sm-2 bg-icons ">
          <img  src={require('../../../images/light.png')} className="mb-2 pt-2" style={{width: '50px'}}/>
          </div>
          <div className=" col-lg-10 col-sm-10">
            <div>
              <h3 className="why-choose-us-reason-title px-2">Financial Planning</h3>
              <p className="why-choose-us-reason-text px-2">Investig ationes demons travg vunt lectores legere lyrus quod legunt saepius claritas est.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
WhyChooseUs.propTypes = {};
 
export default WhyChooseUs;