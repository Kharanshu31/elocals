import React,{Component} from 'react';
import "./Main.css";
import {Navlink,withRouter} from 'react-router-dom';
import elocal from "../../assets/elocal.png";

class Main extends Component {

  onClickProduct=()=>{
    this.props.history.push("./product")
  }

  onClickSeller=()=>{
    this.props.history.push("./seller");
  }


  render(){
    return (
      <div>

        <div>

          <img src={elocal} className="logo"/>

          <button className="productbtn" onClick={this.onClickProduct}><span style={{fontWeight: 'bold'}}>Product Detail</span></button>

          <button className="sellerbtn" onClick={this.onClickSeller}><span style={{fontWeight: 'bold'}}>Seller</span></button>

        </div>

      </div>
    )
  }
}

export default withRouter(Main);
