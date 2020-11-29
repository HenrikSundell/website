import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-box">
      <div className="contact-block">
        <a className="contact-link" href="mailto:henrik.sundell@gmail.com">
          <AiFillMail />
          <span className="icon-text">Send me mail</span>
        </a>
      </div>
      <div className="contact-block">
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/henrik-sundell/"
        >
          <AiFillLinkedin color="#0e76a8" />
          <span className="icon-text">Conntact me on Linkedin</span>
        </a>
      </div>
      <div className="contact-block">
        <a className="contact-link" href="https://github.com/HenrikSundell">
          <AiFillGithub />
          <span className="icon-text">Check out my GitHub</span>
        </a>
      </div>
      <div className="contact-block">
        <a className="contact-link" href="https://t.me/Henkka_1/">
          <FaTelegram color="#0088cc"/>
          <span className="icon-text">Message me on Telegram</span>
        </a>
      </div>
    </section>
  );
}
export default ContactSection;
