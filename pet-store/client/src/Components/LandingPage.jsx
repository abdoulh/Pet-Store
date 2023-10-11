import React, { useState } from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const Header = () => {

  const [logView, setLogView] = useState('login')



  return (
    <form>


      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="src/assets/img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                  <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                  <h5 className="text-white mb-3 d-none d-sm-block">Your one-stop destination for pet happiness</h5>
                  <a href="/Login" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Order Now</a>

                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="src/assets/img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '100%' }}>

                  <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
                  <h5 className="text-white mb-3 d-none d-sm-block"></h5>
                  <a href="/Login" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Order Now</a>

                </div>

              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-primary rounded" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-primary rounded" style={{ width: '45px', height: '45px' }}>
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
                {logView === "login" && <Login signup={setLogView} />}
                {logView === "singnUp" && <SignUp login={setLogView} />}
              </div>
            </div>
          </div>
        </div>


      </form>
    </form>

  )
}

export default Header;