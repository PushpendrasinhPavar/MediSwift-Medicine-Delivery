import React from 'react';
import './MedicineCard.css';

function MedicineCard({ medicine }) {
  return (
    <div className="medicine-card">
      <img src={medicine.image} alt={medicine.name} />
      <h3>{medicine.name}</h3>
      <p>Price: ₹{medicine.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default MedicineCard;
