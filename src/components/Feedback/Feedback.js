import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { FaStar, FaQuoteLeft, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrLinkedIn: "",
    relationship: "Colleague / Peer",
    rating: 5,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    {
      name: "Tariqul Islam",
      role: "Lead Systems Engineer",
      company: "Innovate Solution (Service Delivery)",
      initials: "TI",
      rating: 5,
      quote:
        "Nasif has been exceptionally reliable in our Service Delivery & Operations team. His agility in diagnosing travel API payloads, investigating supplier booking anomalies, and keeping live client platforms running smoothly is second to none.",
    },
    {
      name: "Foyshal Ahmed",
      role: "Software Engineer & Collaborator",
      company: "Web Tech Associate",
      initials: "FA",
      rating: 5,
      quote:
        "Collaborating with Nasif on frontend web applications is always a great experience. He writes clean, structured React and TypeScript code, implements pixel-perfect responsive designs, and is relentless when solving tricky UI bugs.",
    },
    {
      name: "Rafiqul Hasan",
      role: "Operations Manager",
      company: "B2B Travel Partner Agency",
      initials: "RH",
      rating: 5,
      quote:
        "During our travel platform integration, Nasif guided our technical team through API authentication and booking feeds with incredible patience and deep technical domain knowledge. Truly top-tier support!",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <Container fluid className="feedback-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          Client & Peer <strong className="purple">Feedback</strong>
        </h1>
        <p className="section-subtext">
          Endorsements from engineering colleagues, team leads, and partners reflecting my technical support dedication and software craftsmanship.
        </p>

        {/* Testimonials Grid */}
        <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
          {testimonials.map((item, idx) => (
            <Col lg={4} md={6} key={idx} style={{ padding: "15px" }}>
              <div className="feedback-card">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="stars-row">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} style={{ marginRight: "3px" }} />
                      ))}
                    </div>
                    <FaQuoteLeft style={{ color: "rgba(56, 189, 248, 0.4)", fontSize: "1.2rem" }} />
                  </div>
                  <p className="feedback-quote">"{item.quote}"</p>
                </div>

                <div className="reviewer-info">
                  <div className="reviewer-avatar">{item.initials}</div>
                  <div>
                    <h5 className="reviewer-name">{item.name}</h5>
                    <p className="reviewer-title">
                      {item.role} • <span style={{ color: "#38bdf8" }}>{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Interactive Feedback & Inquiries Form */}
        <Row style={{ justifyContent: "center" }}>
          <Col lg={8} md={10}>
            <div className="feedback-form-card">
              <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#f8fafc", marginBottom: "8px" }}>
                Leave a <span className="purple">Review or Message</span>
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginBottom: "25px" }}>
                Whether you worked with me, reviewed my projects, or have an exciting opportunity, I'd love to hear your feedback!
              </p>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <FaCheckCircle style={{ color: "#10b981", fontSize: "3rem", marginBottom: "15px" }} />
                  <h4 style={{ color: "#f8fafc", fontWeight: "700" }}>Thank You For Your Feedback!</h4>
                  <p style={{ color: "#94a3b8", maxWidth: "450px", margin: "0 auto 20px auto" }}>
                    Your message has been captured. I appreciate you taking the time to connect with me!
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        emailOrLinkedIn: "",
                        relationship: "Colleague / Peer",
                        rating: 5,
                        message: "",
                      });
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label className="form-label-custom">Your Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        className="form-control-custom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="form-label-custom">Email or LinkedIn Profile</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. linkedin.com/in/alex"
                        className="form-control-custom"
                        value={formData.emailOrLinkedIn}
                        onChange={(e) => setFormData({ ...formData, emailOrLinkedIn: e.target.value })}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label className="form-label-custom">Relationship / Category</Form.Label>
                      <Form.Select
                        className="form-control-custom"
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      >
                        <option value="Colleague / Teammate">Colleague / Teammate</option>
                        <option value="Engineering Manager / Lead">Engineering Manager / Lead</option>
                        <option value="Client / Partner">Client / Partner</option>
                        <option value="Recruiter / Talent Scout">Recruiter / Talent Scout</option>
                        <option value="Fellow Developer / Visitor">Fellow Developer / Visitor</option>
                      </Form.Select>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="form-label-custom">Rating</Form.Label>
                      <Form.Select
                        className="form-control-custom"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5/5 Exceptional)</option>
                        <option value={4}>⭐⭐⭐⭐ (4/5 Great)</option>
                        <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-custom">Feedback or Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      required
                      placeholder="Share your thoughts, recommendations, or message here..."
                      className="form-control-custom"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaPaperPlane /> Submit Feedback
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Feedback;
