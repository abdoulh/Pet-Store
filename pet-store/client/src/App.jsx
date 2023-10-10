import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';

import LogIn from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import Products from './components/Products.jsx';
const App =()=>{
  return (
    <Router>
      <Routes>
          <Route path="/" Component={Header}/>
          <Route path="/Login" Component={LogIn}/>
          <Route path="/SignUp" Component={SignUp}/>
          <Route path="/Products" Component={Products}/>
          </Routes>
    </Router>
  );
}

export default App;

