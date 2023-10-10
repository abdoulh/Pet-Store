import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';

import LogIn from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import Products from './components/Products.jsx';
const App =()=>{
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
          <Route path="/" Component={Header}/>
          <Route path="/Login" Component={LogIn}/>
          <Route path="/SignUp" Component={SignUp}/>
          <Route path="/Products" Component={Products}/>
          </Routes>
    </Router>
  );
=======
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + react </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn moresss
      </p>
    </>
  )
>>>>>>> 56ce697ba60fafabe36bb73c467ec7c1eeeaca4a
}

export default App;

