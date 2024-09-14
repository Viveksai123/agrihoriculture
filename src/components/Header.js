import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Make sure to include this CSS file

const Header = ({ activeLanguage, changeLanguage }) => {
const southIndianStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"];
const [selectedState, setSelectedState] = useState("");
const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Agriculture Portal</h1>
        <div className="language-select">
          <label htmlFor="languageSelect">Language</label>
          <select
            id="languageSelect"
            className="language-dropdown"
            value={activeLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="EN">English</option>
            <option value="TE">Telugu</option>
            <option value="TA">Tamil</option>
            <option value="KN">Kannada</option>
            <option value="ML">Malayalam</option>
          </select>
        </div>
        <div className='language-select '> 
        {selectedState && (
         <div className="mt-4">
           <h2>{selectedState}</h2>
         </div>
       )}
       </div>
        <div className='language-select '>
        <label htmlFor="State">State</label>
      
      {/* Dropdown to select the state */}
      <div className="form-group" >
        <select id="State" className="form-select" value={selectedState} onChange={handleStateChange} style={{width:"200px"}}>
          <option value="" disabled>Select a state</option>
          {southIndianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      
      </div>
        {/* Navigation Menu */}
        <div className="menu-container" style={{marginRight:"-5vh"}}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>
          {isMenuOpen && (
            <nav className="navbar-dropdown">
              <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                Home
              </a>
              <a className="nav-link" href="/prices" onClick={(e) => { e.preventDefault(); navigate('/prices'); }}>
                Prices
              </a>
              <a className="nav-link" href="/soilreport" onClick={(e) => { e.preventDefault(); navigate('/soilreport'); }}>
                Soil Report
              </a>
              <a className="nav-link" href="/map" onClick={(e) => { e.preventDefault(); navigate('/map'); }}>
                Organic Farms
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
