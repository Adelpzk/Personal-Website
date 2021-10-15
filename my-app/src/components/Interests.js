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
import Biking from "../images/Biking.gif"
import Soccer2 from "../images/Soccer2.jpg"
import Climbing from "../images/Climbing.jpg"
import Climbing2 from "../images/Climbing2.jpg"
import Montreal from "../images/Montreal.jpg"

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
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${Biking})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${Soccer2})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${Montreal})`}}>
                
              </div>
            </div>
            <div className="each-slide-climbing2">
              <div style={{'backgroundImage': `url(${Climbing2})`}}>
                
              </div>
            </div>
          </Slide>
        </div>
      )
  };
  
  export default Slideshow;