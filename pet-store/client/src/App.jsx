import './App.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import HomePage from './Components/HomePage.jsx';
import Cart from "./Components/Cart.jsx"
import axios from 'axios'
const App = () => {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [cart, setCart] = useState([])

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/product")
      setProducts(data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const addToCart = async (userID, productID) => {

    try {
      const { data } = axios.post("http://localhost:3000/api/carts/" + userID + "/" + productID)
    } catch (error) {
      console.log(error)

    }

  }

  return (

    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/HomePage" element={<HomePage items={products} />} />
      </Routes>
    </Router>
  );


}

export default App;

