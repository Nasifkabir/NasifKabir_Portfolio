import React from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

function EducationCard(props) {
  return (
    <Card className="education-card-view">
      <Card.Body style={{ padding: "28px 22px", textAlign: "left", display: "flex", flexDirection: "column", height: "100%" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38bdf8",
              fontSize: "1.4rem"
            }}
          >
            <FaGraduationCap />
          </div>
          <span className="badge-tag badge-status" style={{ margin: 0 }}>
            <FaCalendarAlt style={{ marginRight: "5px", fontSize: "0.75rem" }} />
            {props.year}
          </span>
        </div>

        <Card.Title style={{ fontSize: "1.25rem", fontWeight: "700", color: "#f8fafc", marginBottom: "8px" }}>
          {props.institution}
        </Card.Title>

        <Card.Subtitle style={{ color: "#38bdf8", fontWeight: "600", fontSize: "0.95rem", marginBottom: "14px" }}>
          {props.degree}
        </Card.Subtitle>

        {props.description && (
          <Card.Text style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6", marginTop: "auto" }}>
            {props.description}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
