import React from 'react';
import './App.css';
import UseForm01 from './Day-08-Forms/Forms-01';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Router01 from './Day-09-Router/Router01';
import About from './Day-09-Router/pages/about';
import Profile from './Day-09-Router/pages/profile';

function App() {
  return (
    
      <div>
        {/* Ensure Router01 contains Links if it's meant to be navigation */}
        <Router01 /> 
        <Routes>
          <Route path='/' element={<UseForm01 />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    
  );
}

export default App;
