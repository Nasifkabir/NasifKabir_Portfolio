import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alpha from "../../Assets/Projects/alpha.png";
import eticket from "../../Assets/Projects/eticket.png";
import journey from "../../Assets/Projects/journey.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eticket}
              isBlog={false}
              title="Easy Ticket Project"
              description="The Easy Paribahan Bus Ticket Booking project is a web-based application by HTML, CSS &
                            JavaScript designed to streamline the process of booking bus tickets for passengers. The project aims to provide a
                            user-friendly interface where customers can easily search for available bus routes, check seat availability, and book
                            tickets online."
              ghLink="https://github.com/Nasifkabir/Bus-Ticket-Project.git"
              demoLink="https://easy-bus-ticket-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alpha}
              isBlog={false}
              title="Alphabet Clash Game"
              description="This is a web-based game created with JavaScript where a word appears on the screen, and
                            player must click the word without looking at the keyboard. The game has three save lifes. After the third life, the
                            score is displayed, and they can start a new game."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={journey}
              isBlog={false}
              title="Go Journey Website"
              description="This Website showcasing a journey or project. Built with HTML, CSS, Tailwind CSS, and DaisyUI, it
                            features a modern, responsive design with clean layouts, interactive elements, and easy navigation."
              ghLink="https://github.com/Nasifkabir/GO-Journey-Website.git"
              demoLink="https://go-journey-website.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
