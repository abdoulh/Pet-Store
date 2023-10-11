import React from "react";



const Login = ({ signup }) => {




    return (

        <div className="bg-primary py-5 px-4 px-sm-5">
            <form className="py-5">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Password"
                        required="required"
                    />
                </div>
                <div>
                    <button
                        className="btn btn-dark btn-block border-0 py-3"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
                <div>
                    <a className="link" onClick={(e) => { e.preventDefault(); signup('singnUp') }}>You don't have an account? Sign UP</a>
                </div>
            </form>
        </div>
    )
}

export default Login