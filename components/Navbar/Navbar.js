import React,{Component} from 'react';
import "./Navbar.css";
import Modal from "../../UI/Modal/Modal";
import logo from "../../assets/elocal.png";
import person from "../../assets/person.jpg";

class Navbar extends Component{


  render(){

  return (
    <div className="Navbarbody">
      <img src={logo} className="Navbarlogo" alt="Mainlogo"/>

      <div className="Navbartags">
      <a href="#" className="Navbaranchor">Bangalore</a>
      </div>

      <img src={person} className="personimg" onClick={this.props.modal} alt="Personimage"/>

    </div>
    )
  }
}

export default Navbar;
