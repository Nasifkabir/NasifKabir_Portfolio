import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer_sect" className="simple-footer-sect">
      <div className="portfolio-container">
        <div className="simple-footer-top">
          <div className="simple-footer-brand">
            <h3 className="simple-footer-logo">
              NASIF<span style={{ color: "var(--color-primary)" }}>.</span>
            </h3>
            <p className="simple-footer-role">
              Lead Technical Operations Engineer & Web Developer
            </p>
          </div>

          <div className="simple-footer-nav">
            <a href="#Home">Home</a>
            <a href="#about_sect">About</a>
            <a href="#skills_sect">Skills</a>
            <a href="#certifications_sect">Certifications</a>
            <a href="#Section-Home-Services">Services</a>
            <a href="#project_sect">Projects</a>
            <a href="#journey_sect">Experience</a>
            <a href="#education_sect">Education</a>
            <a href="#awards_sect">Activities</a>
            <a href="#contact_sect">Contact</a>
          </div>

          <div className="simple-footer-socials">
            <a
              href="https://github.com/NasifKabir"
              target="_blank"
              rel="noopener noreferrer"
              className="simple-social-link"
              title="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nasifkabir34/"
              target="_blank"
              rel="noopener noreferrer"
              className="simple-social-link"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:nasifkabir37@gmail.com"
              className="simple-social-link"
              title="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="simple-footer-divider"></div>

        <div className="simple-footer-bottom">
          <p>© {currentYear} Nasif Kabir. All rights reserved.</p>
          <p>Built with React & Modern Web Standards</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
