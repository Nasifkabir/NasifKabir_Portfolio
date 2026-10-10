import React, { useState } from "react";
import { PlusIcon } from "./Icons";

function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "Technical Support & Operations",
      description:
        "Tier 2/3 operational support for live B2B travel tech platforms serving 6,200+ partner enterprises worldwide. Rigorous investigation of XML/JSON request-response lifecycles, booking engine anomalies, supplier connectivity, and maintaining a 99.5% resolution SLA.",
      tags: ["Incident Escalation", "SLA Enforcement", "Live Monitoring", "Log Analysis", "Root Cause Analysis"],
    },
    {
      title: "Frontend & Web Development",
      description:
        "Engineering fast, responsive, and user-centric web applications using React.js, Next.js, JavaScript, and Tailwind CSS. Implementing modern UI systems, dynamic dashboard metrics, and intuitive client portals.",
      tags: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Responsive Design", "State Architecture"],
    },
    {
      title: "API & Systems Integration",
      description:
        "Comprehensive API consultation, Postman collection orchestration, endpoint authentication, credential provisioning, and supplier/GDS connectivity troubleshooting across international partner integrations.",
      tags: ["Postman", "REST APIs", "JSON/XML Payloads", "API Consultancy", "Authentication Workflows"],
    },
    {
      title: "Database & Cloud Deployment",
      description:
        "Structured data modeling, MySQL & relational querying, Git version control, Vercel cloud hosting environments, and setting up continuous automated deployment pipelines for web tools.",
      tags: ["MySQL", "Git & GitHub", "Vercel", "Linux / Bash", "CI/CD Deployment"],
    },
    {
      title: "Travel Technology Solutions",
      description:
        "Specialized operational domain expertise in wholesale travel tech architectures (InnoTravelTech, ReservationHub, and TripGic) empowering flight consolidators and OTAs across 40+ countries.",
      tags: ["GDS Platforms", "Flight Reservations", "B2B Travel Systems", "Partner Onboarding"],
    },
  ];

  const toggleService = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="Section-Home-Services" className="section-home-services">
      <div className="portfolio-container">
        <div className="service_title_box">
          <h2 className="sect_title">My Services</h2>
        </div>

        <div className="services-content-wrap">
          {services.map((svc, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`services-accordion ${isOpen ? "active" : ""}`}
              >
                <div
                  className="services-item"
                  onClick={() => toggleService(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleService(index);
                  }}
                >
                  <div className="services-title-wrap">
                    <h3 className="services-title-three">{svc.title}</h3>
                    <div className="services-icon-wrapper">
                      <PlusIcon />
                    </div>
                  </div>

                  <div className="services-accordionc-pane">
                    <p className="services-text">{svc.description}</p>
                    <div className="services-button-wrap">
                      {svc.tags.map((tag, tIdx) => (
                        <div key={tIdx} className="services-button-link">
                          <span className="services-button-text">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
