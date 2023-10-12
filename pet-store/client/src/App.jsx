import React, { useState, useEffect, createContext } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import Cart from "./Components/Cart.jsx";
import AdminAddProduct from "./Components/AdminAddProduct.jsx";
import AdminProductList from "./Components/AdminProductList.jsx";
import AdminUsersList from "./Components/AdminUsersList.jsx";
import axios from "axios";
import ProtectedRouteAdmin from "./providers/admin.provider.jsx";
import ProtectedRouteUser from "./providers/user.provider.jsx";

export const UserContext = createContext();



const App = () => {



  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUserID, setCurrentUserID] = useState()
  const [currentUserRole, setCurrentUserRole] = useState(localStorage.getItem("role"));




  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/product")
      setProducts(data)
      getUserId()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getUserId = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/users/payload/" +
        localStorage.getItem("token")
      );
      console.log(data.payload.userId);
      setCurrentUserID(data.payload.userId)
    } catch (error) {
      console.log(error);
    }
  };
  const token = localStorage.getItem("token")

  const addToCart = async (userID, productID) => {
    try {
      const { data } = axios.post(
        "http://localhost:3000/api/carts/" + userID + "/" + productID
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (

<UserContext.Provider value={currentUserID}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage setCurrentUser={setCurrentUserID} />}
        />

        <Route path="/HomePage" element={<ProtectedRouteUser redirectPath="/HomePage"  isAllowed={ token && currentUserRole.includes("customer")} />}>
         
          <HomePage items={products}   addToCart={addToCart}  currentUserID={currentUserID}  />
                   
        </Route>

        <Route path="/Cart" element={<ProtectedRouteUser redirectPath="/HomePage"  isAllowed={ token && currentUserRole.includes("customer")} />}>
         
        <Cart getUserId={getUserId} />
                  
       </Route>

        
        <Route path ="AdminProductList" element={<ProtectedRouteAdmin redirectPath="/HomePage"  isAllowed={ token && currentUserRole.includes("admin")} >
          
        <AdminProductList />
            </ProtectedRouteAdmin>
          }>
      
        </Route>
        <Route path="AdminUsersList" element={<ProtectedRouteAdmin redirectPath="/HomePage"  isAllowed={ token && currentUserRole.includes("admin")} >
          <AdminUsersList />
            </ProtectedRouteAdmin>
          }>
    </Route>
    <Route path="AdminAddProduct" element={<ProtectedRouteAdmin redirectPath="/HomePage"  isAllowed={ token && currentUserRole.includes("admin")} >
          <AdminAddProduct />
            </ProtectedRouteAdmin>
          }>
    </Route>

      </Routes>
    </Router>
    </UserContext.Provider>
  );
};

export default App;
