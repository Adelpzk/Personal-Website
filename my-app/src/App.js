import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar";

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
            <Row className="copyright">
              Copyright © 2021 Adel Pazoki
            </Row>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

