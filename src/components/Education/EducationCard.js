import React from "react";
import Card from "react-bootstrap/Card";

function EducationCard(props) {
  return (
    <Card className="education-card-view">
      <Card.Body>
        <Card.Title>{props.institution}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.degree} - {props.year}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
