import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (searchTerm.trim() === '') return;

        try {
            
            const response = await fetch(`http://localhost:5000/api/medicine/search?name=${searchTerm}`);
            const data = await response.json(); 

            setResults(data);
        } catch (error) {
            console.error('Error searching medicines:', error);
        }
    };

    return (
        <div className="search-bar-section">
            <input
                type="text"
                placeholder="Search for medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div className="search-results">
                {results.map((medicine, index) => (
                    <div key={index} className="search-result-card">
                        <h4>{medicine.name}</h4>
                        <p>Price: ₹{medicine.price}</p>
                        <p>{medicine.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
