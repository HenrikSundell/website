import { render } from "@testing-library/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import "./ContactSection.css";

function ContactSection() {
  render();
  return (
    <section className="about-box">
      <div className="contact-block">
        <a className="contact-link" href="mailto:henrik.sundell@gmail.com">
          <AiFillMail />
          <span className="icon-text">Send me mail!</span>
        </a>
      </div>
      <div className="contact-block">
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/henrik-sundell/"
        >
          <AiFillLinkedin />
          <span className="icon-text">Message me on Linkedin</span>
        </a>
      </div>
      <div className="contact-block">
        <a className="contact-link" href="https://github.com/HenrikSundell">
          <AiFillGithub />
          <span className="icon-text">Check out my GitHub</span>
        </a>
      </div>
    </section>
  );
}
export default ContactSection;
