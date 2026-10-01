import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiHtml5,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiBootstrap />, name: "Bootstrap" },
    { icon: <DiHtml5 />, name: "HTML5 / CSS3" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <CgCPlusPlus />, name: "C++" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          {tech.icon}
          <span className="tech-name">{tech.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
