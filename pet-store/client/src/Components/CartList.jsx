import React, { useContext, useState } from "react";
import axios from '../services/axios-interceptor'
import { UserContext } from '../App.jsx'
import CartProductDetails from "./CartProductDetails.jsx";
import { useNavigate } from "react-router-dom";


const CartList = ({ item, fetchAllCartItems }) => {

    const user = useContext(UserContext)

    const navigate = useNavigate()

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const removeFromCart = async (userID, productID) => {

        try {
            await axios.delete("http://localhost:3000/api/carts/" + userID + "/" + productID)
            fetchAllCartItems()

        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear()
                navigate('/Login')
            }
            console.log(error.message);
        }

    }



    return (

        <div className="cart-item">

            <span className="cartName" onClick={toggleModal} >Product Name: {item.name}</span>
            <span className="cartPrice" >Price: ${item.price}</span>

            <button className="cart-list-button btn-dark" onClick={() => { removeFromCart(user.userId, item.id) }}>Remove</button>
            {
                modal && (
                    <div className="modal-custom">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content-custom">
                            <CartProductDetails selectedProduct={item} remove={removeFromCart} />
                            <button className="close-modal-custom btn btn-lg btn-primary px-3 d-none d-lg-block" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )

}


export default CartList