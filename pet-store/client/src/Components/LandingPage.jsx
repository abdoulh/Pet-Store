import LandingNavbar from './LandingNavBar.jsx';
import LandingProductList from './LandingProductList.jsx';
import '../App.css'
import Footer from './Footer.jsx';

const LandingPage = (props) => {




  return (

    <div className="container-fluid bg-light pt-50 pl-0 pr-0">
      <LandingNavbar handleSelect={props.handleSelct}  onSearch={props.onSearch}/>
      <div >
        <div className="d-flex flex-column text-center mb-5">
          <h1 className="display-4 m-0 py-5"><span className="text-primary">Premium</span> Pet Products</h1>
        </div>
        <div className="row pb-3">
          {props.items.map((item) => (
            <LandingProductList key={item.id} item={item} addToCart={props.addToCart} currentUser={props.currentUser} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default LandingPage;