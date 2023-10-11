import React from "react";

const CartList = ({ item }) => {



    return (

        <div className="cart-item">
            <span>Product Name: {item.name} </span>
            <span>Price: ${item.price}</span>
            <button className="cart-list-button" >Remove</button>
        </div>
    )

}


export default CartList