import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import CartList from "./CartList.jsx";


const Cart = ({ cart }) => {


    return (

        <div>
            <Navbar />
            <div className="cart-list">
                {cart.map((item) => {

                    return <CartList key={item.id} item={item} />

                })}
                <h3>Total: $1000 </h3>
                <button >checkout</button>
            </div>
        </div>
    )
}



export default Cart