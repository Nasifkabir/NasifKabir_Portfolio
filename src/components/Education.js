import React from "react";
import vuLogo from "../Assets/VU-Logo.png";
import rcsLogo from "../Assets/rcs_logo.png";

function Education() {
  const educationItems = [
    {
      institution: "Varendra University",
      degree: "B.Sc. in CSE, Computer Science and Engineering",
      period: "2019 – Jul 2024",
      logo: vuLogo,
      location: "Rajshahi, Bangladesh",
      description:
        "Graduated with a comprehensive 4-year undergraduate degree focusing on Data Structures, Algorithms, Software Engineering, Database Systems, Web Development, and Computer Networks.",
    },
    {
      institution: "Rajshahi Collegiate School and College",
      degree: "Higher Secondary Certificate (HSC), Science",
      period: "2017 – 2019",
      logo: rcsLogo,
      location: "Rajshahi, Bangladesh",
      description:
        "Specialized in the Science group with rigorous coursework in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.",
    },
    {
      institution: "Rajshahi Collegiate School",
      degree: "Secondary School Certificate (SSC)",
      period: "2019 – 2021",
      logo: rcsLogo,
      location: "Rajshahi, Bangladesh",
      description:
        "Completed secondary school education with strong emphasis on sciences, analytical problem-solving, and foundational computing.",
    },
  ];

  return (
    <section id="education_sect" className="education-sect">
      <div className="portfolio-container">
        <div className="education-title-wrap">
          <h2 className="sect_title">Education</h2>
        </div>

        <div className="education-grid-wrap">
          {educationItems.map((item, idx) => (
            <div key={idx} className="education-card-item">
              <div className="education-card-top">
                <div className="education-logo-box">
                  <img
                    src={item.logo}
                    alt={`${item.institution} Logo`}
                    className="education-inst-logo"
                  />
                </div>
                <div className="education-meta-box">
                  <h3 className="education-inst-title">{item.institution}</h3>
                  <p className="education-degree-text">{item.degree}</p>
                  <span className="education-period-badge">{item.period}</span>
                </div>
              </div>

              <p className="education-desc-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
