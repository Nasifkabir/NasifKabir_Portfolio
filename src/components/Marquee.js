import React from "react";
import { StarIcon } from "./Icons";

function Marquee() {
  const items = [
    "Technical Support & Operations",
    "Frontend Engineering",
    "REST APIs & Web Services",
    "React.js & Next.js",
    "99.5% Resolution SLA",
    "Travel Technology",
    "Postman API Diagnostics",
    "UI/UX Architecture",
  ];

  // Duplicate items for continuous smooth infinite scrolling
  const marqueeItems = [...items, ...items];

  return (
    <section className="marquee_sect">
      <div className="marquee_track">
        {marqueeItems.map((text, idx) => (
          <div key={idx} className="marquee_item">
            <StarIcon size={32} className="marquee_star" />
            <span className="marquee_text">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Marquee;
