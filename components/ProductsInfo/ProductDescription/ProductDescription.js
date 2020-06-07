import React from 'react';
import "./ProductDescription.css";
import productdata from "../../../data/details.json";

const ProductDescription = () =>{
  return (
    <div>
      <p>{productdata.productDetail.productName}</p>
      <p>{productdata.productDetail.productDescription}</p>
    </div>
  )
}

export default ProductDescription;
