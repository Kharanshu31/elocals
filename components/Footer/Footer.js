import React from 'react';
import "./Footer.css";
import elocal from "../../assets/elocal.png";

const Footer = () =>{
  return (
    <div>

      <div style={{display:"flex"}}>

        <div style={{marginLeft:"180px"}}>
          <img src={elocal} className="logoimg" alt="Elocal"/>
          <h4>Cities we are in</h4>
          <p>Pune</p>
        </div>

        <div className="Follow">
          <h5>Follow Us</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>

        <div className="Contact">
          <h5>Contact us</h5>
          <p>Location: Pune</p>
          <p>Contact : 1111111111</p>
          <p>Email : digitalservices@elocal.com</p>
        </div>

      </div>


      <div style={{display:"flex"}}>

        <div className="Useful">
          <h5>Useful Links</h5>
          <p>About us</p>
          <p>About us</p>
          <p>About us</p>
        </div>

        <div className="Useful">
          <h5>Useful Links</h5>
          <p>About us</p>
          <p>About us</p>
          <p>About us</p>
        </div>

        <div className="Useful">
          <h5>Useful Links</h5>
          <p>About us</p>
          <p>About us</p>
          <p>About us</p>
        </div>

      </div>


    </div>
  )
}

export default Footer;
