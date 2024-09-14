import React, { useState } from 'react';

// Function to calculate production based on the area
const calculateProduction = (area) => {
  if (area <= 10) return Math.floor(Math.random() * 200); // Small area, smaller production (in kg)
  if (area <= 50) return Math.floor(Math.random() * 500) + 200; // Medium area, medium production (in kg)
  return Math.floor(Math.random() * 1000) + 700; // Large area, larger production (in kg)
};

// Prices per quintal for crops in Telangana (₹ per quintal)
const cropPrices = {
  Wheat: 2200,
  Rice: 1900,
  Maize: 1500,
  // Add the remaining crop prices here
};

const Production = ({ activeLanguage }) => {
  const [district, setDistrict] = useState('');
  const [season, setSeason] = useState('');
  const [crop, setCrop] = useState('');
  const [area, setArea] = useState('');
  const [production, setProduction] = useState(null);
  const [price, setPrice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate production based on area
    const finalProductionInKg = calculateProduction(area);
    const finalProductionInQuintals = finalProductionInKg / 100; // Convert production to quintals

    // Get the price for the selected crop
    const cropPrice = cropPrices[crop] || 0;
    const totalPrice = finalProductionInQuintals * cropPrice;

    setProduction(finalProductionInQuintals); // Set production in quintals
    setPrice(totalPrice); // Set total price
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: '10vh', padding: '20px', maxWidth: '800px', margin: 'auto', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontFamily: 'Roboto, sans-serif', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
        {activeLanguage === 'EN' ? 'Production Form' : 'ప్రొడక్షన్ ఫారం'}
      </h1>
      <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif', color: '#555' }}>
        <label>
          District:
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </label>
        <label>
          Season:
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          >
            <option value="">Select Season</option>
            <option value="Rabi">Rabi</option>
            <option value="Kharif">Kharif</option>
          </select>
        </label>
        <label>
          Crop:
          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          >
            <option value="">Select Crop</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Maize">Maize</option>
            {/* Add the remaining 19 crops here */}
          </select>
        </label>
        <label>
          Area (in acres):
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            width: '100%'
          }}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Area (Acres)</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Production (Quintals)</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Total Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{area}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{production}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{price}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Production;
