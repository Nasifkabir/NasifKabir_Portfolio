import React from "react";
import innovateLogo from "../Assets/innovate_solution_logo.png";
import { FiCode } from "react-icons/fi";

function Experience() {
  const roles = [
    {
      title: "Lead Technical Operations Engineer / Acting Manager",
      period: "Aug 2026 – Present • Bangladesh",
      highlight: true,
    },
    {
      title: "Senior Technical Support Engineer",
      period: "Sep 2025 – Aug 2026 • Dhaka, Bangladesh",
      highlight: false,
    },
    {
      title: "Associate Support Engineer",
      period: "May 2025 – Sep 2025 • Dhaka, Bangladesh",
      highlight: false,
    },
    {
      title: "Junior Technical Support Analyst",
      period: "Jan 2025 – May 2025 • Mirpur, Dhaka, Bangladesh",
      highlight: false,
    },
  ];

  const innovateSkills = [
    "Technical Support",
    "API Debugging",
    "REST APIs",
    "Travel Technology / GDS",
    "Postman",
    "Incident Escalation",
    "Live Monitoring",
    "99.5% SLA Compliance",
    "Root Cause Analysis",
    "Client Communication",
  ];

  return (
    <section id="journey_sect" className="journey-sect">
      <div className="portfolio-container">
        <div className="journey-title-wrap">
          <h2 className="sect_title">My Journey So Far (Experience)</h2>
        </div>

        <div className="journey-wrap">
          {/* Innovate Solution Experience Card */}
          <div className="experience-timeline-card">
            <div className="experience-header-row">
              <div className="experience-company-box">
                <div className="experience-logo-container">
                  <img
                    src={innovateLogo}
                    alt="Innovate Solution Logo"
                    className="experience-company-logo"
                  />
                </div>
                <div>
                  <h3 className="experience-company-name">Innovate Solution</h3>
                  <p className="experience-company-meta">
                    Full-time • Service Delivery & Technical Operations
                  </p>
                </div>
              </div>

              <div className="experience-badge-pill">
                <span>Enterprise B2B Travel Tech</span>
              </div>
            </div>

            <p className="experience-summary-text">
              Innovate Solution is a wholesale travel technology powerhouse building enterprise platforms
              (including InnoTravelTech, ReservationHub, and TripGic) for consolidators, OTAs, and tour operators across 40+ countries.
              Responsible for mission-critical platform stability, API consultancy, incident escalation, and 99.5% resolution SLA adherence.
            </p>

            {/* Roles Progressive Timeline */}
            <div className="experience-roles-tree">
              {roles.map((role, idx) => (
                <div key={idx} className="experience-role-item">
                  <div className="experience-role-marker">
                    <span className={`role-dot ${role.highlight ? "highlight" : ""}`}></span>
                    {idx < roles.length - 1 && <span className="role-line"></span>}
                  </div>
                  <div className="experience-role-content">
                    <h4 className="experience-role-title">{role.title}</h4>
                    <p className="experience-role-period">{role.period}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-skills-wrap">
              {innovateSkills.map((skill, sIdx) => (
                <span key={sIdx} className="experience-skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Independent Engineering Card */}
          <div className="experience-timeline-card">
            <div className="experience-header-row">
              <div className="experience-company-box">
                <div className="experience-logo-container code-icon-bg">
                  <FiCode style={{ fontSize: "28px", color: "var(--color-primary)" }} />
                </div>
                <div>
                  <h3 className="experience-company-name">Frontend & Web Development</h3>
                  <p className="experience-company-meta">
                    Independent & Open Source
                  </p>
                </div>
              </div>
            </div>

            <p className="experience-summary-text">
              Engineered production-grade web applications with modern React, Next.js, JavaScript, and Tailwind CSS.
              Architected retail margin analytics tools (Streexpoo Margix), flight booking prototypes (MusafirX), and interactive transit applications. Published 29+ repositories on GitHub.
            </p>

            <div className="experience-skills-wrap">
              <span className="experience-skill-chip">React.js</span>
              <span className="experience-skill-chip">Next.js</span>
              <span className="experience-skill-chip">JavaScript</span>
              <span className="experience-skill-chip">Tailwind CSS</span>
              <span className="experience-skill-chip">Vercel</span>
              <span className="experience-skill-chip">Git / GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
