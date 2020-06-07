import React from "react";
import "./Modal.css"

const Modal = (props) =>{
  return (
    <div
    className="modalcomponent"
    style={{
      display: props.show ? "block" : "none"
    }}>
      <p>Your Orders</p>
      <p>Your Orders</p>
      <p>Your Orders</p>
    </div>
  )
}

export default Modal;
