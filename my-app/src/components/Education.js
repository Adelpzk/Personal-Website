import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import UW from "../images/WaterlooIcon.png"
import Banting from "../images/Banting1.png"
import "../styles/Education.css"
import "../styles/Projects.css";



    function Education() {
        return(
            
            <div className= "div-education" id = "exprience">
                
                    <div className="projects-header-ed">Education</div>
                    <div className="flex-container-ed">
                        <div className="school" id="waterloo">
                            <div className="text-ed">
                                <h3>University of Waterloo</h3>
                                <h4>Bachelor of Computer Science<br />2020 - Present</h4>
                                <ul>
                                <li>Software Engineering Specialization</li>
                                <li>Term GPA average: 3.3/4.0</li>
                                </ul>
                            </div>
                            <div className="iconEd">
                                <img className="logo" src={UW} />
                            </div>
                        </div>
                        <div className="school" id="glen">
                            <div className="text-ed">
                                <h3>Glenforest Secondary School</h3>
                                <h4>International Baccalaureate Diploma<br />2016 - 2020</h4>
                                <ul>
                                <li>
                                    Clubs: Math Club, FRC Robotics, GAMA, Wind Ensemble, Jazz Band
                                </li>
                                </ul>
                            </div>
                            <div className="iconEd">
                                <img className="logo" src={Banting} />
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }

export default Education;

