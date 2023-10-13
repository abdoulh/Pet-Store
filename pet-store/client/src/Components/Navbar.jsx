import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Navbar = ({handleSelect}) => {
  const [catsDropdownOpen, setCatsDropdownOpen] = useState(false);
 

  const toggleCatsDropdown = () => {
    setCatsDropdownOpen(!catsDropdownOpen);
    setDogsDropdownOpen(false);
  };
  const [dogsDropdownOpen, setDogsDropdownOpen] = useState(false);

  const toggleDogsDropdown = () => {
    setDogsDropdownOpen(!dogsDropdownOpen);
    setCatsDropdownOpen(false)
  };
 



  const navigate = useNavigate()



  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5 ">
        <a href="" className="navbar-brand d-block d-lg-none">
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            <a href="HomePage" className="nav-item nav-link active">
              Home
            </a>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleCatsDropdown}
                >
                Cats
              </a>
              <div className={`dropdown-menu rounded-0 m-0 ${catsDropdownOpen ? "show" : ""
                }`}
                >
                <a href="#" className="dropdown-item" onClick={()=>{handleSelect({category:"Toy" ,animal:"Cat"})}}>
                  toys
                </a>
                <a href="#" className="dropdown-item"onClick={()=>{handleSelect({category:"Food" ,animal:"Cat"})}}>
                  food  
                </a>
                <a href="#" className="dropdown-item" onClick={()=>{handleSelect({category:"Upholstery" ,animal:"Cat"})}}>
                  upholstery
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleDogsDropdown}
              >
                Dogs
              </a>

              <div className={`dropdown-menu rounded-0 m-0 ${dogsDropdownOpen ? "show" : ""
                }`}>
                <a href="#" className="dropdown-item" onClick={()=>{handleSelect({category:"Toy" ,animal:"Dog"})}}>
                  toys
                </a>
                <a href="#" className="dropdown-item"  onClick={()=>{handleSelect({category:"Food" ,animal:"Dog"})}}> 
                  food
                </a>
                <a href="#" className="dropdown-item"  onClick={()=>{handleSelect({category:"Upholstery" ,animal:"Dog"})}}>
                  upholstery
                </a>
              </div>
            </div>

          </div>


          <button
            className="cartButton  px-5 mx-3"
            onClick={() => { navigate("/Cart") }}
          >

          </button>
          <button
            className="btn btn-lg btn-primary px-3 mx-3 d-lg-block"
            onClick={() => { localStorage.clear(); navigate('/') }}
          >
            Log out
          </button>


        </div>
      </nav>
    </div>
  );
};

export default Navbar;