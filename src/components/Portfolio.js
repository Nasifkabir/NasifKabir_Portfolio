import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Services from "./Services";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Activities from "./Activities";
import Contact from "./Contact";
import Marquee from "./Marquee";
import Footer from "./Footer";

function Portfolio() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Activities />
        <Contact />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
