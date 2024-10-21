import React, { useState } from 'react';
import {  countriesData } from './data/countries';
const RandomDataGenerator2 = () => {
  // Initialize state for the array of objects and the selected item
  const [countriesData] = useState([countriesData]);
  const [selectedItem, setSelectedItem] = useState(null); // State for storing the randomly selected object

  // Function to generate random data
  const generateRandomData = () => {
    const randomIndex = countriesData.floor(Math.random() * countriesData.length); // Generate a random index
    const randomItem = countriesData[randomIndex]; // Get the object at the random index
    setSelectedItem(randomItem); // Set the selected item
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Random Data Generator</h1>
      <button onClick={generateRandomData} style={buttonStyles}>
        Generate Random Data
      </button>

      {selectedItem && (
          <div style={{ marginTop: '20px' }}>
           <img src={selectedItem.flag} alt="Country-Flag" />
            <p>Name: {selectedItem.name}</p>
            <p>Capital : {selectedItem.capital}</p>
            <p>Languages: {selectedItem.languages}</p>
            <p>Currency: {selectedItem.currency}</p>
          </div>
  )}
    </div>
  );
};

// Basic button styling
const buttonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
};

// Styling for the image
const imageStyle = {
  marginTop: '20px',
  borderRadius: '8px',
  width: '150px',
  height: '150px',
};

export default RandomDataGenerator2;
