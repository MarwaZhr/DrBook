import React from 'react';

const Defaults = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto text-center text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h2>page not found</h2>
          <h3>the requested URL<span className="text-danger">{props.location.pathname}</span> was not found</h3>
        </div>
      </div>
    </div>

  );

};

export default Defaults;