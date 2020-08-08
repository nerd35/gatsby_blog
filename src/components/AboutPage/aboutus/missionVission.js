import React from 'react';
import PropTypes from 'prop-types';
import '../about.css'
 
const MissionVission = () => {
  return (
    <div className="container-fluid bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 py-5">
            <div className="px-2">
              <h1 className="mission-title">Bantus Mission</h1>
              <p className='mission-text'>Investiga tiones demonstr averunt lectres legere melius quodqua legunt saepius. Clarias kest etiam pro cessus dynamicus squitur mutaety tion em consum etudium. Investig ationes demons trave huerunt lectores legere liusry. Investiga tiones demonstr averunt.</p>
              <p className="mb-0"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Client-Focused</span></p>
              <p className="mb-0 mt-1"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Leadership</span></p>
              <p className="mb-0 mt-1"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Execution Excellence</span></p>
              <p className="mb-0 mt-1"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Aspiration</span></p>
            </div>
          </div>
          
          <div className="col-lg-6 col-sm-12 py-5">
            <div className="px-2">
              <h1 className="mission-title">Bantus Vission</h1>
              <p className='mission-text'>Investiga tiones demonstr averunt lectres legere melius quodqua legunt saepius. Clarias kest etiam pro cessus dynamicus squitur mutaety tion em consum etudium. Investig ationes demons trave huerunt lectores legere liusry. Investiga tiones demonstr averunt.</p>
              <p className="mb-0"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Client-Focused</span></p>
              <p className="mb-0 mt-1"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Leadership</span></p>
              <p className="mb-0 mt-1"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Execution Excellence</span></p>
              <p className="mb-0 mt-1"><span className="bg-light-arrow-list px-2 py-1"> {`>`} </span><span className="px-3 bg-light-arrow-list-text">Aspiration</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
MissionVission.propTypes = {};
 
export default MissionVission;