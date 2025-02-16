import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import Particle from "../Particle";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few educational experiences that helped shape my career.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="education-card">
            <EducationCard
              institution="Varendra University"
              degree="Bachelor of Science in Computer Science & Engineering"
              year="2017-2021"
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              institution="Rajshahi Collegiate School & College"
              degree="Higher Secondary Certificate (HSC)"
              year="2017-2019"
            />
          </Col>
          <Col md={4} className="education-card">
            <EducationCard
              institution="Rajshahi Collegiate School"
              degree="Secondary School Certificate (SSC)"
              year="2009-2017"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
