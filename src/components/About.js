import React from "react";
import { ArrowIcon } from "./Icons";

function About() {
  return (
    <section id="about_sect" className="about_sect">
      <div className="portfolio-container">
        {/* Centered Content */}
        <div className="about_centered_content">
          <div className="about_title_box">
            <h2 className="sect_title">About Me</h2>
          </div>

          <h3 className="about_subtitle">
            Lead Technical Operations Engineer & Web Developer
          </h3>

          <p className="about_description_lead">
            I blend deep operational diagnostics with modern web development to
            solve mission-critical problems and build seamless digital experiences.
          </p>

          <p className="about_text">
            Currently serving as Lead Technical Operations Engineer at{" "}
            <strong style={{ color: "var(--color-white)" }}>Innovate Solution</strong>,
            I oversee live enterprise B2B travel platforms serving 30+ international
            clients. My core focus centers on diagnosing XML/JSON API request-response
            lifecycles, booking engine anomalies, and resolving high-impact incidents
            while consistently upholding a{" "}
            <strong style={{ color: "var(--color-primary)" }}>99.5% SLA compliance</strong>.
          </p>

          <p className="about_text">
            Beyond production systems troubleshooting, I engineer high-performance,
            responsive web applications utilizing{" "}
            <strong style={{ color: "var(--color-white)" }}>
              React.js, Next.js, JavaScript, and Tailwind CSS
            </strong>
            . I hold a B.Sc. in Computer Science & Engineering from Varendra
            University, bridging theoretical computing foundations with hands-on
            reliability.
          </p>

          <div className="about_actions_wrap">
            <a href="#contact_sect" className="portfolio-btn">
              <span>Get In Touch</span>
              <ArrowIcon />
            </a>
            <a href="#project_sect" className="portfolio-btn btn-outline">
              <span>View Projects</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Counter Metrics Bar */}
        <div className="about_counter_wrap">
          <div className="about_counter_items">
            <p className="about_counter_text">Years In Tech</p>
            <div className="about_counter">2+</div>
          </div>
          <div className="about_counter_items">
            <p className="about_counter_text">International Clients Supported</p>
            <div className="about_counter">30+</div>
          </div>
          <div className="about_counter_items">
            <p className="about_counter_text">SLA Compliance</p>
            <div className="about_counter">99.5%</div>
          </div>
          <div className="about_counter_items">
            <p className="about_counter_text">Projects Completed</p>
            <div className="about_counter">15+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
