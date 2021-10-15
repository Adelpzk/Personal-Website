import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Projects.css";
import UW from "../images/UWCQ.png";
import WCO from "../images/weeklycourseorganizer.png"
import tr from "../images/TR1.JPG"
import DT from "../images/DecisionSupport.png"

function Projects() {
  return (
    <div className="div-projects" id = "myprojects">
      <div className="projects-header">Relevant Projects</div>
      <Row style={{ justifyContent: "center" }}>
      <div className="grid">
          <div className="quicktab">
            <a href="https://github.com/Adelpzk/thomson-reuters-project">
              <Image src={tr} className="img-quicktab"></Image>
            </a>
            <div className="overlay-quicktab">
              <div className="text">
                <i><b>Software Solution Architect</b> @ <b>Thomson Reuters</b></i> - Developed and presented and an end to end 
                proof of concept <b>Federated GraphQL website experience</b> which <b>reduced redundant database usage 
                in downstream applications by 100%</b>. Migrated from a reverse proxy server to a <b>Next.js web-app </b> 
                to query blog data from WordPress and product data from GraphQL.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="quicktab">
            <a href="https://uw-course-query.herokuapp.com/">
              <Image src={UW} className="img-quicktab"></Image>
            </a>
            <div class="overlay-quicktab">
              <div class="text">
                <i><b>UW Course Query</b></i> - Designed and developed a <b>ReactJS web-application </b> 
                that Utilizes <b>University of Waterloo's OpenAPI</b> to display user entered course description. 
                Click to access the website. {" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="quicktab">
            <a href="https://drive.google.com/file/d/1hhg3zT1a2WSeVEXEXL9TIV4VSVJv9R1K/view?usp=sharing">
              <img src={DT} className="img-quicktab"  width="100"
                height="100" /> 
            </a>
            <div class="overlay-quicktab">
              <div class="text">
                <i><b>Decision Support Tool</b></i> - Designed and programmed an organization support tool Using <b> VBA</b> that assisted our client
                on a fourth year design project. Currently used by the clients to assign tasks under a minute. Also gained familiarity with many workplace 
                documents following professional guidelines such as a <b>project plan</b>, <b> user manual</b>, <b> test specifications</b>, and <b> status reports</b>.  
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="quicktab">
            <a href="https://github.com/Adelpzk/WCO">
              <img src={WCO} className="img-quicktab"  width="100"
                height="100" /> 
            </a>
            <div class="overlay-quicktab">
              <div class="text">
                <i><b>Weekly Course Organizer</b></i> - An excel tool programmed with <b>VBA </b> to keep an organizational format of grades, upcoming
                assignments, and weekly reflections.
              </div>
            </div>
          </div>
        </div>
      </Row>
      {' '}<br/>
      {' '}<br/>
    </div>
  );
}

export default Projects;