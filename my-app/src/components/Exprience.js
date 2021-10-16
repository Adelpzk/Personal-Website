import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import TR from "../images/TR-logo.png";
import Manulife from "../images/manulife.png"
import Tutor from "../images/Tutor.jpg"
// import "../styles/Projects.css";
import "../styles/Home.css";
import "../styles/Exprience.css"

function Exprience(){
    return (
        <div className= "div-exprience" id = "exprience">
            <div className="projects-header2">Experience</div>
            < div className ="container">
            <div className="flex-container">
            <div className="grid">
        <div className="exp" id="thomson">
          <img src= {TR} className = "img" />
          <div className="text">
            <h3><b>Software Solution Architect</b></h3>
            <h4>
              Thomson Reuters <br /><span 
                >July 2021 - August 2021</span
              >
            </h4>
            <p>
              <ul>
                
                <li>Worked in a team of 5 to build a proof-of-concept <strong>NextJS</strong> web-app with a
                <strong> Federated GraphQL</strong> system to display Salesforce
                product data and Wordpress blogs.</li>
                <li>Unified the process of accessing data from 10+ data systems and back-end services including
                <b> Salesforce, MongoDB, Boomi and Apigee by building a GraphQL server.</b></li>
                
              </ul>
            </p>
          </div>
        </div>
        </div>
        <div className="exp" id="manulife">
          <img src= {Manulife} className = "img" />
          <div className="text">
            <h3><b>Modern Web Application Design Student</b></h3>
            <h4>
              Manulife <br /><span 
                >May 2021 - June 2021</span
              >
            </h4>
            <p>
              <ul>
                <li>Gained experience through creating a Doctor/Patient database
                frontend and backend using
                <strong> JavaScript, NodeJS, REST, GraphQL, React, and Redux.</strong></li>
                <li>Learned and implemented software development principles such as <b> Test-Driven
                    Development and application debugging </b></li>
              </ul>
            </p>
          </div>
        </div>
        <div className="exp" id="gama">
          <img src={Tutor} className = "img"/>
          <div className="text">
            <h3><b>Peer Tutor</b></h3>
            <h4>
              Self Employed <br /><span
                >October 2018 - May 2021</span
              >
            </h4>
            <p>
            <ul>
              <li>Worked with High School and University students in classrooms or home environments to provide
              educational support.</li> 
              <li>Collaborated with students to complete homework assignments, identify weaknesses.</li>  
            </ul>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

    );
}

export default Exprience;