import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import SellerDetail from "../../components/SellerDetail/SellerDetail"
import Navbar from "../../components/Navbar/Navbar";
import "./Seller.css";

class Seller extends Component {
  render(){
    return (
      <div>

        <Navbar />

        <nav className="active">
          <NavLink to="/product"> -Return to product </NavLink>
        </nav>

        <div className="sellerheadingblock">
          <p className="sellerheading">Seller info</p>
          <p>Price & offers</p>
        </div>

        <SellerDetail />
        <SellerDetail />
        <SellerDetail />
        
      </div>
    )
  }
}

export default withRouter(Seller);
