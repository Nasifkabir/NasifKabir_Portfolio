import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function FloatingScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 260) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`floating_scroll_top_btn ${visible ? "is_visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FiArrowUp className="floating_scroll_arrow" />
    </button>
  );
}

export default FloatingScrollButton;
