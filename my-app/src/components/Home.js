import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import About from "./About";
import MyProjects from "./MyProjects"

import "../styles/Home.css";
function Home() {
  return (
    <div>
      <About />
      <MyProjects />
    </div>
  );
}

export default Home;