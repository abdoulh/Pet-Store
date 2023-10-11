import React from "react";
import Navbar from "./Navbar.jsx";



const Cart = () => {




    return (

        <div>
            <Navbar />
            <div className="cart-list">
                <div className="cart-item">
                    <span>Product Name: Product </span>
                    <span>Price: $1000</span>
                    <button className="cart-list-button" >Remove</button>
                </div>
                <div className="cart-item">
                    <span>Product Name: Product </span>
                    <span>Price: $1000</span>
                    <button className="cart-list-button" >Remove</button>
                </div>
                <div className="cart-item">
                    <span>Product Name: Product </span>
                    <span>Price: $1000</span>
                    <button className="cart-list-button" >Remove</button>
                </div>
                <h3>Total: $1000 </h3>
                <button >checkout</button>
            </div>
        </div>
    )
}



export default Cart