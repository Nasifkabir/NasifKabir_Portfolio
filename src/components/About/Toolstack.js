import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiLinux,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiPostman />, name: "Postman (APIs)" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiWindows />, name: "Windows" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          {tool.icon}
          <span className="tech-name">{tool.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
