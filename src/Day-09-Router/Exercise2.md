App.jsx
```js
// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fixed imports
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home/Home';
import All from "./Pages/Home/Categories/All";
import Categories from "./Pages/Home/Categories";
import StartUps from "./Pages/Home/Categories/StartUps";
import Security from "./Pages/Home/Categories/Security";
import Ai from "./Pages/Home/Categories/AI";
import Apps from "./Pages/Home/Categories/Apps";
import Tech from "./Pages/Home/Categories/Tech";

function App() {
  return (
    <div>
        <Navigation />
        <Categories /> {/* Renders the category navigation */}
          <Routes>
            <Route path="/all" element={<All />} /> {/* Route for the All component */}
            <Route path="/startups" element={<StartUps />} /> {/* Route for the StartUps component */}
            <Route path="/security" element={<Security />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
       
      </div>
 
  );
}

export default App;

```
main.jsx
```js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);

//category.jsx
// Categories.js
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/all">All</Link> {/* Correct path for All component */}
        </li>
        <li>
          <Link to="/startups">StartUps</Link> {/* Correct path for StartUps component */}
        </li>
        <li>
          <Link to="/security">Security</Link> {/* Correct path for All component */}
        </li>
        <li>
          <Link to="/ai">AI</Link> {/* Correct path for All component */}
        </li>
        <li>
          <Link to="/apps">Apps</Link> {/* Correct path for All component */}
        </li>
        <li>
          <Link to="/tech">Tech</Link> {/* Correct path for All component */}
        </li>
        {/* Add other category links here as needed */}
      </ul>
    </div>
  );
};

export default Categories;

```
each individual components returns jsx element/ html to render to the screen
