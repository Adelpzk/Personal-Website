import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import About from "./About";
import MyProjects from "./MyProjects"
import Exprience from "./Exprience";
import Education from "./Education"
import Interests from "./Interests"

import "../styles/Home.css";
function Home() {
  return (
    <div>
      <About />
      <MyProjects />
      <Exprience />
      <Education />
      <Interests />
    </div>
  );
}

export default Home;