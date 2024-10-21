import React, { Component } from 'react';

class ThemeToggler extends Component {
  // Initialize the state with light mode as the default
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false  // False means it's in light mode
    };
  }

  // Method to toggle between light and dark modes
  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode  // Toggle the boolean value
    }));
  };

  // Update the body background color and text color based on the mode
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDarkMode !== this.state.isDarkMode) {
      document.body.style.backgroundColor = this.state.isDarkMode ? '#333' : '#fff';  // Dark: #333, Light: #fff
      document.body.style.color = this.state.isDarkMode ? '#fff' : '#000';            // Dark text: #fff, Light text: #000
    }
  }

  // Clean up the styles when the component is unmounted
  componentWillUnmount() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  }

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>{this.state.isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={this.toggleTheme} style={buttonStyles}>
          Toggle to {this.state.isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    );
  }
}

// Basic button styling for better UI
const buttonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default ThemeToggler;
