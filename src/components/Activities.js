import React from "react";
import pbon_logo from "../Assets/pbon.png";
import vu_iac_logo from "../Assets/vuiac.jpg";
import vu_logo from "../Assets/VU-Logo.png";

function Activities() {
  const activities = [
    {
      role: "IT Secretary",
      organization: "Prothom Alo Bondhushava",
      branch: "Varendra University Branch",
      period: "Jan 2020 – Dec 2022 · 3 yrs",
      category: "Science and Technology",
      logo: pbon_logo,
      description:
        "Spearheaded technical initiatives, managed digital outreach and social campaigns, organized IT learning workshops, and coordinated large-scale social welfare activities for student members.",
    },
    {
      role: "Department Ambassador",
      organization: "Varendra University International Affairs Council",
      branch: "International Affairs Council",
      period: "Aug 2020 – Nov 2022 · 2 yrs 4 mos",
      category: "Cross-Cultural & Global Affairs",
      logo: vu_iac_logo,
      description:
        "Represented the Department of Computer Science & Engineering in international university collaborations, cross-cultural youth symposiums, and institutional diplomatic seminars.",
    },
    {
      role: "Class Representative",
      organization: "Dept. of CSE, Varendra University",
      branch: "Department of Computer Science & Engineering",
      period: "Sep 2019 – Aug 2021 · 2 yrs",
      category: "Education & Student Leadership",
      logo: vu_logo,
      description:
        "Served as the primary academic liaison between department faculty and undergraduate CSE cohorts. Coordinated curriculum feedback, laboratory schedules, and student welfare initiatives.",
    },
  ];

  return (
    <section id="awards_sect" className="awards_sect">
      <div className="portfolio-container">
        <div className="awards_title_box">
          <h2 className="sect_title">Extra-Curricular Activities</h2>
        </div>

        <div className="activities_grid_wrap">
          {activities.map((item, idx) => (
            <div key={idx} className="activity-card-item">
              <div className="activity-card-header">
                <div className="activity-logo-box">
                  <img
                    src={item.logo}
                    alt={item.organization}
                    className="activity-logo-img"
                  />
                </div>
                <div className="activity-period-tag">{item.period}</div>
              </div>

              <h3 className="activity-role-title">{item.role}</h3>
              <p className="activity-org-name">{item.organization}</p>
              <div className="activity-category-badge">{item.category}</div>
              <p className="activity-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
