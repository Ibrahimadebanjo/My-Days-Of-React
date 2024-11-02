my main.jsx
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
)

```
my app.jsx

```js
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

```
my pages folder contains about.jsx and profile.jsx

1. about.jsx
```js
const About = () => {
  return (
    <div>

      <h2>About</h2>
    </div>
  )
}

export default About
```
profile.jsx

```javascript


const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  )
}

export default Profile;

```
then finally my Router01.jsx contains

```javascript
import { Link } from "react-router-dom"

const Router01 = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
        <Link to="/about"> About </Link>
        </li>
        <li>
        <Link to="/profile"> Profile </Link>
        </li>
    
          
      </ul>
    </div>
  )
}

export default Router01
```
Then it finally works and I finally understand React router 