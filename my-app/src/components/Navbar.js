import React from "react";
import { Nav, Navbar, NavDropdown, ButtonToolbar } from "react-bootstrap";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Icon from "../images/favicon.ico"
import "../styles/Navbar.css";
import "../styles/Home.css";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="#FFFFFF" variant="light">
      <Navbar.Brand href="/" className = "nav-name">
        <div className = "nav-text">
        <img
          alt=""
          src={Icon}
          width="50"
          height="50"
          className="d-inline-block align-center"
        />{' '}
      Adel Pazoki
      </div>
      </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Navigation;