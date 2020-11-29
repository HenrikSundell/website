import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import "./InfoBlock.css";
function InfoSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLable,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <section className="sidebar">
        <section className="intro">
          <img className="potrait" src="images/yo.png" alt="" />

          <header>
            <h2>Henrik Sundell</h2>
            <p>
              <a href="mailto:henrik.sundell@gmail.com">
                henrik.sundell@gmail.com
              </a>
            </p>
          </header>
        </section>

        <section className="side_bar_bio">
          <h2 className="bioHeading">About</h2>
          <p>
            Hi, I&apos;m Henrik. I am a computer science student at
            <a href="https://aalto.fi/"> Aalto university</a> finishing my
            bachelor this spring. I have experience in web development, as you
            might notice mostly backend. :)
          </p>
        </section>

        <section className="footer">
          <ul className="link-icons">
            <a className="link-icon" href="https://github.com/HenrikSundell">
              <AiFillGithub size="32px" />
            </a>
            <a
              className="link-icon"
              href="https://www.linkedin.com/in/henrik-sundell/"
            >
              <AiFillLinkedin size="32px" />
            </a>
            <a className="link-icon" href="mailto:henrik.sundell@gmail.com">
              <AiFillMail size="32px" />
            </a>
          </ul>
          <p className="copyright">
            &copy; Henrik Sundell <Link to="/">sundell.io</Link>.
          </p>
        </section>
      </section>
    </>
  );
}

export default InfoSection;
