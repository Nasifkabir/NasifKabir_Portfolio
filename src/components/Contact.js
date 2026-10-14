import React, { useState } from "react";
import { ArrowIcon } from "./Icons";
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const accessKey =
      process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "";

    if (!accessKey) {
      setErrorMessage(
        "Please provide your free Web3Forms Access Key in .env (REACT_APP_WEB3FORMS_ACCESS_KEY) to activate direct Gmail dispatch."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          phone: formState.phone || "Not provided",
          subject: formState.subject || "New Inquiry from Portfolio",
          message: formState.message,
          from_name: `${formState.name} (Portfolio Inquiry)`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.message || "Failed to send message. Please verify your access key or email directly."
        );
      }
    } catch (err) {
      setErrorMessage(
        "Network error: Unable to deliver email right now. Please email directly at nasifkabir37@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState({
      name: "",
      phone: "",
      subject: "",
      email: "",
      message: "",
    });
    setSubmitted(false);
    setErrorMessage("");
  };

  return (
    <section id="contact_sect" className="contact_sect">
      <div className="portfolio-container">
        <div className="contact_title_wrap">
          <h2 className="sect_title">Let’s Work Together</h2>
        </div>

        <div className="contact_wrap">
          <div className="contact_form_block">
            {submitted ? (
              <div className="contact_success_alert">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                  <FiCheckCircle style={{ color: "var(--color-primary)", fontSize: "24px", flexShrink: 0 }} />
                  <h4 style={{ color: "var(--color-primary)", margin: 0, fontSize: "22px" }}>
                    Thank you, {formState.name}!
                  </h4>
                </div>
                <p style={{ margin: "0 0 16px 0", color: "var(--color-neutral-light)" }}>
                  Your message regarding "{formState.subject || "Collaboration"}" has been sent directly to{" "}
                  <strong style={{ color: "var(--color-white)" }}>nasifkabir37@gmail.com</strong>.
                  I will get back to you shortly!
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="portfolio-btn btn-outline"
                  style={{ padding: "8px 20px", fontSize: "14px" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact_form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="contact_error_alert">
                    <FiAlertCircle style={{ marginRight: "8px", verticalAlign: "middle" }} />
                    {errorMessage}
                  </div>
                )}

                <div className="contact_form_row">
                  <div className="contact_form_group">
                    <label htmlFor="Name" className="contact_form_label">Your Name</label>
                    <input
                      type="text"
                      id="Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="contact_form_input"
                    />
                  </div>

                  <div className="contact_form_group">
                    <label htmlFor="Phone" className="contact_form_label">Phone Number</label>
                    <input
                      type="tel"
                      id="Phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="e.g. +880 1774 453009"
                      className="contact_form_input"
                    />
                  </div>
                </div>

                <div className="contact_form_row">
                  <div className="contact_form_group">
                    <label htmlFor="Subject" className="contact_form_label">Subject</label>
                    <input
                      type="text"
                      id="Subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="e.g. IT Operations / Web Project"
                      required
                      className="contact_form_input"
                    />
                  </div>

                  <div className="contact_form_group">
                    <label htmlFor="Email" className="contact_form_label">Email Address</label>
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="contact_form_input"
                    />
                  </div>
                </div>

                <div className="contact_form_group">
                  <label htmlFor="Message" className="contact_form_label">Message</label>
                  <textarea
                    id="Message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your technical goals, project requirements, or questions..."
                    required
                    className="contact_form_input contact_form_textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="portfolio-btn"
                  style={{
                    width: "100%",
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  <span>{isSubmitting ? "Sending Message..." : "Submit Now"}</span>
                  {isSubmitting ? (
                    <FiLoader className="spin-icon" style={{ fontSize: "18px" }} />
                  ) : (
                    <ArrowIcon />
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="contact_info_wrap">
            <h3 className="contact_info_title">Contact Information</h3>

            <div className="contact_info_item">
              <a href="tel:+8801745217166" className="contact_info_icon_box" title="Call Nasif">
                <FiPhone />
              </a>
              <div>
                <div className="contact_info_content_title">Call Me</div>
                <a href="tel:+8801745217166" className="contact_info_content_link">
                  +880 1745-217166
                </a>
              </div>
            </div>

            <div className="contact_info_item">
              <a href="mailto:nasifkabir37@gmail.com" className="contact_info_icon_box" title="Email Nasif">
                <FiMail />
              </a>
              <div>
                <div className="contact_info_content_title">Email Me</div>
                <a href="mailto:nasifkabir37@gmail.com" className="contact_info_content_link">
                  nasifkabir37@gmail.com
                </a>
              </div>
            </div>

            <div className="contact_info_item">
              <div className="contact_info_icon_box">
                <FiMapPin />
              </div>
              <div>
                <div className="contact_info_content_title">Location</div>
                <div className="contact_info_content_link" style={{ cursor: "default" }}>
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
