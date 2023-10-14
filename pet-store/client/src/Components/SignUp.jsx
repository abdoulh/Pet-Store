import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ login }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgPassword, setErrorMsgPassword] = useState("");
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastName(e.target.value);
  };

  const signup = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          firstName,
          password,
          email,
          lastName,
        }
      );
      navigate('/Login');
      return response;
    } catch (error) {
      console.log("Registration error:", error);
      throw error;
    }
  };

  const validator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsgEmail('Invalid email format');
      return false;
    }
    setErrorMsgEmail('')

    if (password.length < 8) {
      setErrorMsgPassword('Password should be at least 8 characters long');
      return false;
    }

    setErrorMsgPassword('');
    
    return true;
  };

  const handleSignup = async () => {
    if (validator()) {
      try {
        const response = await signup(firstName, lastName, email, password);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="backGround">
      <h1 className='logo1' >Happy </h1> <h1 className="logo2">Pets</h1>
      <div className="singnUpBox">
        <form className="py-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Your First Name"
              required="required"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Your Last Name"
              required="required"
              value={lastName}
              onChange={handleLastnameChange}
            />
          </div>
          {errorMsgEmail && <div className="error-message">{errorMsgEmail}</div>}
          <div className="form-group">
            <input
              type="email"
              className="form-control border-0 p-4"
              placeholder="Your Email"
              required="required"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {errorMsgPassword && <div className="error-message">{errorMsgPassword}</div>}
          <div className="form-group">
            <input
              type="password"
              className="form-control border-0 p-4"
              placeholder="Your Password"
              required="required"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="btn btn-dark btn-block border-0 py-3"
              onClick={(e) => {
                e.preventDefault();
                handleSignup();

              }}
            >
              Register
            </button>
            <div>
              <a
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Login");
                }}
              >
                Already have an account? Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
