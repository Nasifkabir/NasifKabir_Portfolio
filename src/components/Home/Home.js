import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="status-badge-container">
                <span className="status-pill">
                  <span className="pulse-dot"></span>
                  Technical Support Engineer @ Innovate Solution
                </span>
              </div>

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NASIF KABIR</strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="metrics-section">
        <div className="metrics-container">
          <Row>
            <Col xs={6} md={3} className="metric-item">
              <div className="metric-value">2+</div>
              <div className="metric-label">Years in Tech</div>
            </Col>
            <Col xs={6} md={3} className="metric-item">
              <div className="metric-value">40+</div>
              <div className="metric-label">Markets Supported</div>
            </Col>
            <Col xs={6} md={3} className="metric-item">
              <div className="metric-value">29+</div>
              <div className="metric-label">GitHub Repos</div>
            </Col>
            <Col xs={6} md={3} className="metric-item">
              <div className="metric-value">99.5%</div>
              <div className="metric-label">Resolution SLA</div>
            </Col>
          </Row>
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
