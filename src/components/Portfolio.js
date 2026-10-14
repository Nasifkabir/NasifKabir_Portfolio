import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Activities from "./Activities";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingScrollButton from "./FloatingScrollButton";

function Portfolio() {
  useEffect(() => {
    // Select all sections on the portfolio page
    const sections = document.querySelectorAll(
      ".about_sect, .skills_sect, .certifications_sect, .project_sect, .journey-sect, .education-sect, .awards_sect, .contact_sect, .simple-footer-sect"
    );

    // Initial check: sections near or in viewport are revealed right away
    sections.forEach((sec) => {
      sec.classList.add("scroll-reveal-section");
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 1.15) {
        sec.classList.add("section-revealed");
      } else {
        sec.classList.add("section-hidden");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          if (entry.isIntersecting) {
            entry.target.classList.add("section-revealed");
            entry.target.classList.remove("section-hidden");
          } else {
            // When scrolling up and the section exits below the viewport:
            if (rect.top > 0) {
              entry.target.classList.remove("section-revealed");
              entry.target.classList.add("section-hidden");
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 60px 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <FloatingScrollButton />
    </div>
  );
}

export default Portfolio;
