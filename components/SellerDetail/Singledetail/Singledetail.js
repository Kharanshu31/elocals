import React from 'react';
import "./Singledetail.css";
import telecom from "../../../assets/telecom.jpg";

const Singledetail = (props) =>{
  return (
    <div className="seller">
      <img src={telecom} className="telecomimg" alt="Telecom"/>

      <div className="sellerinfo">
        <p>{props.name}</p>
        <p>{props.city}</p>
        <p style={{color:"orange"}}>0.1 km</p>
      </div>

      <div style={{display:"flex",marginLeft:"60%"}}>
      <h3>7,499</h3>
      <p className="cut">10,000</p>
      <p className="discount">30% off</p>
      </div>

    </div>
  )
}

export default Singledetail;
