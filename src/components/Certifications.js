import React from "react";
import { ExternalLinkIcon } from "./Icons";

function Certifications() {
  const certifications = [
    {
      title: "Become a Web Designer - HTML & CSS",
      issuer: "Udemy",
      issuerCode: "UDEMY",
      badgeColor: "#a435f0",
      issued: "Issued Mar 2024",
      credentialId: null,
      skills: ["HTML", "Cascading Style Sheets (CSS)", "Web Layouts"],
      certificateName: "Become a Web Designer",
      verifyUrl: "https://www.udemy.com/certificate/UC-web-designer-html-css/",
    },
    {
      title: "Python Programming Essentials",
      issuer: "Interactive Cares",
      issuerCode: "IC",
      badgeColor: "#00b4d8",
      issued: "Issued Sep 2024",
      credentialId: "4bd531fb-a343-4358-96bc-31196603abb2",
      skills: ["Python (Programming Language)", "Algorithmic Logic", "Data Structures"],
      certificateName: "Python Essentials",
      verifyUrl: "https://interactivecares.com/certificate/4bd531fb-a343-4358-96bc-31196603abb2",
    },
    {
      title: "Fundamentals of Web Development",
      issuer: "Ostad",
      issuerCode: "OSTAD",
      badgeColor: "#f59e0b",
      issued: "Issued Sep 2024",
      credentialId: "C15719",
      skills: ["HTML5", "Cascading Style Sheets (CSS)", "DOM API", "Responsive Design"],
      certificateName: "Fundamentals of Web Development",
      verifyUrl: "https://ostad.app/certificate/C15719",
    },
  ];

  return (
    <section id="certifications_sect" className="certifications_sect">
      <div className="portfolio-container">
        <div className="certifications_title_box">
          <h2 className="sect_title">Licenses & Certifications</h2>
        </div>

        <div className="certifications_grid_wrap">
          {certifications.map((cert, idx) => (
            <div key={idx} className="certification_card_item">
              <div className="cert_card_top">
                <div
                  className="cert_issuer_badge"
                  style={{
                    borderColor: `${cert.badgeColor}40`,
                    boxShadow: `0 4px 20px ${cert.badgeColor}20`,
                  }}
                >
                  {cert.issuer === "Udemy" && (
                    <span style={{ color: "#a435f0", fontWeight: 800, fontSize: "22px" }}>
                      U
                    </span>
                  )}
                  {cert.issuer === "Interactive Cares" && (
                    <span style={{ color: "#00b4d8", fontWeight: 800, fontSize: "18px" }}>
                      IC
                    </span>
                  )}
                  {cert.issuer === "Ostad" && (
                    <span style={{ color: "#f59e0b", fontWeight: 800, fontSize: "20px" }}>
                      ◎
                    </span>
                  )}
                </div>

                <div className="cert_issuer_meta">
                  <h3 className="cert_title">{cert.title}</h3>
                  <div className="cert_issuer_name">{cert.issuer}</div>
                  <div className="cert_issued_date">{cert.issued}</div>
                  {cert.credentialId && (
                    <div className="cert_id_tag">
                      <span className="cert_id_label">Credential ID:</span>{" "}
                      <code>{cert.credentialId}</code>
                    </div>
                  )}
                </div>
              </div>

              <div className="cert_skills_section">
                <span className="cert_skills_label">Skills:</span>
                <div className="cert_skills_chips">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert_skill_chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert_card_footer">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert_verify_btn"
                >
                  <span>Show Credential</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
