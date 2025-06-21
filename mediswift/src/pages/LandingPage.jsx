import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InfoBar from '../components/InfoBar';
import HeroSection from '../components/HeroSection';
import MedicineCard from '../components/MedicineCard';
import ProductSection from '../components/ProductSection';
import './LandingPage.css';
import Footer from '../components/Footer';

function LandingPage() {
  const navigate = useNavigate();

  const sampleMedicines = [
    { name: 'Paracetamol', price: 50, image: '/medicine1.png' },
    { name: 'Ibuprofen', price: 80, image: '/medicine2.png' },
    { name: 'Amoxicillin', price: 120, image: '/medicine3.png' },
    { name: 'Cough Syrup', price: 90, image: '/medicine4.png' },
    { name: 'Vitamin C', price: 60, image: '/medicine5.png' },
    { name: 'Aspirin', price: 70, image: '/medicine6.png' },
    { name: 'Antacid', price: 40, image: '/medicine7.png' },
    { name: 'Cetirizine', price: 30, image: '/medicine8.png' },
  ];

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/api/medicine/search?name=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <InfoBar />
      <HeroSection />

    

      {/* Essential Medicines Section */}
      <div className="medicine-heading">
        <h1>Essential Medicines</h1>
      </div>

      <div className="medicine-list">
        {(searchResults.length > 0 ? searchResults : sampleMedicines).map((med, index) => (
          <MedicineCard key={index} medicine={med} />
        ))}
      </div>

      <div className="explore-more-container">
        <button
          className="explore-more-button"
          onClick={() => navigate('/view-medicines')}
        >
          Explore More &gt;
        </button>
      </div>

      {/* Product and Devices Section */}
      <ProductSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
