import React from 'react';
import './InfoBar.css';

function InfoBar() {
  return (
    <div className="info-bar">
      <h2>MediSwift for All Medical Services at One Place</h2>
      <div className="info-inputs">
        <input type="text" placeholder="Enter PIN code" />
        <input type="text" placeholder="Enter Delivery Address" />
      </div>
    </div>
  );
}

export default InfoBar;
