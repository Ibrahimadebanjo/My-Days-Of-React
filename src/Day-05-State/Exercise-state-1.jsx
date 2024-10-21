import { countriesData } from "./data/countries";

import React, { Component } from 'react';

class RandomDataGenerator extends Component {
  constructor(props) {
    super(props);
    // Initialize the array of objects (the data source)
    this.state = {
     countriesData,
      selectedItem: null,  // This will hold the randomly selected object
    };
  }

  // Method to generate a random index and select a random item from the data array
  generateRandomData = () => {
    const { countriesData } = this.state;
    const randomIndex = Math.floor(Math.random() * countriesData.length);  // Get a random index
    const randomItem = countriesData[randomIndex];  // Get the object at that random index
    this.setState({ selectedItem: randomItem });  // Update state with the randomly selected item
  };

  render() {
const {selectedItem} = this.state;
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Random Data Generator</h1>
        <button onClick={this.generateRandomData} style={buttonStyles}>
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
        {/* {selectedItem && (
          <div style={{ marginTop: '20px' }}>
            <h2>Selected Person:</h2>
            <p>ID: {selectedItem.id}</p>
            <p>Name: {selectedItem.name}</p>
            <p>Age: {selectedItem.age}</p>
          </div>
        )} */}
      </div>
    );
  }
}

// Basic button styling
const buttonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default RandomDataGenerator;
