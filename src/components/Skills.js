import React from "react";
import { DiamondIcon } from "./Icons";
import {
  FiCode,
  FiLayers,
  FiTool,
  FiMonitor,
  FiFileText,
  FiAlertTriangle,
  FiShield,
  FiSearch,
} from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostman,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiVercel,
  SiLinux,
  SiMysql,
  SiGoogle,
  SiJson,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscDebugAlt } from "react-icons/vsc";
import {
  FaPlaneDeparture,
  FaHeadset,
  FaUsers,
  FaTasks,
  FaHandshake,
} from "react-icons/fa";
import { RiBrainLine } from "react-icons/ri";

const BordioLogo = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ flexShrink: 0 }}
  >
    <rect width="24" height="24" rx="5" fill="#FF5E57" />
    <path
      d="M6.5 12.5L10 16L17.5 8"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Skills() {
  const topSkills = [
    {
      name: "Front-End Development",
      icon: <SiReact style={{ color: "#61DAFB" }} />,
    },
    {
      name: "Technical Support",
      icon: <FaHeadset style={{ color: "#10b981" }} />,
    },
    {
      name: "Travel Technology",
      icon: <FaPlaneDeparture style={{ color: "#f59e0b" }} />,
    },
    {
      name: "Customer Relationship Management (CRM)",
      icon: <FaUsers style={{ color: "#818cf8" }} />,
    },
    {
      name: "Problem Solving",
      icon: <RiBrainLine style={{ color: "#ec4899" }} />,
    },
  ];

  const skillCategories = [
    {
      title: "Technical Knowledge",
      subtitle: "Web development architectures, API debugging, and responsive user interfaces",
      icon: <FiCode className="skill-cat-icon" />,
      skills: [
        { name: "API Debugging", icon: <VscDebugAlt style={{ color: "#38bdf8" }} /> },
        { name: "HTML / HTML5", icon: <SiHtml5 style={{ color: "#E34F26" }} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { name: "React.js", icon: <SiReact style={{ color: "#61DAFB" }} /> },
        { name: "Next.js", icon: <SiNextdotjs style={{ color: "#FFFFFF" }} /> },
        { name: "REST APIs", icon: <TbApi style={{ color: "#38bdf8" }} /> },
        { name: "JSON / XML Payloads", icon: <SiJson style={{ color: "#94a3b8" }} /> },
        { name: "CSS3 / SASS", icon: <SiCss3 style={{ color: "#1572B6" }} /> },
        { name: "Responsive Web Design", icon: <FiMonitor style={{ color: "#10b981" }} /> },
      ],
    },
    {
      title: "Operations & Administration",
      subtitle: "Enterprise IT workflows, team synchronization, and strict SLA maintenance",
      icon: <FiLayers className="skill-cat-icon" />,
      skills: [
        { name: "Project Management", icon: <FaTasks style={{ color: "#38bdf8" }} /> },
        { name: "Team Coordination", icon: <FaUsers style={{ color: "#818cf8" }} /> },
        { name: "Reporting & Documentation", icon: <FiFileText style={{ color: "#f59e0b" }} /> },
        {
          name: "Google Workspace (Docs, Sheets, Slides)",
          icon: <SiGoogle style={{ color: "#4285F4" }} />,
        },
        { name: "Incident Escalation", icon: <FiAlertTriangle style={{ color: "#ef4444" }} /> },
        { name: "99.5% SLA Compliance", icon: <FiShield style={{ color: "#10b981" }} /> },
        { name: "Root Cause Analysis", icon: <FiSearch style={{ color: "#a855f7" }} /> },
        { name: "Client Success Operations", icon: <FaHandshake style={{ color: "#ec4899" }} /> },
      ],
    },
    {
      title: "Tools & Platforms",
      subtitle: "Daily diagnostics, developer toolchains, version control, and cloud environments",
      icon: <FiTool className="skill-cat-icon" />,
      skills: [
        { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
        { name: "Git", icon: <SiGit style={{ color: "#F05032" }} /> },
        { name: "GitHub", icon: <SiGithub style={{ color: "#FFFFFF" }} /> },
        { name: "Bordio", icon: <BordioLogo /> },
        { name: "VS Code", icon: <SiVisualstudiocode style={{ color: "#007ACC" }} /> },
        { name: "Vercel", icon: <SiVercel style={{ color: "#FFFFFF" }} /> },
        { name: "Linux / CLI", icon: <SiLinux style={{ color: "#FCC624" }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
      ],
    },
  ];

  return (
    <section id="skills_sect" className="skills_sect">
      <div className="portfolio-container">
        <div className="skills_title_box">
          <h2 className="sect_title">Skills & Proficiencies</h2>
        </div>

        {/* Top Skills Spotlight Card */}
        <div className="top_skills_banner">
          <div className="top_skills_header">
            <div className="top_skills_badge">
              <DiamondIcon size={20} className="top_skills_diamond" />
              <span>Top Skills</span>
            </div>
            <p className="top_skills_tagline">
              Core competencies driving daily technical operations and software engineering
            </p>
          </div>

          <div className="top_skills_chips_wrap">
            {topSkills.map((skill, idx) => (
              <div key={idx} className="top_skill_chip">
                <span className="skill_icon_box">{skill.icon}</span>
                <span className="top_skill_chip_text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills_categories_grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill_cat_card">
              <div className="skill_cat_header">
                <div className="skill_cat_icon_box">{cat.icon}</div>
                <div>
                  <h3 className="skill_cat_title">{cat.title}</h3>
                  <p className="skill_cat_subtitle">{cat.subtitle}</p>
                </div>
              </div>

              <div className="skill_cat_tags_wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill_item_tag">
                    <span className="skill_icon_box">{skill.icon}</span>
                    <span className="skill_tag_text">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
