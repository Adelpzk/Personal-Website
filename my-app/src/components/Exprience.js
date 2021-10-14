import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import TR from "../images/TR-logo.png";
import Manulife from "../images/manulife.png"
import Tutor from "../images/Tutor.jpg"
import "../styles/Projects.css";
import "../styles/Home.css";
import "../styles/Exprience.css"

function Exprience(){
    return (
        <div className= "div-intro">
            <div className="projects-header2">Exprience</div>
            <div className="flex-container">
        <div className="exp" id="thomson">
          <img src= {TR} className = "img" />
          <div className="text">
            <h3><b>Software Solution Architect</b></h3>
            <h4>
              Thomson Reuters <br /><span 
                >July 2021 - Present</span
              >
            </h4>
            <p>
              Building a proof-of-concept <strong>NextJS</strong> web-app with a
              <strong> Federated GraphQL</strong> system to display Salesforce
              product data and Wordpress blogs.
            </p>
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
              Gaining experience through creating a Doctor/Patient database
              frontend and backend using
              <strong> JavaScript, NodeJS, REST, GraphQL, React, and Redux.</strong>
            </p>
          </div>
        </div>
        <div className="exp" id="gama">
          <img src={Tutor} className = "img"/>
          <div className="text">
            <h3><b>Peer Tutor</b></h3>
            <h4>
              Self Employed <br /><span
                >Oct. 2018 - May 2021</span
              >
            </h4>
            <p>
            Worked with High School and University students in classrooms or home environments to provide
            educational support.    
            </p>
          </div>
        </div>
      </div>
      <p>
          {' '}<br/>
          {' '}<br/>
          {' '}<br/>
      </p>
    </div>

    );
}

export default Exprience;