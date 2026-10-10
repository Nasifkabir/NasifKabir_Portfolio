import React from "react";
import { ArrowIcon, StarIcon } from "./Icons";
import resumePdf from "../Assets/NASIF KABIR RESUME.pdf";
import nasifHeroImg from "../Assets/nasif_hero.jpg";

function Hero() {
  return (
    <section id="Home" className="hero_banner_sect">
      <div className="hero_banner_bg_box">
        <div className="hero_grid_pattern"></div>
      </div>

      <div className="portfolio-container">
        <div className="hero_grid_layout">
          <div className="hero_banner_content_wrap">
            <div className="hero_banner_content_bio_box">
              <h2 className="hero_banner_content_bio">
                Hey! I’m Nasif Kabir, Your IT & Engineering Partner
              </h2>
              <div className="hero_banner_content_bio_border"></div>
            </div>

            <div className="hero_banner_content_title_box">
              <div className="hero_banner_content_title">Lead Technical</div>
              <div className="hero_banner_content_title_with_icon">
                <StarIcon />
                <div className="hero_banner_content_title hero_banner_content_title_color">
                  Operations
                </div>
              </div>
              <div className="hero_banner_content_title">
                Engineer
              </div>
            </div>

            <p className="short_des hero_banner_short_des">
              Lead Technical Operations Engineer at Innovate Solution and active frontend developer.
              I specialize in diagnosing live enterprise travel systems, managing REST API integrations,
              and building fast, responsive, and reliable web applications.
            </p>

            <div className="hero_banner_button_box">
              <a href="#contact_sect" className="portfolio-btn">
                <span>Let’s Talk</span>
                <ArrowIcon />
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn btn-outline"
              >
                <span>Download CV</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero_image_column">
            <div className="hero_image_frame">
              <img
                src={nasifHeroImg}
                alt="Nasif Kabir - Lead Technical Operations Engineer & Frontend Developer"
                className="hero_portrait_img"
              />
              <div className="hero_floating_badge">
                <span>Lead Technical Operations Engineer at Innovate Solution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
