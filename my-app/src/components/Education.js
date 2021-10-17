import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import UW from "../images/WaterlooIcon.png"
import Banting from "../images/Banting1.png"
import "../styles/Education.css"
import "../styles/Projects.css"
import "../styles/Home.css"
import "../styles/Exprience.css"


    function Education() {
        return(
            
            <div className= "div-education" id = "education">
                
                    <div className="projects-header-ed">Education</div>
                    <div className="flex-container-ed">
                        <div className="school" id="waterloo">
                            <div className="text-ed">
                                <h3><b>University of Waterloo</b></h3>
                                <h4>Management Engineering<br />2020 - 2025</h4>
                                <ul>
                                <li>Software Engineering Option</li>
                                <li>Term GPA average: 3.93/4.0</li>
                                <li>Activities: Industry 4.0 Tech Member</li>
                                </ul>
                            </div>
                            <div className="iconEd">
                                <img className="logo" src={UW} />
                            </div>
                        </div>
                        <div className="school" id="glen">
                            <div className="text-ed">
                                <h3><b>Sir Frederick Banting Secondary School</b></h3>
                                <h4>2016 - 2020</h4>
                                <ul>
                                <li>
                                    Activites: Wrestling &amp; Varisty Soccer Player 
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

