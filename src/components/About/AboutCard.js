import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8", color: "#cbd5e1" }}>
            Hi everyone, I am <span className="purple" style={{ fontWeight: "700" }}>Nasif Kabir</span>, based in <span className="purple">Rajshahi & Dhaka, Bangladesh</span>.
            <br />
            <br />
            I currently work as a <span className="purple" style={{ fontWeight: "600" }}>Technical Support Engineer</span> in <span className="purple">Service Delivery & Operations</span> at <span className="purple">Innovate Solution</span>, supporting mission-critical B2B travel technology software worldwide.
            <br />
            <br />
            I graduated with a <span className="purple" style={{ fontWeight: "600" }}>B.Sc. in Computer Science & Engineering</span> from <span className="purple">Varendra University</span> (2019 – 2024). I combine my deep operational understanding of live systems, REST APIs, and client support with active frontend software development in <span className="purple">TypeScript, React, Next.js, and modern CSS/Tailwind</span>.
            <br />
            <br />
            Beyond engineering and troubleshooting, here are some activities I am passionate about:
          </p>
          <ul style={{ paddingLeft: "10px" }}>
            <li className="about-activity mb-2" style={{ color: "#e2e8f0" }}>
              <ImPointRight style={{ color: "#38bdf8", marginRight: "8px" }} /> Exploring New Web & Cloud Technologies
            </li>
            <li className="about-activity mb-2" style={{ color: "#e2e8f0" }}>
              <ImPointRight style={{ color: "#38bdf8", marginRight: "8px" }} /> Building Useful Digital Utilities & Side Projects
            </li>
            <li className="about-activity mb-2" style={{ color: "#e2e8f0" }}>
              <ImPointRight style={{ color: "#38bdf8", marginRight: "8px" }} /> Travelling & Exploring New Cultures
            </li>
          </ul>

          <p style={{ color: "#38bdf8", marginTop: "20px", fontStyle: "italic", fontWeight: "600" }}>
            "Bridging technical problem-solving with seamless user experiences."
          </p>
          <footer className="blockquote-footer" style={{ color: "#94a3b8" }}>Nasif Kabir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
