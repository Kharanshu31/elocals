import React from 'react';
import "./SimilarProducts.css";
import img3 from "../../assets/img3.jpg";

const SimilarProducts = () =>{
  return (
    <div style={{display:"flex"}}>

      <div className="singleblock">
        <img src={img3} className="singleimg" alt="Img3"/>
          <div className="singletxt">
          <p>One plus 7 pro(almond 8gb ram,fluid amoled display,256gb)</p>
          <p>Seller</p>
          <p>Rajdeep Telecom</p>
          </div>
      </div>

      <div className="singleblock">
        <img src={img3} className="singleimg" alt="Img3"/>
          <div className="singletxt">
          <p>One plus 7 pro(almond 8gb ram,fluid amoled display,256gb)</p>
          <p>Seller</p>
          <p>Rajdeep Telecom</p>
          </div>
      </div>

      <div className="singleblock">
        <img src={img3} className="singleimg" alt="Img3"/>
          <div className="singletxt">
          <p>One plus 7 pro(almond 8gb ram,fluid amoled display,256gb)</p>
          <p>Seller</p>
          <p>Rajdeep Telecom</p>
          </div>
      </div>

      <div className="singleblock">
        <img src={img3} className="singleimg" alt="Img3"/>
          <div className="singletxt">
          <p>One plus 7 pro(almond 8gb ram,fluid amoled display,256gb)</p>
          <p>Seller</p>
          <p>Rajdeep Telecom</p>
          </div>
      </div>

    </div>
  )
}

export default SimilarProducts;
