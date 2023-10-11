import React from 'react';
import Navbar from './Navbar';
import LogIn from './Login';

const Header=()=>{
    return(
        <form>
            
        
        <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="src/assets/img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px'}}>
                            <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                            <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                            <h5 className="text-white mb-3 d-none d-sm-block">Your one-stop destination for pet happiness</h5>
                            <a href="/Login" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Order Now</a>
                           
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="src/assets/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px'}}>
                        
                            <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
                            <h5 className="text-white mb-3 d-none d-sm-block"></h5>
                            <a href="/Login" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Order Now</a>
                          
                        </div>
                     
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-primary rounded" style={{width: '45px', height: '45px'}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-primary rounded" style={{width: '45px', height: '45px'}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    <form>
       
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
    
  
    </form>
    </form>
    
    )
}

export default Header ;