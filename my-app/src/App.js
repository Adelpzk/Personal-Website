import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import "./styles/Home.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error} />
          </Switch>
            <div className="copyright">
              {' '}<br/>
              Coded by Adel Pazoki using ReactJS 
              // 
              Copyright © 2021 Adel Pazoki
              {' '}<br/>
              {' '}<br/>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

