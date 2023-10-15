import React from "react";
import ProductList from "./ProductList.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx"


const HomePage = (props) => {




  return (
    <div className="container-fluid bg-light pt-50 pl-0 pr-0">
      <Navbar handleSelect={props.handleSelct} onSearch={props.onSearch} />
      <div >
        <div className="d-flex flex-column text-center mb-5">
          <h1 className="display-4 m-0 py-5"><span className="premium text-primary">Premium</span> Pet Products</h1>
        </div>
        <div className="row pb-3">
          {props.items.map((item) => (
            <ProductList key={item.id} item={item} addToCart={props.addToCart} currentUser={props.currentUser} />
          ))}
        </div>
      </div>
      <Footer/>
      
    </div>
  );
};
export default HomePage;
