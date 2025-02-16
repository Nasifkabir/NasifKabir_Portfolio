import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few experiences that have shaped my career.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              company="Innovate Solution"
              position="Technical Support Engineer"
              year="2024-Present"
              description="Currently working as a Technical Support Engineer at Innovate Solutions, handling technical issues and providing solutions for clients in the travel tech industry."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
