import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import home from './img/home.jpg';
import './styles.css';

// Define translations for the Homepage component
const translations = {
  EN: {
    title: 'Homepage',
    analyzePrices: 'Analyze Prices',
    analyzeSoilReport: 'Analyze Soil Report',
    analyzeFields: 'Analyze Fields'
  },
  TE: {
    title: 'హోమ్‌పేజీ',
    analyzePrices: 'ధరలను విశ్లేషించండి',
    analyzeSoilReport: 'మట్టి నివేదికను విశ్లేషించండి',
    analyzeFields: 'పొలాలను విశ్లేషించండి'
  },
  TA: {
    title: 'முகப்பு',
    analyzePrices: 'விலை மதிப்பீடு',
    analyzeSoilReport: 'மண்ணியல் அறிக்கையை மதிப்பீடு செய்க',
    analyzeFields: 'விவரங்களை மதிப்பீடு செய்க'
  },
  KN: {
    title: 'ಮುಖಪುಟ',
    analyzePrices: 'ಮೂಲ್ಯ ಅಂದಾಜು',
    analyzeSoilReport: 'ಮಣ್ಣು ವರದಿ ವಿಶ್ಲೇಷಣೆ',
    analyzeFields: 'ಮೈದಾನಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ'
  },
  ML: {
    title: 'ഹോംപേജ്',
    analyzePrices: 'വിലകളുടെ വിശകലനം',
    analyzeSoilReport: 'മണ്ണിന്റെ റിപ്പോർട്ട് വിശകലനം',
    analyzeFields: 'ഭൂപ്രദേശങ്ങളുടെ വിശകലനം'
  },
  MR: {
    title: 'मुखपृष्ठ',
    analyzePrices: 'किंमत विश्लेषण',
    analyzeSoilReport: 'मातीचा रिपोर्ट विश्लेषण',
    analyzeFields: 'फिल्ड विश्लेषण'
  },
  BN: {
    title: 'হোমপেজ',
    analyzePrices: 'মূল্য বিশ্লেষণ',
    analyzeSoilReport: 'মাটি প্রতিবেদন বিশ্লেষণ',
    analyzeFields: 'ক্ষেত্র বিশ্লেষণ'
  }
};

// Define all South Indian states in alphabetical order
const southIndianStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"];

const Homepage = ({ activeLanguage }) => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");

  // Get the current translations based on the active language
  const t = translations[activeLanguage] || translations['EN']; // Default to English if activeLanguage is not found

  // Function to handle the state selection
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="home" style={{backgroundImage: `url(${home})`}}>
      
      <h1 style={{marginTop:"8vh"}}>Select a South Indian State</h1>
      
      {/* Dropdown to select the state */}
      <div className="form-group" >
        <select className="form-select" value={selectedState} onChange={handleStateChange} style={{width:"200px"}}>
          <option value="" disabled>Select a state</option>
          {southIndianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Display the selected state */}
      {selectedState && (
        <div className="mt-4">
          <h2>Selected State: {selectedState}</h2>
        </div>
      )}
      
      <div className="container">
        <h1 className="text-center mb-4">{t.title}</h1>
        <div className="d-flex justify-content-center gap-3">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/prices')}
          >
            {t.analyzePrices}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/soilreport')}
          >
            {t.analyzeSoilReport}
          </button>
          {/* Uncomment and adjust the button below if needed */}
          <button 
            className="btn btn-info"
            onClick={() => navigate('/fields')} // Adjust the path if necessary
          >
            {t.analyzeFields}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
