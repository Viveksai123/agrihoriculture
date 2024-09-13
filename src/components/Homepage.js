import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Homepage</h1>
      <div className="d-flex justify-content-center gap-3">
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/prices')}
        >
          Analyze Prices
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/soilreport')}
        >
          Analyze Soil Report
        </button>
        {/* Uncomment the button below if you need it */}
        <button 
          className="btn btn-info"
          onClick={() => navigate('/soilreport')}
        >
          Analyze Fields
        </button>
      </div>
    </div>
  );
};

export default Homepage;
