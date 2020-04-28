import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/index';
import Search from './pages/SearchPage/index';
import SignUp from './pages/Signup/index'
import SignIn from "./pages/Signin/index";
import AddProduct from "./pages/AddProduct"
import MyProducts from "./pages/MyProducts"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/addProduct" component={AddProduct}/>
          <Route exact path="/myProducts" component={MyProducts}/>
        </Switch>
    </Router>
  );
}