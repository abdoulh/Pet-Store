import React from 'react'
import Navbar from './Navbar.jsx';
import ProductList from './ProductList.jsx'

const HomePage = () => {
    return (
        <div className="container-fluid bg-light pt-50 pl-0 pr-0">
            <Navbar />
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Our Services</h4>
                    <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Pet Services</h1>
                </div>
                <div className="row pb-3">

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                            <h3 className="mb-3">Pet Boarding</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="">Read More</a>
                        </div>
                    </div>    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                            <h3 className="mb-3">Pet Boarding</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="">Read More</a>
                        </div>
                    </div>    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                            <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                            <h3 className="mb-3">Pet Boarding</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="">Read More</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomePage;