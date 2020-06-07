import React from 'react';
import "./Singleproductinfo.css";

const Singleproduct=(props)=>{
  return (
    <div style={{display:"flex"}}>
    <p className="productspecification">{props.specific}</p>
    <div className="productspecificationdetail">
    <p className="productexplain">{props.specificdetail}</p>
    </div>
    </div>
  )
}

export default Singleproduct;
