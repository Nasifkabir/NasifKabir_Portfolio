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
              I'm a CSE graduate from Varendra University, skilled in front-end web development 
              <br />
              <br />I am proficeint in
              <i>
                <b className="purple"> HTML, CSS, Tailwind, Javascript and ReactJs. </b>
              </i>
              <br />
              <br />
              I'm passionate about&nbsp;
              <i>
                <b className="purple">web technologies, software development </b> and
                and various aspects of{" "}
                <b className="purple">
                  Software Engineering.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I create projects and continuously learn new things in the tech industry, focusing on <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
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
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Nasifkabir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/nasifkabir34"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
