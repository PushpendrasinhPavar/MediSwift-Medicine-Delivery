import React, { useState } from 'react';
import './HeroSection.css';
import axios from 'axios';
import MedicineCard from './MedicineCard';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/medicine/search?name=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching medicines', error);
    }
  };

  return (
    <div className="hero-section">
      <h2>MediSwift - Your Trusted Medicine Partner</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for medicines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="medicine-list">
        {searchResults.map((medicine, index) => (
          <MedicineCard key={index} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
