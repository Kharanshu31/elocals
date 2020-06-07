import React,{Component} from 'react';
import "./Products.css";
import {Navlink,withRouter} from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../UI/Modal/Modal";
import Productdetail from "../../components/Productdetail/Productdetail";
import ProductsInfo from "../../components/ProductsInfo/ProductsInfo";
import Reviews from "../../components/Reviews/Reviews";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Footer from "../../components/Footer/Footer";
import whatsapp from "../../assets/whatsapp.jpg";

class Products extends Component {

  state={
    showModal:false
  }


  modalHandler=()=>{
    // this.modalstyle.display="block";
    this.setState({showModal:true})
  }

  modalClosed=()=>{
    this.setState({showModal:false})
  }


  render(){
    return (
      <div>

        <Navbar modal={this.modalHandler} onClick={this.modalClosed}/>

        <Modal show={this.state.showModal}/>

        <div style={{display:"flex"}}>
          <p className="tags">Home > </p>
          <p className="tags">Mobiles > </p>
          <p style={{marginLeft:"70%",marginTop:"30px",position: 'relative'}}>Add to compare</p>
        </div>

        <Productdetail />
        <ProductsInfo />
        <Reviews />

        <h5 className="similar">Similar Products</h5>

        <SimilarProducts />

        <div className="missing">
          <h2 className="missingheading">Couldn't find what you are looking for</h2>
          <button className="missingbtn">Request product</button>
        </div>

        <div>
          <h3 style={{textAlign:"center",marginTop:"100px"}}>Any Questions in mind ? </h3>
          <p style={{textAlign:"center",lineHeight:"1rem"}}>Click Here for quick support</p>
          <img src={whatsapp} style={{width:"5%",marginLeft:"47.5%",marginTop:"20px"}} alt="Whatsapp" />
        </div>

        <Footer />

      </div>
    )
  }
}

export default withRouter(Products);
