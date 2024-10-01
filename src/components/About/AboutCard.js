import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nasif Kabir </span>
            from <span className="purple"> Rajshahi, Bangladesh.</span>
            <br />
            I have completed <span className="purple"> Bachelor </span>in Computer Science & Engineering from <span className="purple"> Varendra University</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Enhancing My Tech Knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code, Create, Conquer!"{" "}
          </p>
          <footer className="blockquote-footer">Nasif Kabir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
