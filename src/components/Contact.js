import React, { useState } from "react";
import { ArrowIcon } from "./Icons";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
    }
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
                <h4 style={{ color: "var(--color-primary)", marginBottom: "8px" }}>
                  Thank you, {formState.name}!
                </h4>
                <p style={{ margin: 0 }}>
                  Your inquiry regarding "{formState.subject || "Collaboration"}" has been received.
                  I will get back to you shortly!
                </p>
              </div>
            ) : (
              <form className="contact_form" onSubmit={handleSubmit}>
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

                <button type="submit" className="portfolio-btn" style={{ width: "100%" }}>
                  <span>Submit Now</span>
                  <ArrowIcon />
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
