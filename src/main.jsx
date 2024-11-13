import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from  "./Features/User.jsx"
import themeReducer from "./Features/Theme.jsx"
const store = configureStore({
  reducer: {
    user: userReducer,
    theme : themeReducer,
  },
})
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  </BrowserRouter>
)
