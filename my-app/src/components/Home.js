import React from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import Adel from "../images/adelPazokicoloured.jpg";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/Instagram.png";
import Github from "../images/github.png";
import Typewriter from "typewriter-effect";
import About from "./About";

import "../styles/Home.css";
function Home() {
  return (
    <div>
      <About />
    </div>
  );
}

export default Home;