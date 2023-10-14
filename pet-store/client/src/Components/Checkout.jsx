import axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from '../App.jsx'
import { useNavigate } from "react-router-dom";






const Checkout = ({ toggle, thanks }) => {


    const user = useContext(UserContext)
    const navigate = useNavigate()


    const [paymentInfo, setPaymentInfo] = useState({})



    const removeAllCartItems = async () => {

        try {

            await axios.delete('http://localhost:3000/api/carts/' + user.userId)
            console.log('removed')

        } catch (error) {
            console.log(error);
        }


    }


    const handlePayment = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPaymentInfo({ ...paymentInfo, [name]: value })

    }


    const handleSubmit = (e) => {

        e.preventDefault()
        if (paymentInfo.paymentMethod === 'Cash') {
            removeAllCartItems()
            toggle()
            thanks()




        }
        else if (paymentInfo.paymentMethod === 'Credit/Debit Card' && paymentInfo.cardNumber.length === 16) {

            removeAllCartItems()
            toggle()
            thanks()




        }

    }




    return (

        <div className="checkoutForm">
            <form className="py-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="tel"
                        className="form-control border-0 p-4 my-2"
                        placeholder="Your phone number"
                        pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                        required="required"
                        onChange={handlePayment} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your address"
                        required="required"
                        onChange={handlePayment} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your zip code"
                        required="required"
                        onChange={handlePayment} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your city"
                        required="required"
                        onChange={handlePayment} />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod" className="method">Payment method</label>
                    <select className="form-control" name="paymentMethod" onChange={handlePayment}>
                        <option disabled selected value=''> Select payment method </option>
                        <option value="Cash">Cash</option>
                        <option value="Credit/Debit Card">Credit/Debit Card</option>
                    </select>
                </div>
                {
                    paymentInfo.paymentMethod === "Credit/Debit Card" && <div className="form-group" onChange={handlePayment}>
                        <input
                            type="tel"
                            inputmode="numeric"
                            pattern="[0-9\s]{13, 19}"
                            autocomplete="cc-number"
                            maxlength="16"
                            className="form-control border-0 p-4"
                            placeholder="xxxx xxxx xxxx xxxx"
                            name="cardNumber"
                            required="required"
                        />
                    </div>
                }
                <div>
                    <input
                        type="submit"
                        className="btn btn-dark btn-block border-0 py-3"
                        value={'Checkout'}
                    />

                </div>
            </form>
        </div>

    )

}

export default Checkout