import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/signin", {
        email: email,
        password: password,
      });
      console.log("login succed", response)
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bg-primary py-5 px-4 px-sm-5">
              <form className="py-5">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 p-4"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password" 
                    className="form-control border-0 p-4"
                    placeholder="Your Password"
                    required
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
                  <a href="/SignUp" className="link">
                    You don't have an account? Sign UP
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
