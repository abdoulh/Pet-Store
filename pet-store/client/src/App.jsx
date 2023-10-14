import React, { useState, useEffect, createContext } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import Cart from "./Components/Cart.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import AdminAddProduct from "./Components/AdminAddProduct.jsx";
import AdminProductList from "./Components/AdminProductList.jsx";
import AdminUsersList from "./Components/AdminUsersList.jsx";
import axios from './services/axios-interceptor'
import ProtectedRouteAdmin from "./providers/admin.provider.jsx";
import ProtectedRouteUser from "./providers/user.provider.jsx";

export const UserContext = createContext();



const App = () => {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [currentUserRole, setCurrentUserRole] = useState(localStorage.getItem("role"));
  const [selectedByUser, setSelectedByUser] = useState(null)
  const [filterData, setFilterData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/product")
      setProducts(data)
      getUserId()
      setFilterData(data)
      console.log(data)
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear()
        navigate('/Login')
      }
      console.log(error.message);

    }
  };

  useEffect(() => {
    fetchProducts();
    getUserId()
  }, []);

  const getUserId = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/users/payload/" +
        localStorage.getItem("token")
      );
      console.log(data.payload.userId);
      setCurrentUser(data.payload)
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        localStorage.clear()
        navigate('/')
      }
      console.log(error.response.status);
    }
  };
  const token = localStorage.getItem("token")

  const addToCart = async (userID, productID) => {
    try {
      const { data } = axios.post(
        "http://localhost:3000/api/carts/" + userID + "/" + productID

      );
      console.log(data)
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear()
      }
      console.log(error.message);
    }

  }
  const handleSelct = (val) => setSelectedByUser(val)
  useEffect(() => {
    if (selectedByUser) {
      const filteredList = products.filter(elem => elem.animal === selectedByUser.animal && elem.category === selectedByUser.category)
      setFilterData(filteredList)
    }

  }, [selectedByUser])

  const _handleSearch = (val) => setSearchTerm(val)
  useEffect(() => {
    const newData = products.filter(elem => elem.name.toLowerCase().includes(searchTerm))
    setFilterData(newData)
  }, [products, searchTerm])



  // console.log(currentUserRole);

  return (

    <UserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={<LandingPage setCurrentUser={setCurrentUser} items={filterData} handleSelct={handleSelct} addToCart={addToCart} currentUserID={currentUser} onSearch={_handleSearch} />}
        />

        <Route
          path="/Login"
          element={<Login setCurrentUserRole={setCurrentUserRole} />}
        />

        <Route
          path="/SignUp"
          element={<SignUp />}
        />

        <Route path="/HomePage" element={<ProtectedRouteUser redirectPath="/" isAllowed={token} >

          <HomePage items={filterData} handleSelct={handleSelct} addToCart={addToCart} currentUser={currentUser} onSearch={_handleSearch} />
        </ProtectedRouteUser>
        }>
        </Route>

        <Route path="/Cart" element={<ProtectedRouteUser redirectPath="/" isAllowed={token} >
          <Cart getUserId={getUserId} />
        </ProtectedRouteUser>
        }>

        </Route>


        <Route path="AdminProductList" element={<ProtectedRouteAdmin redirectPath="/HomePage" isAllowed={token && currentUserRole.includes("admin")} >

          <AdminProductList />
        </ProtectedRouteAdmin>
        }>

        </Route>
        <Route path="AdminUsersList" element={<ProtectedRouteAdmin redirectPath="/HomePage" isAllowed={token && currentUserRole.includes("admin")} >
          <AdminUsersList />
        </ProtectedRouteAdmin>
        }>
        </Route>
        <Route path="AdminAddProduct" element={<ProtectedRouteAdmin redirectPath="/HomePage" isAllowed={token && currentUserRole.includes("admin")} >
          <AdminAddProduct />
        </ProtectedRouteAdmin>
        }>
        </Route>

      </Routes>
    </UserContext.Provider>

  );

};

export default App;