import React from "react";
import { Slide } from 'react-slideshow-image';
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import 'react-slideshow-image/dist/styles.css'
import "../styles/Interests.css"
import "../styles/Projects.css";
import "../styles/Home.css";
import "../styles/Exprience.css"
import Soccer from "../images/Soccer.gif"
import Climbing from "../images/Climbing.jpg"


  const Slideshow = () => {
      return (
        <div className= "div-Interests" id = "interests">
        <div className="projects-header2">Interests</div>
          <Slide easing="ease" className = "slide-show">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${Soccer})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${Climbing})`}}>
                
              </div>
            </div>
          </Slide>
        </div>
      )
  };
  
  export default Slideshow;