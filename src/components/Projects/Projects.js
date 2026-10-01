import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import streexpoo from "../../Assets/Projects/streexpoo.jpg";
import musafirx from "../../Assets/Projects/musafirx.jpg";
import eticket from "../../Assets/Projects/eticket.png";
import journey from "../../Assets/Projects/journey.png";
import alpha from "../../Assets/Projects/alpha.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured & Recent <strong className="purple">Projects</strong>
        </h1>
        <p className="section-subtext">
          A showcase of real-world web applications, travel tech solutions, financial tools, and interactive utilities I have engineered.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streexpoo}
              isBlog={false}
              title="Streexpoo Margix"
              description="A customized profit tracking and financial margin analytics web application designed for shops and retail merchants. Features real-time revenue computation, expense breakdown, net profit margin analysis, and sales trend monitoring."
              tags={["TypeScript", "React", "Tailwind CSS", "Vercel"]}
              ghLink="https://github.com/Nasifkabir/streexpoo_margix"
              demoLink="https://streexpoo-margix.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musafirx}
              isBlog={false}
              title="MusafirX Travel Platform"
              description="A modern travel exploration and flight reservation interface inspired by enterprise travel tech systems. Incorporates intuitive search parameters, route filtering, and dynamic responsive cards built for international travelers."
              tags={["TypeScript", "React", "Next.js", "Tailwind CSS"]}
              ghLink="https://github.com/Nasifkabir/MusafirX"
              demoLink="https://musafir-x.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eticket}
              isBlog={false}
              title="Easy Ticket (Bus Reservation)"
              description="The Easy Paribahan Bus Ticket Booking portal streamlines bus passenger bookings. Provides a user-friendly interface to search active bus routes, check real-time seat availability, and book digital tickets online."
              tags={["JavaScript", "HTML5", "CSS3", "DOM API"]}
              ghLink="https://github.com/Nasifkabir/Bus-Ticket-Project.git"
              demoLink="https://easy-bus-ticket-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={journey}
              isBlog={false}
              title="Go Journey Website"
              description="Interactive travel and tour showcase web application. Built with Tailwind CSS and DaisyUI, featuring clean modern layouts, hero sections, responsive card carousels, and engaging travel destination guides."
              tags={["Tailwind CSS", "DaisyUI", "HTML5", "JavaScript"]}
              ghLink="https://github.com/Nasifkabir/GO-Journey-Website.git"
              demoLink="https://go-journey-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alpha}
              isBlog={false}
              title="Alphabet Clash Game"
              description="An interactive arcade typing agility game built with pure JavaScript. Random words appear on screen requiring fast keyboard reaction without looking, accompanied by a 3-life game loop and dynamic scoring."
              tags={["JavaScript", "Game Loop", "Audio API", "CSS3"]}
              ghLink="https://github.com/Nasifkabir"
              demoLink="https://alpha-clash-ebon.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
