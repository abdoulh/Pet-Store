import React from 'react';


const ProductList = ({ item, addToCart, currentUserID }) => {




    return (

        <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3">
                    <img src={item.imageUrl} alt="" className='productImage' /></h3>
                <h3 className="mb-3">{item.name}</h3>
                <p>{item.description.substring(0, 93)}...</p>
                <p>${item.price}</p>

                <a className="text-uppercase font-weight-bold" href="" onClick={(e) => { e.preventDefault(); addToCart(currentUserID, item.id) }}>Add to cart</a>
            </div>
        </div>




    )

}
export default ProductList;