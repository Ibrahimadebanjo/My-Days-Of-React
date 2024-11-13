import React from 'react';
import './App.css';
import UseForm01 from './Day-08-Forms/Forms-01';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Router01 from './Day-09-Router/Router01';
import About from './Day-09-Router/pages/about';
import Profile from './Day-12-Redux/Profile';
import ComponentProp from './Day-10-OF-React/Proptypes';
import Fetching from './Day-11-Data-Fetching/Fetch';
import PostsList from './Day-11-Data-Fetching/Example';
import Axios from './Day-11-Data-Fetching/Axios';
import Redux from './Day-12-Redux/Login';
import ChangeColor from './Day-12-Redux/ChangeColor';

const data = {
  name : "Adebanjo Ibrahim",
  age : 23
}
function App() {
  return (
    
      <div>
        <Profile/>
        <Redux/>
        <ChangeColor/>
        {/* <Routes>
          <Route path='/' element={<UseForm01 />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes> */}
      </div>
    
  );
}

export default App;
