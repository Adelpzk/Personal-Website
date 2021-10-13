import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Projects.css";
import UW from "../images/UWCQ.png";
import WCO from "../images/weeklycourseorganizer.png";

function Projects() {
  return (
    <div className="div-projects">
      <div className="projects-header">Relevant Projects</div>
      <Row style={{ justifyContent: "center" }}>
        <div className="grid">
          <div className="quicktab">
            <a href="/quicktab">
              <Image src={UW} className="img-quicktab"></Image>
            </a>
            <div class="overlay-quicktab">
              <div class="text">
                Software Developer @ Quicktab - Development of landing page
                redesign, restaurant web platform and QR code internal tool.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="splitpeas">
            <a href="/splitpeas">
              <img src={WCO} className="img-splitpeas"  width="100"
                height="100" /> 
            </a>
            <div class="overlay-splitpeas">
              <div class="text">
                SplitPeas - A mobile application designed to help university
                students save money, time and reduce food waste through group
                grocery shopping.
              </div>
            </div>
          </div>
        </div>
      </Row>

    </div>
  );
}

export default Projects;