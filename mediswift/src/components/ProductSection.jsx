import React from 'react';
import './ProductSection.css';
import { useNavigate } from 'react-router-dom';

function ProductSection() {
  const navigate = useNavigate();

  return (
    <div className="product-section">
      <h2 className="section-title">Products and Devices</h2>
      <div className="product-list">
        <div className="product-card" onClick={() => navigate('/orthopedic')}>
          <img src="/device1.png" alt="Orthopedic" />
          <h3>Orthopedic</h3>
        </div>
        <div className="product-card" onClick={() => navigate('/devices')}>
          <img src="/device2.png" alt="Devices" />
          <h3>Devices</h3>
        </div>
        <div className="product-card" onClick={() => navigate('/feminine-hygiene')}>
          <img src="/device3.png" alt="Feminine Hygiene" />
          <h3>Feminine Hygiene</h3>
        </div>
        <div className="product-card" onClick={() => navigate('/first-aid')}>
          <img src="/device4.png" alt="First Aid" />
          <h3>First Aid</h3>
        </div>
        <div className="product-card" onClick={() => navigate('/life-support')}>
          <img src="/device5.png" alt="Life Support" />
          <h3>Life Support</h3>
        </div>
      </div>

      <div className="more-categories-container">
        <button className="more-categories-button" onClick={() => navigate('/more-categories')}>
          More Categories &gt;
        </button>
      </div>
    </div>
  );
}

export default ProductSection;
