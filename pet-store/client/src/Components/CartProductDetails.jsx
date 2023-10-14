import React, { useContext } from "react";
import { UserContext } from '../App.jsx'


const CartProductDetails = ({ selectedProduct, remove }) => {

    const user = useContext(UserContext)


    return (

        <div className="d-flex flex-column text-center bg-white mb-2 p-sm-5">
            <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3">
                <img src={selectedProduct.imageUrl} alt="" /></h3>
            <h3 className="mb-3">{selectedProduct.name}</h3>
            <p>{selectedProduct.description.substring(0, 93)}...</p>
            <p>${selectedProduct.price}</p>

            <button className="remove text-uppercase font-weight-bold btn-dark" href="" onClick={(e) => { e.preventDefault(); remove(user.userId, selectedProduct.id) }}>Remove</button>
        </div>

    )
}
export default CartProductDetails;