import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ signup , setCurrentUserRole}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
   const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signin",
        {
          email: email,
          password: password,
        }
      );
      console.log("login succed", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.payload.role);
      setCurrentUserRole(response.data.payload.role)
      if (response.data.payload.role === "customer") {
        navigate("/HomePage")

      } else if (response.data.payload.role === "admin") {
        navigate("/AdminProductList")

        return
      }


    } catch (err) {
      console.log(err)
      alert(err.response.data.error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (


    <div className="backGround">
      <h1 className='logo1' >Happy </h1> <h1 className="logo2">Pets</h1>
      <div className="loginBox">
        <form className="py-5">
          <div className="form-group">
            <input
              type="email"
              className="form-control border-0 p-4"
              placeholder="Your Email"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control border-0 p-4"
              placeholder="Your Password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn btn-dark btn-block border-0 py-3"
              onClick={(e) => { handleLogin(e) }}
            >
              Log In
            </button>
          </div>
          <div>
            <a
              className="link" onClick={() => { navigate('/SignUp') }}
            >
              You don't have an account? Sign UP
            </a>
          </div>
        </form>
      </div>
    </div>


  );
};

export default Login;

