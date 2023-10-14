import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar.jsx";
import axios from '../services/axios-interceptor';
import CartList from "./CartList.jsx";
import Checkout from "./Checkout.jsx";
import { UserContext } from '../App.jsx'
import { useNavigate } from "react-router-dom";


const Cart = () => {

    const user = useContext(UserContext)
    const navigate = useNavigate()

    const [cart, setCart] = useState([])
    const [modal, setModal] = useState(false);
    const [thanks, setThanks] = useState(false);

    const toggleThanks = () => {
        setThanks(!thanks);
    };


    const fetchAllCartItems = async () => {
        console.log(user)
        try {
            const { data } = await axios.get('http://localhost:3000/api/carts/' + user.userId)
            setCart(data)
        } catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                localStorage.clear()
                navigate('/Login')
            }
            console.log(error.message);
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
                <h3 >Total: ${price.toFixed(2)}</h3>
                <button className=" btn-lg btn-dark px-3 d-none d-lg-block" onClick={toggleModal} >Checkout</button>
            </div>
            {
                modal && (
                    <div className="modal-custom">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content-custom-cart">
                            <Checkout toggle={toggleModal} thanks={toggleThanks} />
                            <button className="close-modal-custom btn btn-lg btn-dark px- d-none d-lg-block" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )
            }


            {
                thanks && (
                    <div className="modal-checkout">
                        <div onClick={() => { navigate(0) }} className="overlay-checkout"></div>
                        <div className="modal-content-custom-cart-checkout">
                            <h1 className="thanks">Thank you for your Business! Your order is on the way :{')'}</h1>
                            <button className="close-modal-thanks btn btn-lg btn-dark px- d-none d-lg-block" onClick={() => { navigate(0) }}>
                                Back
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}



export default Cart