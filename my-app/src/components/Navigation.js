import React, {Component,useState} from "react";
import HamburgerMenu from "react-hamburger-button"
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar, NavDropdown, ButtonToolbar } from "react-bootstrap";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Icon from "../images/favicon.ico"
import "../styles/Navbar.css";
import "../styles/Home.css";
import "../styles/Exprience.css";
import "../styles/Projects.css";
import "../App.css";


class Navigation extends Component {
  
state = {};

render() {
  return (
    <div className = "Navbarfixed">
      <Navbar collapseOnSelect expand="lg" >
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
        <Nav className="ml-auto">
        
        <ul className = "nav-items"> 
          <Link
            className = "nav-texts"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          > 
            About Me
          </Link>
          <Link
            className = "nav-texts"
            activeClass="active"
            to="myprojects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          > 
            Projects
          </Link>
          <Link
            className = "nav-texts"
            activeClass="active"
            to="exprience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          > 
          Exprience
          </Link>
          <Link
            className = "nav-texts"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          > 
          Education
          </Link>
          <Link
            className = "nav-texts"
            activeClass="active"
            to="interests"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          > 
          Interests
          </Link>
        </ul>
        </Nav>
      </Navbar>
    </div>
  );
}
}

export default Navigation;