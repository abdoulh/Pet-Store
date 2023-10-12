import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import CartList from "./CartList.jsx";
import Checkout from "./Checkout.jsx";
import { UserContext } from '../App.jsx'

const Cart = () => {

    const user = useContext(UserContext)

    const [cart, setCart] = useState([])
    const [modal, setModal] = useState(false);


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



    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }



    let price = 0
    if (cart.length) {
        price = cart.slice().reduce((total, el) => total + el.price, 0)
    }

    return (

        <div>
            <Navbar />
            <div className="cart-list">
                {cart.map((item) => {

                    return <CartList key={item.id} item={item} fetchAllCartItems={fetchAllCartItems} />

                })}
                <h3 >Total: ${price}</h3>
                <button className=" btn-lg btn-dark px-3 d-none d-lg-block" onClick={toggleModal} >checkout</button>
            </div>
            {
                modal && (
                    <div className="modal-custom">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content-custom-cart">
                            <Checkout />
                            <button className="close-modal-custom btn btn-lg btn-dark px- d-none d-lg-block" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}



export default Cart