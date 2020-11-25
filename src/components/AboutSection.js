import React from "react";

import "./AboutSection.css";
function AboutSection({
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
    <section className="about-box">
      <h2 className="title">Brief Introduction of me</h2>
      <h1 className="subtitle">Intro</h1>
      <p>
        I'm interested in both tech and business. Aiming to learn as much as
        possible about both.
      </p>
      <h1 className="subtitle">Experience</h1>
      <p>
        I'have experience in web development from my summer job 2020. I worked
        at the computer science department at aalto developing educational tech.
        Mostly django backend and REST api related tasks. You can find some of
        the work on.{" "}
        <a className="about-link" href="https://github.com/apluslms/a-plus">
          GitHub
        </a>{" "}
        since it is open source.
      </p>
      <h1 className="subtitle">Education</h1>
      <p>
        I' currently planning to finnish my bachelor in computer science at{" "}
        <a className="about-link" href="https://aalto.fi/en">
          Aalto University
        </a>
        . On top of that I'm studying finance at{" "}
        <a className="about-link" href="https://www.hanken.fi/en">
          Hanken School of Economics
        </a>{" "}
        as a minor for my bachelor.
      </p>
    </section>
  );
}

export default AboutSection;
