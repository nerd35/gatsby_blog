import React from 'react';
import PropTypes from 'prop-types';
import './about.css'
 
const TopNav = () =>  (
    <div className="container-fluid bg-purple">
      <div className="container">
      <span className="px-3"><img className='mt-2 mb-2' src={require('../../images/favicon.png')} style={{maxWidth: '25px'}}/> <span className="top-nav-test px-2">support@email.com </span></span>
      <span className="px-3"><img className='mt-2 mb-2' src={require('../../images/music.png')} style={{maxWidth: '25px'}}/> <span className="top-nav-test px-2">800 567.890.576  </span></span>
      <span className="px-3"><img className='mt-2 mb-2' src={require('../../images/clock.png')} style={{maxWidth: '25px'}}/> <span className="top-nav-test px-2">Mon-Sat 8.00 - 18.00
      </span></span>
      <span className="px-5 pt-3"> <span className=" px-2"><img className='mt-2 mb-2' src={require('../../images/facebook.png')} style={{maxWidth: '20px'}}/></span> <span className=" px-2"><img className='mt-2 mb-2' src={require('../../images/instagram.png')} style={{maxWidth: '20px'}}/></span> <span className=" px-2"><img className='mt-2 mb-2' src={require('../../images/twitter.png')} style={{maxWidth: '20px'}}/></span> <span className=" px-2"><img className='mt-2 mb-2' src={require('../../images/whatsapp.png')} style={{maxWidth: '20px'}}/></span></span>
      </div>
    </div>
  );
 
TopNav.propTypes = {};
 
export default TopNav;