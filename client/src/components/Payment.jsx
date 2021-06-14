import React from 'react';
import { Link } from 'react-router-dom';


const Payment = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto text-center text-uppercase pt-5">
          <h1 className="display-3">Dr Book thank you for Being a man of culture</h1>
        </div>
        <div className="col-md-12 text-center">
          <Link to='/'>
            <button className="btn btn-warning btn-secondary btn-lg">
            Back to Store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

};

export default Payment;