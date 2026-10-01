import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import innovateLogo from "../../Assets/innovate_solution_logo.png";

function Experience() {
  const innovateSkills = [
    "REST APIs",
    "Travel Technology / GDS",
    "Postman",
    "API Consultancy",
    "Technical Support",
    "Incident Escalation",
    "Live Monitoring",
    "JavaScript / JSON",
    "Client Communication"
  ];

  const innovateBullets = [
    "Provide mission-critical technical support, API consultancy, and operational escalation for live B2B travel platforms serving 6,200+ businesses worldwide.",
    "Investigate, troubleshoot, and diagnose booking engine issues, API payloads, XML/JSON request-response lifecycles, and supplier/GDS connectivity anomalies.",
    "Collaborate across software engineering, QA, and account management teams to resolve high-priority client incidents with quick turnaround times and rigorous SLA compliance.",
    "Guide international OTA partners and client tech teams through API documentation, credential provisioning, and custom integration workflows.",
    "Perform system health checks, log analysis, and root-cause analyses (RCA) to continuously improve product stability and support documentation."
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <p className="section-subtext">
          My journey in the tech industry, managing live systems, resolving technical challenges, and empowering global clients.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col lg={10} className="experience-card">
            <ExperienceCard
              company="Innovate Solution"
              companyLogo={innovateLogo}
              companyUrl="https://www.innovatesolution.com"
              position="Technical Support Engineer"
              department="Service Delivery & Operations"
              location="Dhaka, Bangladesh (HQ: Singapore)"
              year="2024 – Present • Full-time"
              description="Innovate Solution is a wholesale travel technology powerhouse building enterprise platforms (including InnoTravelTech, ReservationHub, and TripGic) for consolidators, OTAs, and tour operators across 40+ countries."
              bullets={innovateBullets}
              skills={innovateSkills}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
