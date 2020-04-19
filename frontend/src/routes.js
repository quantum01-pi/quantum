import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/index';
import Search from './pages/SearchPage/index';
import SignUp from './pages/Signup/index'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/auth" component={SignUp}/>
          <Route exact path="/search" component={Search}/>
        </Switch>
    </Router>
  );
}