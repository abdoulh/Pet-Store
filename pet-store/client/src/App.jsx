import './App.css'
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Components/Login.jsx';

import LogIn from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
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
          <Route path="/" Component={Header}/>
          <Route path="/Login" Component={LogIn}/>
          <Route path="/SignUp" Component={SignUp}/>
          <Route path="/Products" element={<ProductList items={products}/>} />
          </Routes>
    </Router>
  );


}

export default App;

