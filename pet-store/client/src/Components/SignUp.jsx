import React from 'react';

const SignUp = ({ login }) => {
    return (


        <div className="bg-primary py-5 px-4 px-sm-5">
            <form className="py-5">
                <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Last Name" required="required" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Password" required="required" />
                </div>
                <div>
                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Register</button>
                    <div>
                        <a className="link" onClick={(e) => { e.preventDefault(); login('login') }}>Already have an account? Log In</a>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default SignUp;