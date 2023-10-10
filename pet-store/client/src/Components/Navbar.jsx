import { useEffect, useState } from "react";
import React from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
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
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>

            <a href="service.html" className="nav-item nav-link">
              Products
            </a>

            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              onClick={toggleDropdown}
              
            >
              Cats
            </a>
            {isOpen && (
            <div class="dropdown-menu rounded-0 m-0">
              <a href="blog.html" className="dropdown-item">
                toys
              </a>
              <a href="single.html" className="dropdown-item">
                food
              </a>
              <a href="single.html" className="dropdown-item">
                upholstery
              </a>
            </div>
           
           )}
        
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
    
            >
              Dogs
            </a>
        
              <div class="dropdown-menu rounded-0 m-0">
                <a href="blog.html" className="dropdown-item">
                  toys
                </a>
                <a href="single.html" className="dropdown-item">
                  food
                </a>
                <a href="single.html" className="dropdown-item">
                  upholstery
                </a>
              </div>
            

            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
         
        
          <a
            href="Login"
            className="btn btn-lg btn-primary px-3 d-none d-lg-block"
          >
            Order Now
          </a>
        
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
