import React, { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

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

  const Signup = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          firstName: firstName,
          password: password,
          email: email,
          lastName: lastName,
        }
      );
      return response.data;
    } catch (error) {
      console.log("Registration error:", error);
      throw error;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await Signup(firstName, lastName, email, password);
      console.log(response.data);
      navigate('/Login')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="bg-primary py-5 px-4 px-sm-5">
              <form className="py-5" onSubmit={handleSignup}>
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
                    className="btn btn-dark btn-block border-0 py-3"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
