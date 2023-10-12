import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import CartList from "./CartList.jsx";
import { UserContext } from '../App.jsx'

const Cart = ({ getUserId }) => {

    const user = useContext(UserContext)

    const [cart, setCart] = useState([])


    const fetchAllCartItems = async () => {
        console.log(user)
        try {
            const { data } = await axios.get('http://localhost:3000/api/carts/' + user)
            setCart(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchAllCartItems()

    }, [user])


    let price = 0
    if (cart.length) {
        price = cart.slice().reduce((total, el) => total + el.price, 0)
    }

    return (

        <div>
            <Navbar />
            <div className="cart-list">
                {cart.map((item) => {

                    return <CartList key={item.id} item={item} />

                })}
                <h3>Total: ${price}</h3>
                <button >checkout</button>
            </div>
        </div>
    )
}



export default Cart