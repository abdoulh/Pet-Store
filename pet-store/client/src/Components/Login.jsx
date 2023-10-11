import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";

const Login = ({ signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signin",
        {
          email: email,
          password: password,
        }
      );
      console.log("login succed", response);
      localStorage.setItem("token", response.data.token);
      navigate("/Products");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="bg-primary py-5 px-4 px-sm-5">
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
            onClick={(e) => handleLogin(e)}
          >
            Log In
          </button>
        </div>
        <div>
          <a
            className="link"
            onClick={(e) => {
              e.preventDefault();
              signup("singnUp");
            }}
          >
            You don't have an account? Sign UP
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
