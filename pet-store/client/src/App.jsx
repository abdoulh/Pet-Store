import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage.jsx';
import HomePage from './Components/HomePage.jsx';
import Cart from './Components/Cart.jsx'

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/Cart" Component={Cart} />
      </Routes>
    </Router>
  );


}

export default App;

