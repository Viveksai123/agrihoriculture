import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Prices from "./components/Prices";
import LoginForm from './components/LoginForm'
import Soilreport from "./components/Soilreport";
import Header from "./components/Header";
import MapComponent from "./components/map";
import Production from "./components/production";
import 'bootstrap/dist/css/bootstrap.min.css';
import home from './components/img/home.jpg';

function App() {
  
  const [activeLanguage, setActiveLanguage] = useState("EN");
  // Function to handle language change
  const changeLanguage = (language) => {
    setActiveLanguage(language);
  };

  return (
    
    <Router>
      <Header activeLanguage={activeLanguage} changeLanguage={changeLanguage} />

     

        <Routes>
          {/* Pass activeLanguage as a prop to the components */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Homepage activeLanguage={activeLanguage} />} />
          <Route path="/prices" element={<Prices activeLanguage={activeLanguage} />} />
          <Route path="/soilreport" element={<Soilreport activeLanguage={activeLanguage} />} />
          <Route path="/map" element={<MapComponent activeLanguage={activeLanguage} />} />
          <Route path="/production" element={<Production activeLanguage={activeLanguage} />} />
        </Routes>
     
    </Router>
  
  );
}

export default App;
