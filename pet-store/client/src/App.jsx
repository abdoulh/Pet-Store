import React, { useState, useEffect, createContext } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import HomePage from './Components/HomePage.jsx';
import Cart from "./Components/Cart.jsx"
import AdminAddProduct from './Components/AdminAddProduct.jsx';
import AdminProductList from './Components/AdminProductList.jsx';
import AdminUsersList from './Components/AdminUsersList.jsx';
import axios from 'axios'

export const UserContext = createContext();



const App = () => {


  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUserID, setCurrentUserID] = useState()
  
const[selectedByUser,setSelectedByUser]=useState(null)
const [filterData,setFilterData]=useState([])
  





  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/product")
      setProducts(data)
      getUserId()
      setFilterData(data)
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
  const handleSelct=(val)=>setSelectedByUser(val)
  useEffect(()=>{
    if(selectedByUser){
    const filteredList=products.filter(elem=>elem.animal===selectedByUser.animal&&elem.category===selectedByUser.category)
    setFilterData(filteredList)
    }

  },[selectedByUser])




  return (
    <UserContext.Provider value={currentUserID}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage setCurrentUser={setCurrentUserID} />} />
          <Route path="/Cart" element={<Cart getUserId={getUserId} />} />
          <Route path="/HomePage" element={<HomePage items={filterData} addToCart={addToCart} currentUserID={currentUserID} handleSelct={handleSelct} />} />
          <Route path="/AdminProductList" element={<AdminProductList />} />
          <Route path="/AdminUsersList" element={<AdminUsersList />} />
          <Route path="/AdminAddProduct" element={<AdminAddProduct />} />
        </Routes>
      </Router>
    </UserContext.Provider>

  );



}


export default App;
