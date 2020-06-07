import React from 'react';
// import Main from "./containers/Main/main";
// import Model from "./containers/Model/Model";
import Products from "./containers/Products/Products";
import Main from "./containers/Main/Main";
import {Route, Switch,withRouter} from 'react-router-dom';
import Seller from "./containers/Seller/Seller";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/product" component={Products}/>
        <Route path="/seller" component={Seller}/>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
