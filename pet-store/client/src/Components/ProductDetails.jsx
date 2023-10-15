import React from 'react';
const ProductDetails = ({ selectedProduct, addToCart, currentUser }) => {

    return (

        <div className="d-flex flex-column text-center bg-white mb-2 p-sm-5">
            <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3">
                <img src={selectedProduct.imageUrl} alt="" /></h3>
            <h3 className="mb-3">{selectedProduct.name}</h3>

            <p>{selectedProduct.description}</p>

            <p>${selectedProduct.price}</p>

            <a className="text-uppercase font-weight-bold" onClick={(e) => { e.preventDefault(); addToCart(currentUser.userId, selectedProduct.id) }}>Add to cart</a>
        </div>

    )
}
export default ProductDetails;