import React from "react";
import { ArrowIcon } from "./Icons";

import streexpooImg from "../Assets/Projects/streexpoo.jpg";
import musafirxImg from "../Assets/Projects/musafirx.jpg";
import eticketImg from "../Assets/Projects/eticket.png";
import journeyImg from "../Assets/Projects/journey.png";
import alphaImg from "../Assets/Projects/alpha.png";

function Projects() {
  const projects = [
    {
      title: "Streexpoo Margix",
      subtitle: "Financial Margin & Analytics App",
      year: "January 2025",
      description:
        "A customized profit tracking and financial margin analytics web application designed for shops and retail merchants. Features real-time revenue computation, expense breakdown, net profit margin analysis, and sales trend monitoring.",
      image: streexpooImg,
      tags: ["TypeScript", "React.js", "Tailwind CSS", "Vercel"],
      demoUrl: "https://streexpoo-margix.vercel.app",
      ghUrl: "https://github.com/Nasifkabir/streexpoo_margix",
    },
    {
      title: "MusafirX Travel Platform",
      subtitle: "Flight Reservation & Search Interface",
      year: "December 2024",
      description:
        "A modern travel exploration and flight reservation interface inspired by enterprise B2B travel tech systems. Incorporates intuitive search parameters, route filtering, and dynamic responsive cards built for international travelers.",
      image: musafirxImg,
      tags: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
      demoUrl: "https://musafir-x.vercel.app",
      ghUrl: "https://github.com/Nasifkabir/MusafirX",
    },
    {
      title: "Easy Ticket Bus Portal",
      subtitle: "Digital Transit Booking System",
      year: "August 2024",
      description:
        "The Easy Paribahan Bus Ticket Booking portal streamlines bus passenger bookings. Provides a user-friendly interface to search active bus routes, check real-time seat availability, and book digital tickets online.",
      image: eticketImg,
      tags: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      demoUrl: "https://easy-bus-ticket-project.vercel.app/",
      ghUrl: "https://github.com/Nasifkabir/Bus-Ticket-Project.git",
    },
    {
      title: "Go Journey Website",
      subtitle: "Interactive Tour & Destination Showcase",
      year: "May 2024",
      description:
        "Interactive travel and tour showcase web application. Built with Tailwind CSS and DaisyUI, featuring clean modern layouts, hero sections, responsive card carousels, and engaging travel destination guides.",
      image: journeyImg,
      tags: ["Tailwind CSS", "DaisyUI", "HTML5", "JavaScript"],
      demoUrl: "https://go-journey-website.vercel.app/",
      ghUrl: "https://github.com/Nasifkabir/GO-Journey-Website.git",
    },
    {
      title: "Alphabet Clash Game",
      subtitle: "Arcade Typing Agility Engine",
      year: "February 2024",
      description:
        "An interactive arcade typing agility game built with pure JavaScript. Words appear on screen requiring fast keyboard reaction without looking, accompanied by a 3-life game loop and dynamic score tracking.",
      image: alphaImg,
      tags: ["JavaScript", "Game Loop", "Audio API", "CSS3"],
      demoUrl: "https://alpha-clash-ebon.vercel.app/",
      ghUrl: "https://github.com/Nasifkabir",
    },
  ];

  return (
    <section id="project_sect" className="project_sect">
      <div className="portfolio-container">
        <div className="project_title_box">
          <h2 className="sect_title">My Recent Work</h2>
        </div>

        <div className="project_wrap">
          {projects.map((proj, idx) => (
            <div key={idx} className="project_card_item">
              <div className="project-img-box">
                <img src={proj.image} alt={proj.title} />
              </div>

              <div className="project-content-wrap">
                <div className="project-content-year-wrap">
                  <div className="project-content-year">{proj.year}</div>
                  <div className="project-content-year-border"></div>
                </div>

                <h3 className="project-content-name">{proj.title}</h3>
                <p className="project-content-desc">{proj.description}</p>

                <div className="project-tags-wrap">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links-wrap">
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn"
                    >
                      <span>Live Demo</span>
                      <ArrowIcon />
                    </a>
                  )}
                  {proj.ghUrl && (
                    <a
                      href={proj.ghUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn btn-outline"
                    >
                      <span>GitHub</span>
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
