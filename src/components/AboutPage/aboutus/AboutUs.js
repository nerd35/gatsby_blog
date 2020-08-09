import React from 'react';
import PropTypes from 'prop-types';
import '../about.css';
import {Link} from 'gatsby'
 
const AboutUs = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-5">
        <h1 className="mt-5 overview-title">Company Overview</h1>
        <p className="mt-3 overview-text">Investiga tiones demonstr averunt lectores legere me lius quod ii qua legunt saepius. Claritas est etiam pro cessus dynamicus, qui sequitur mutaety tion em consu etudium awquod he legunt saepius clary tyitas Investig atifonesw. tionem consu etudium.<br/>
        Investig ationes demons trave runt lectores legere liusry awquod he legunt saepius clary tyitas Investig atifonesw</p>
        <Link className="btn btn-success btn-lg  px-3 text-light">Company brochure</Link>
        </div>
        <div className="col-lg-6 col-sm-12">
        <img src={require('../../../images/simg-2.jpg')} style={{borderRadius: '50%', width: "100%"}}/>
        </div>
      </div>
    </div>
  );
}
 
AboutUs.propTypes = {};
 
export default AboutUs;