import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {

    const navigate = useNavigate()
    return (

        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-lg-5 " id="adminNav">
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
                        <Link to="/AdminProductList" className="nav-item nav-link " id='adminLink'>
                            Product List
                        </Link>
                        <Link to="/AdminUsersList" className="nav-item nav-link" id='adminLink'>Users List</Link>
                        <Link to="/HomePage" className="nav-item nav-link" id='adminLink'>Customer Homepage</Link>


                    </div>


                    <a

                        className="btn btn-lg btn-primary px-3 d-none d-lg-block"
                        id="adminLogout"
                        onClick={() => { localStorage.clear(); navigate('/Login') }}
                    >
                        Log out
                    </a>


                </div>
            </nav>
        </div>
    )


}
export default AdminNav;
