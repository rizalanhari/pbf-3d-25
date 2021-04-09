import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Contact from './pages/contact'
import Company from './pages/company'
import Service from './pages/service'
import Header from './parts/Header/header'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div class="container-fluid">
          <Header />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
