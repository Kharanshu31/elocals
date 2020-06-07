import React from 'react';
import "./Reviews.css";
import star from "../../assets/star.jpg";

const Review = () =>{
  return (
      <div className="reviewpage">


      <h5>24 Reviews</h5>
      <div>⭐⭐⭐⭐</div>

      <div style={{display:"flex",marginTop:"50px"}}>

        <div className="circlename"><p className="circleuserletter">R</p></div>

          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="rating">
            <p style={{marginLeft:"10px",color:"white"}}>4</p>
          </div>

        </div>

      </div>

      <div style={{display:"flex",marginTop:"30px"}}>

        <div className="circlename"><p className="circleuserletter">S</p></div>

        <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="rating"><p style={{marginLeft:"10px",color:"white"}}>4</p></div>
        </div>

      </div>

      </div>
  )
}

export default Review;
