import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/index';
import Search from './pages/Search/index';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Home />
            <Search/>
          </Route>
        </Switch>
    </Router>
  );
}