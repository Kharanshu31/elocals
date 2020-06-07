import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import "./Productdetail.css";
import oneplus7 from "../../assets/1+7.jpg";
import oneplus72 from "../../assets/1+7(2).jpg";

// import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import productdata from "../../data/details.json";

const Productdetail = () =>{

  // console.log(productdata.productDetail.productKeyFeatures);

  return (

    <div>

    <div style={{display:"flex",marginTop: "-10px"}}>

    <div>
      <div className="imgblock">
        <img src={img4} className="otherimg" alt="Img4" />
      </div>

      <div className="imgblock">
      <img src={img2} className="otherimg" alt="Img2" />
      </div>

      <div className="imgblock">
      <img src={img3} className="otherimg" alt="Img3" />
      </div>

      <div className="imgblock">
      <img src={img4} className="otherimg" alt="Img4" />
      </div>
    </div>

    <img src={oneplus72} className="productimg" alt="1+7"/>

    <div className="productinfo">
      <h2 className="productheading">One plus 7 pro(Almond, 8GB RAM, 128GB)</h2>
      <ul>

      {productdata.productDetail.productKeyFeatures.map(el=>(<li className="bulletpts">{el}</li>))}

      </ul>

      <div style={{display:"flex"}}>
      <h3 style={{fontSize: "1.8rem",fontWeight: 'bold'}}>7,499</h3>
      <p className="cut">10,000</p>
      <p className="discount">30% off</p>
      </div>
      <p style={{color:"blue"}}>Inclusive of all taxes</p>

      <div style={{display:"flex"}}>
        <button className="paymentbtn">Delivery in 24 hours</button>
        <button className="paymentbtn">EMI options availabe</button>
        <button className="paymentbtn">Pay Later</button>
      </div>

      <div style={{display:"flex"}}>
        <button className="orederbtn">Buy now</button>
        <button className="orederbtn cart">Add to cart</button>
        <button className="orederbtn storebtn">Pick up from store</button>
      </div>

      <p className="calender">Calender history</p>

    </div>

    </div>

    <div style={{display: "flex"}}>

      <div className="productseller">
        <p className="sellerinfo">Seller</p>
        <p className="sellerinfo">Rajdeep Telecom</p>
      </div>

      <nav className="sellerlink">
        <NavLink to="/seller">View More Sellers(7)</NavLink>
      </nav>

    </div>

    </div>
  )
}

export default Productdetail;
