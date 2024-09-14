import React, { useState } from 'react';

const SoilReport = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorous: '',
    potassium: '',
    temp: '',
    humidity: '',
    ph: '',
    rainfall: '',
    file: null,
  });

  const [cropData, setCropData] = useState(null);

  // Handle form field change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  // List of crops
  const crops = [
    'Rice', 'Wheat', 'Corn', 'Barley', 'Soybean', 'Cotton', 'Sugarcane',
    'Potato', 'Tomato', 'Onion', 'Garlic', 'Carrot', 'Lettuce', 'Cucumber',
    'Pepper', 'Beans', 'Peas', 'Chili', 'Spinach', 'Cabbage', 'Cauliflower',
    'Pumpkin', 'Squash', 'Melon'
  ];

  // Generate random success rates for crops
  const generateRandomSuccessRates = () => {
    return crops.map(crop => ({
      crop,
      successRate: Math.floor(Math.random() * 46) + 50  // Random success rate between 50 and 95
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let randomCropData = generateRandomSuccessRates();

    // Filter crops with success rate between 50 and 95
    randomCropData = randomCropData.filter(crop => crop.successRate >= 3 && crop.successRate <= 91);

    // Sort crops by success rate in descending order
    randomCropData.sort((a, b) => b.successRate - a.successRate);

    setCropData(randomCropData);
    console.log('Submitted data:', formData);
  };

  return (
    <div className="container " style={{marginTop:"10vh", fontFamily:'playfair display',padding:"20px"}}>
      <h1 className="text-center">Soil Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nitrogen" className="form-label">Nitrogen</label>
          <input
            type="text"
            className="form-control"
            id="nitrogen"
            name="nitrogen"
            value={formData.nitrogen}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phosphorous" className="form-label">Phosphorous</label>
          <input
            type="text"
            className="form-control"
            id="phosphorous"
            name="phosphorous"
            value={formData.phosphorous}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="potassium" className="form-label">Potassium</label>
          <input
            type="text"
            className="form-control"
            id="potassium"
            name="potassium"
            value={formData.potassium}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="temp" className="form-label">Temperature</label>
          <input
            type="text"
            className="form-control"
            id="temp"
            name="temp"
            value={formData.temp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="humidity" className="form-label">Humidity</label>
          <input
            type="text"
            className="form-control"
            id="humidity"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ph" className="form-label">pH</label>
          <input
            type="text"
            className="form-control"
            id="ph"
            name="ph"
            value={formData.ph}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rainfall" className="form-label">Rainfall</label>
          <input
            type="text"
            className="form-control"
            id="rainfall"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload Soil Report File</label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Report</button>
      </form>

      {/* Display crop suitability table if data is available */}
      {cropData && (
        <div className="mt-4">
          <h2 className="text-center">Sorted Crop Success Rates</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Crop</th>
                <th>Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {cropData.map((crop, index) => (
                <tr key={index}>
                  <td>{crop.crop}</td>
                  <td>{crop.successRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SoilReport;