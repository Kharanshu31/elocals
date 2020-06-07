import React from 'react';
import "./SellerDetail.css";
import Singledetail from "./Singledetail/Singledetail";
import sellerdetail from "../../data/seller.json";

const SellerDetail=()=>{

  // sellerdetail.otherSellerList.map(el=>console.log(el.sellerdetail));

  return (
    <div>
      {sellerdetail.otherSellerList.map(el=>{
        return <Singledetail key={el.sellerDetails.id} name={el.sellerDetails.name} city={el.sellerDetails.city}/>
      })}
    </div>
  )
}

export default SellerDetail;
