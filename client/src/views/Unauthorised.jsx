import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <>
      <h1> 403 Unauthorised 403!</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default Unauthorized;
