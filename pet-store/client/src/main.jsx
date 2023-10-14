import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>
  ,
)
