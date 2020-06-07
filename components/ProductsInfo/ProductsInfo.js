import React,{Component} from 'react';
import "./ProductsInfo.css";
import Singleproduct from "./Singleproductinfo/Singleproductinfo";
import ProductDescription from "./ProductDescription/ProductDescription";
import productdata from "../../data/details.json";

class ProductsInfo extends Component{

  // console.log(productdata.productDetail.productSpecification);
  // let transform=productdata.productDetail.productSpecification[0];
  //
  //  transform=Object.keys(productdata.productDetail.productspecification).map(el=>{
  //             return <Singleproduct specific={el} specificdetail={productdata.productDetail.productSpecification[el]}/>
  //         })

  state={
    specification:true
  }

  showSpecification=()=>{
    this.setState({specification:true});
  }

  showDescription=()=>{
    this.setState({specification:false});
  }

  render(){

    let content=[];

    content.push( <Singleproduct specific="OS" specificdetail="Android 8.1"/>)
    content.push( <Singleproduct specific="RAM" specificdetail="8GB"/>)
    content.push( <Singleproduct specific="Item Weight" specificdetail="163 g"/>)
    content.push( <Singleproduct specific="Product Dimensions" specificdetail="16.5 x 0.8 x 7.7 cm"/>)
    content.push( <Singleproduct specific="Batteries" specificdetail="1 Lithium Polymer Battery Required"/>)
    content.push( <Singleproduct specific="Wireless Communication" specificdetail="Bluetooth,Wi-fi Hotspot"/>)


    if(!this.state.specification)
    {
      content =  <ProductDescription />
    }

  return (
    <div>

        <div className="infomain">
          <div style={{display:"flex"}}>
            <h5 className="infoheading" onClick={this.showSpecification}>Specifications</h5>
            <h5 className="infoheading" onClick={this.showDescription}>Descriptions</h5>
          </div>
        </div>

        <div className="specifications">
          {content}
        </div>

      </div>
    )
  }
}

export default ProductsInfo;
