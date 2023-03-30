import React from 'react';
import img from './error.gif';
import './Error.scss';

const Error = () => {
  return (
    <div className="error">
      <img src={img} alt="img" />
      <h2>Error 404 (Page not found)</h2>
    </div>
  );
};

export default Error;
