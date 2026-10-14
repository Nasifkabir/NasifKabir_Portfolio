import React, { useState, useEffect } from "react";
import { ArrowIcon } from "./Icons";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`main_header ${scrolled ? "scrolled" : ""}`}>
      <div className="portfolio-container">
        <div className="navbar_flex_box">
          <a href="#Home" className="main_logo_box">
            <h1 className="main_logo_text">
              NASIF KABIR<span className="main_logo_dot">.</span>
            </h1>
          </a>

          <nav className="navigation_wrap">
            <div className="navigation_link_wrap">
              <a href="#Home" className="nav_link">Home</a>
              <a href="#about_sect" className="nav_link">About</a>
              <a href="#skills_sect" className="nav_link">Skills</a>
              <a href="#certifications_sect" className="nav_link">Certifications</a>
              <a href="#project_sect" className="nav_link">Portfolio</a>
              <a href="#journey_sect" className="nav_link">Experience</a>
              <a href="#education_sect" className="nav_link">Education</a>
              <a href="#awards_sect" className="nav_link">Activities</a>
              <a href="#contact_sect" className="nav_link">Contact</a>
            </div>

            <div className="navigation_button_box">
              <a href="#contact_sect" className="portfolio-btn">
                <span>Let’s Talk</span>
                <ArrowIcon />
              </a>

              <button
                type="button"
                className="theme_toggle_btn desktop_theme_btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <FiSun className="theme_icon sun" />
                ) : (
                  <FiMoon className="theme_icon moon" />
                )}
              </button>
            </div>
          </nav>

          <div className="mobile_header_actions">
            <button
              type="button"
              className="theme_toggle_btn mobile_theme_icon_btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun className="theme_icon sun" />
              ) : (
                <FiMoon className="theme_icon moon" />
              )}
            </button>

            <button
              className="menu_toggle_btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile_menu_drawer ${mobileOpen ? "open" : ""}`}>
        <a href="#Home" className="nav_link" onClick={closeMobile}>Home</a>
        <a href="#about_sect" className="nav_link" onClick={closeMobile}>About</a>
        <a href="#skills_sect" className="nav_link" onClick={closeMobile}>Skills</a>
        <a href="#certifications_sect" className="nav_link" onClick={closeMobile}>Certifications</a>
        <a href="#project_sect" className="nav_link" onClick={closeMobile}>Portfolio</a>
        <a href="#journey_sect" className="nav_link" onClick={closeMobile}>Experience</a>
        <a href="#education_sect" className="nav_link" onClick={closeMobile}>Education</a>
        <a href="#awards_sect" className="nav_link" onClick={closeMobile}>Activities</a>
        <a href="#contact_sect" className="nav_link" onClick={closeMobile}>Contact</a>

        <div className="mobile_theme_row">
          <span className="mobile_theme_label">Theme</span>
          <button
            type="button"
            className="mobile_theme_toggle_pill"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <>
                <FiSun className="theme_icon sun" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FiMoon className="theme_icon moon" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        <a href="#contact_sect" className="portfolio-btn" onClick={closeMobile} style={{ marginTop: "14px" }}>
          <span>Let’s Talk</span>
          <ArrowIcon />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
