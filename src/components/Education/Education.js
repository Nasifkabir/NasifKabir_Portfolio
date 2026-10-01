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
          My Academic <strong className="purple">Background</strong>
        </h1>
        <p className="section-subtext">
          Formal academic training in computer science, software engineering, and core technical foundations.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={4} className="education-card">
            <EducationCard
              institution="Varendra University"
              degree="B.Sc. in Computer Science & Engineering"
              year="2019 – 2024"
              description="Completed undergraduate degree with focus on Data Structures, Algorithms, Software Engineering, Database Systems, Web Development, and Computer Networks."
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              institution="Rajshahi Collegiate School & College"
              degree="Higher Secondary Certificate (HSC)"
              year="2017 – 2019"
              description="Specialized in Science group with rigorous coursework in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology."
            />
          </Col>

          <Col md={4} className="education-card">
            <EducationCard
              institution="Rajshahi Collegiate School"
              degree="Secondary School Certificate (SSC)"
              year="2009 – 2017"
              description="Secondary education foundation in Science, developing analytical mindset, foundational computing, and mathematical problem-solving."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
