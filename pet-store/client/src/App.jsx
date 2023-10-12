import React, { useState, useEffect, createContext } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import HomePage from './Components/HomePage.jsx';
import Cart from "./Components/Cart.jsx"
import AdminUsersList from './Components/AdminUsersList.jsx';
import AdminAddProduct from "./components/AdminAddProduct.jsx"; 
import axios from 'axios'
import AdminProductList from "./components/AdminProductList";

export const UserContext = createContext();



const App = () => {



  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUserID, setCurrentUserID] = useState()





  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/product")
      setProducts(data)
      getUserId()
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
    <UserContext.Provider value={currentUserID}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage setCurrentUser={setCurrentUserID} />} />
          <Route path="/Cart" element={<Cart getUserId={getUserId} />} />
          <Route path="/HomePage" element={<HomePage items={products} addToCart={addToCart} currentUserID={currentUserID} />} />
          <Route path="/AdminProductList" element={<AdminProductList />} />
          <Route path="/AdminUsersList" element={<AdminUsersList />} />
        </Routes>
      </Router>
    </UserContext.Provider>

  );



}


export default App;
