import React from 'react';
import PropTypes from 'prop-types';
import '../about.css'
 
const KetFigures = () => {
  return (
    <div className="container-fluid key-figure-section">
      <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-5">
        <div className="mt-5">
        <h1 className="key-figure-title px-4">Key Figures</h1>
        <p className="key-figure-text px-4">Investiga tiones demonstr averunt lectres legere me lius quod ii qua legunt saepius. Clarias est etiam pro cessus dynamicus, qui sequitur mutaety tionem consu etudium Investig ationes demons trave.</p>
        </div>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
        <div className="row">
          <div className="col-lg-6 mb-3 col-sm-12 mt-5">
          <div className="px-3 py-3 bg-light" style={{borderRadius: '20px'}}>
          <h1 className="text-center figure-count-title">520</h1>
          <p className="figure-count-text text-center mb-0">USD Revenue</p>
          </div>
          </div>
          <div className="col-lg-6 mb-3 col-sm-12 mt-5">
          <div className="px-3 py-3 bg-light" style={{borderRadius: '20px'}}>
          <h1 className="text-center figure-count-title ">478</h1>
          <p className="figure-count-text text-center mb-0">USD Assets</p>
          </div>
          </div>
          <div className="col-lg-6 mb-3 col-sm-12">
          <div className="px-3 py-3 bg-light" style={{borderRadius: '20px'}}>
          <h1 className="text-center figure-count-title">980</h1>
          <p className="figure-count-text text-center mb-0">Employees</p>
          </div>
          </div>
          <div className="col-lg-6 col-sm-12">
          <div className="px-3 py-3 bg-light" style={{borderRadius: '20px'}}>
          <h1 className="text-center figure-count-title ">257</h1>
          <p className="figure-count-text text-center mb-0">USD Net Income</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
 
KetFigures.propTypes = {};
 
export default KetFigures;