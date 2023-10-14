import React from "react";
const Footer = () => {
  return (
    <a id="contact">
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 mb-5">
            <h1 className="mb-3 display-5 text-capitalize text-white">
              <span className="text-primary">Happy</span>Pet
            </h1>
            <p className="m-0">
            Happy Pet is your one-stop pet store for all your furry friend's needs. From premium food and cozy beds to playful toys and stylish accessories, we've got everything to keep your pets happy and healthy.
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Get In Touch</h5>
                <p>
                  <i className="fa fa-map-marker mr-2" />
                  Tunisia Mall, Lac 2
                </p>
                <p>
                  <i className="fa fa-phone mr-2" />
                  +21650489375
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  Happy@gmail.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: 36, height: 36 }}
                    href="#"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: 36, height: 36 }}
                    href="#"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: 36, height: 36 }}
                    href="#"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: 36, height: 36 }}
                    href="#"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Popular Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Our Services
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Our Team
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-primary mb-4">Newsletter</h5>
                <form action>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-lg btn-primary btn-block border-0"
                      type="submit"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              ©{" "}
              <a className="text-white font-weight-bold" href="#">
            HappyPet
              </a>
              . All Rights Reserved.
             
          
             
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </a>
  );
};
export default Footer;
