import './App.css'
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Components/LandingPage"
import HomePage from './Components/HomePage.jsx';
import Cart from "./Components/Cart"
import ProductList from './Components/HomePage.jsx';
import axios from 'axios'
const App =()=>{
  const[products,setProducts]=useState([])
  
  const fetchProducts=async()=>{
     try{
     const {data}=await axios.get("http://localhost:3000/api/product")
     setProducts(data)
     console.log(data)
 }
 catch(error){
 console.log(error)
 }
 
   }
   useEffect(()=>{
     fetchProducts()
   })
  return (

    <Router>
      <Routes>
          <Route path="/" Component={LandingPage}/>
          <Route path="/HomePage" Component={HomePage}/>
          <Route path="/Cart" Component={Cart}/>
          <Route path="/Products" element={<ProductList items={products}/>} />
          </Routes>
    </Router>
  );


}

export default App;

