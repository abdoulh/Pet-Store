import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Navbar = ({ handleSelect, onSearch }) => {
  const [catsDropdownOpen, setCatsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


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
  const _handleSearch = () => {
    onSearch(searchTerm)

  }



  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-0 ">

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
              <div className={`dropdown-menu  bg-dark  rounded-0 m-0 ${catsDropdownOpen ? "show" : ""
                }`}
              >
                <a href="#" className="dropdown-item" onClick={() => { handleSelect({ category: "Toy", animal: "Cat" }) }}>
                  Toys
                </a>
                <a href="#" className="dropdown-item" onClick={() => { handleSelect({ category: "Food", animal: "Cat" }) }}>
                  Food
                </a>
                <a href="#" className="dropdown-item" onClick={() => { handleSelect({ category: "Upholstery", animal: "Cat" }) }}>
                  Upholstery
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

              <div className={`dropdown-menu bg-dark rounded-0 m-0 ${dogsDropdownOpen ? "show" : ""
                }`}>
                <a href="#" className="dropdown-item" onClick={() => { handleSelect({ category: "Toy", animal: "Dog" }) }}>
                  Toys
                </a>
                <a href="#" className="dropdown-item" onClick={() => { handleSelect({ category: "Food", animal: "Dog" }) }}>
                  Food
                </a>
                <a href="#" className="dropdown-item" onClick={() => { handleSelect({ category: "Upholstery", animal: "Dog" }) }}>
                  Upholstery
                </a>
              </div>
            </div>

          </div>
          <div className="navbar-nav mr-auto py-0">

            <div className="navbar-nav mr-auto py-0">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

              />

              <button className="btn btn-lg btn-primary px-3 mx-3 d-lg-block" onClick={_handleSearch}>Search</button>
            </div>
          </div>


          <button
            className="cartButton  px-5 mx-3"
            onClick={() => { navigate("/Cart") }}
          >

          </button>
          <button
            className="logout btn btn-lg btn-primary px-3 mx-3 d-lg-block"
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