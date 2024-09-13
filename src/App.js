import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Prices from "./components/Prices";
import Soilreport from "./components/Soilreport";
// import Fields from "./components/Fields"; // assuming this component exists
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Define all South Indian states in alphabetical order
  const southIndianStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"];

  // useState hook to store the selected state
  const [selectedState, setSelectedState] = useState("");

  // Function to handle the state selection
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">Select a South Indian State</h1>
        
        {/* Dropdown to select the state */}
        <div className="form-group">
          <select className="form-select" value={selectedState} onChange={handleStateChange}>
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

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/soilreport" element={<Soilreport />} />
          {/* <Route path="/fields" element={<Fields />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
