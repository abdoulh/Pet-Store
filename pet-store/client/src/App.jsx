import React, { useState, useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import HomePage from './Components/HomePage.jsx';
import Cart from "./Components/Cart.jsx"
import AdminAddProduct from './Components/AdminAddProduct.jsx';
import AdminProductList from './Components/AdminProductList.jsx';
import AdminUsersList from './Components/AdminUsersList.jsx';
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUserID, setCurrentUserID] = useState()
  const [cart, setCart] = useState([])


  const fetchAllCartItems = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/carts/' + currentUserID)
      setCart(data)
    } catch (error) {
      console.log(error)
    }
  }


  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/product")
      setProducts(data)
      getUserId()
      fetchAllCartItems()
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchProducts()

  }, [])


  const getUserId = async () => {

    try {
      const { data } = await axios.get("http://localhost:3000/api/users/payload/" + localStorage.getItem('token'))
      console.log(data.payload.userId)
      setCurrentUserID(data.payload.userId)
    } catch (error) {
      console.log(error)
    }

  }

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
        <Route path="/" element={<LandingPage setCurrentUser={setCurrentUserID} />} />
        <Route path="/Cart" element={<Cart cart={cart} />} />
        <Route path="/HomePage" element={<HomePage items={products} addToCart={addToCart} currentUserID={currentUserID} />} />
        <Route path="/AdminProductList" element={<AdminProductList />} />
        <Route path="/AdminUsersList" element={<AdminUsersList />} />
        <Route path="/AdminAddProduct" element={<AdminAddProduct />} />
      </Routes>
    </Router>
  );



}


export default App;
