import React from "react";
import Card from "react-bootstrap/Card";
import { FaBuilding, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <Card className="experience-hero-card">
      <Card.Body>
        <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
          {props.companyLogo && (
            <div className="company-logo-container">
              <img
                src={props.companyLogo}
                alt={`${props.company} logo`}
                className="company-logo-img"
              />
            </div>
          )}
          <div className="ms-auto mb-2">
            <span className="badge-tag badge-status">{props.year || props.duration}</span>
          </div>
        </div>

        <div className="mb-2">
          <h3 style={{ fontSize: "1.65rem", fontWeight: "700", color: "#f8fafc", margin: "0 0 8px 0" }}>
            {props.position}
          </h3>
          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#38bdf8" }}>
              <FaBuilding style={{ marginRight: "6px", verticalAlign: "middle" }} />
              {props.company}
            </span>
            {props.department && (
              <span className="badge-tag badge-dept">{props.department}</span>
            )}
            {props.location && (
              <span className="badge-tag badge-loc">
                <FaMapMarkerAlt style={{ marginRight: "4px" }} />
                {props.location}
              </span>
            )}
            {props.companyUrl && (
              <a
                href={props.companyUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none", marginLeft: "4px" }}
              >
                Visit Company <FaExternalLinkAlt style={{ fontSize: "0.75rem", marginLeft: "2px" }} />
              </a>
            )}
          </div>
        </div>

        {props.description && (
          <p style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.6", marginBottom: "16px" }}>
            {props.description}
          </p>
        )}

        {props.bullets && props.bullets.length > 0 && (
          <div className="mb-3">
            {props.bullets.map((bullet, idx) => (
              <div key={idx} className="exp-bullet">
                {bullet}
              </div>
            ))}
          </div>
        )}

        {props.skills && props.skills.length > 0 && (
          <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <span style={{ fontSize: "0.82rem", color: "#94a3b8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "8px" }}>
              Core Domains & Technologies:
            </span>
            {props.skills.map((skill, idx) => (
              <span key={idx} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
