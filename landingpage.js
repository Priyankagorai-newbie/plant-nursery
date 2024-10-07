import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery, your one-stop shop for beautiful houseplants.</p>
        <Link to="/products" className="btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
