import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/img.png";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Currently, I am working as a <b className="purple">Technical Support Engineer</b> in 
              <b className="purple"> Service Delivery & Operations</b> at <b className="purple">Innovate Solution</b>, 
              where I ensure high availability and provide expert API consultancy for global B2B travel technology platforms.
              <br />
              <br />
              I hold a B.Sc. in Computer Science & Engineering from <b className="purple">Varendra University</b>, 
              with strong expertise in modern frontend and web application development.
              <br />
              <br />
              My core toolkit includes
              <i>
                <b className="purple"> TypeScript, JavaScript (ES6+), React.js, Next.js, REST APIs, and Tailwind CSS.</b>
              </i>
              <br />
              <br />
              I specialize in bridging technical support with software development — diagnosing live system issues, optimizing API integrations, and building fast, responsive, and user-centric web applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-frame">
              <img src={myImg} className="img-fluid rounded-circle" alt="Nasif Kabir" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/F5ekpwEzwfL3bBXG/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Nasifkabir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nasifkabir34/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
