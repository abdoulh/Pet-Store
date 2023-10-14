import React, { useState } from 'react';
import LandingProductDetails from './LandingProductDetails.jsx';
import { useNavigate } from "react-router-dom";



const LandingProductList = ({ item }) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const navigate = useNavigate()



    return (

        <div className="productContainer col-md-6 col-lg-4 mb-4">
            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3">
                    <img src={item.imageUrl} alt="" className='productImage' onClick={toggleModal} /></h3>
                <h3 className="title mb-3" onClick={toggleModal}>{item.name}</h3>
                <p>{item.description.substring(0, 93)}...</p>
                <p className='price'>${item.price}</p>

                <a className="text-uppercase font-weight-bold" href="" onClick={(e) => { e.preventDefault(); navigate('/Login') }}>Add to cart</a>
            </div>
            {
                modal && (
                    <div className="modal-custom">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content-custom">
                            <LandingProductDetails selectedProduct={item} />
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
export default LandingProductList;