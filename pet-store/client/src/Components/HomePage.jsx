import React from "react";
import ProductList from "./ProductList.jsx";
import Navbar from "./Navbar.jsx";


const HomePage = (props) => {
  return (
    <div className="container-fluid bg-light pt-50 pl-0 pr-0">
      <Navbar />
      <div className="container py-5">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Our Services</h4>
          <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Pet Services</h1>
        </div>
        <div className="row pb-3">
          {props.items.map((item) => (
            <ProductList key={item.id} item={item} addToCart={props.addToCart} currentUserID={props.currentUserID} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
