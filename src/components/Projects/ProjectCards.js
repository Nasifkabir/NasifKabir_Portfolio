import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ position: "relative", overflow: "hidden", maxHeight: "210px" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          style={{ width: "100%", height: "210px", objectFit: "cover", transition: "transform 0.4s ease" }}
        />
      </div>
      <Card.Body style={{ padding: "24px 20px", display: "flex", flexDirection: "column", textAlign: "left" }}>
        <Card.Title style={{ fontSize: "1.3rem", fontWeight: "700", color: "#f8fafc", marginBottom: "10px" }}>
          {props.title}
        </Card.Title>

        {props.tags && props.tags.length > 0 && (
          <div className="mb-3 d-flex flex-wrap gap-1">
            {props.tags.map((tag, idx) => (
              <span key={idx} className="skill-pill" style={{ fontSize: "0.76rem", margin: "2px 4px 2px 0" }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <Card.Text style={{ color: "#94a3b8", fontSize: "0.93rem", lineHeight: "1.6", flexGrow: 1, marginBottom: "20px" }}>
          {props.description}
        </Card.Text>

        <div className="d-flex flex-wrap gap-2 mt-auto">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{ fontSize: "0.88rem", padding: "0.45rem 1rem" }}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                fontSize: "0.88rem",
                padding: "0.45rem 1rem",
                background: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                color: "#38bdf8",
              }}
            >
              <CgWebsite /> &nbsp;
              {"Live Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
