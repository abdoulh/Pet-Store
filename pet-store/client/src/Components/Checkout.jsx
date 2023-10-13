import React from "react";




const Checkout = () => {




    return (

        <div className="checkoutForm">
            <form className="py-5">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4 my-2"
                        placeholder="Your phone number"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your address"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your zip code"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your city"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <select className="form-control">
                        <option value="Cash">Cash</option>
                        <option value="Credit/Debit Card">Credit/Debit Card</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn-dark btn-block border-0 py-3"
                    >
                        Confirm order
                    </button>
                </div>
            </form>
        </div>

    )

}

export default Checkout