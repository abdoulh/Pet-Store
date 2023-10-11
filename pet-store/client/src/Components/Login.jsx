import React from "react";

const LogIn = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
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
                  <a href="/SignUp" className="link">You don't have an account? Sign UP</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
